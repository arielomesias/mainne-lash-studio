"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useId, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { CITIES } from "@/data/cities";
import { SERVICES } from "@/data/pricing";

/**
 * Menu principal. Los enlaces salen de los mismos datos que el resto del sitio
 * (SERVICES, CITIES), no hardcodeados.
 *
 * Es client component por la interaccion (dropdowns + panel movil), pero
 * hace SSR de todos los <a>, asi que el enlazado interno es visible sin JS.
 */

type NavLink = { href: string; label: string };

const lashSets: NavLink[] = SERVICES.map((s) => ({ href: s.href, label: s.name }));
const areas: NavLink[] = [
  { href: "/", label: "Burnaby" },
  ...CITIES.map((c) => ({ href: c.href, label: c.name })),
];
const flatLinks: NavLink[] = [
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Guides" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  // Que dropdown de desktop esta abierto (por etiqueta), o null.
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  // Hover: abrir al instante, cerrar con un retardo corto para no parpadear al
  // cruzar del boton al panel.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  function hoverOpen(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }
  function hoverClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }
  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  // Cerrar todo al navegar a otra ruta.
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Escape cierra dropdowns y panel. Click fuera cierra dropdowns.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClick);
    };
  }, []);

  // Bloquear scroll del body mientras el panel movil esta abierto.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <div ref={navRef} className="flex items-center gap-2">
      {/* ---- Desktop nav (md+) ---- */}
      <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
        <DesktopDropdown
          label="Lash sets"
          links={lashSets}
          open={openMenu === "Lash sets"}
          onToggle={() =>
            setOpenMenu((cur) => (cur === "Lash sets" ? null : "Lash sets"))
          }
          onOpen={() => hoverOpen("Lash sets")}
          onClose={hoverClose}
        />
        <DesktopDropdown
          label="Areas"
          links={areas}
          open={openMenu === "Areas"}
          onToggle={() =>
            setOpenMenu((cur) => (cur === "Areas" ? null : "Areas"))
          }
          onOpen={() => hoverOpen("Areas")}
          onClose={hoverClose}
        />
        {flatLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md px-3 py-2 text-sm text-ink transition-colors hover:text-olive-dark"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Button href="/book/" className="px-4 py-2 sm:px-6 sm:py-3">
        Book now
      </Button>

      {/* ---- Hamburguesa (movil) ---- */}
      <button
        type="button"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls={panelId}
        onClick={() => setMobileOpen((v) => !v)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink md:hidden"
      >
        <HamburgerIcon open={mobileOpen} />
      </button>

      {/* ---- Panel movil ---- */}
      <MobilePanel
        id={panelId}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </div>
  );
}

function DesktopDropdown({
  label,
  links,
  open,
  onToggle,
  onOpen,
  onClose,
}: {
  label: string;
  links: NavLink[];
  open: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
}) {
  const menuId = useId();
  return (
    // Hover abre/cierra; el foco (teclado) tambien abre, y al salir el foco del
    // contenedor cierra. El clic sigue funcionando para pantallas tactiles.
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onClose();
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={onToggle}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-ink transition-colors hover:text-olive-dark"
      >
        {label}
        <span
          aria-hidden="true"
          className={`text-olive transition-transform ${open ? "rotate-180" : ""}`}
        >
          &#9662;
        </span>
      </button>
      {open && (
        // Wrapper con pt-2: crea la separacion visual como padding (no margen),
        // asi el area de hover es continua entre el boton y el panel (sin hueco
        // muerto que dispare mouseleave).
        <div className="absolute left-0 top-full z-40 pt-2">
          <ul
            id={menuId}
            className="min-w-52 rounded-xl border border-beige bg-bg p-2 shadow-sm"
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-cream hover:text-olive-dark"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MobilePanel({
  id,
  open,
  onClose,
}: {
  id: string;
  open: boolean;
  onClose: () => void;
}) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Al abrir, llevar el foco al primer enlace del panel.
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  if (!open || !mounted) return null;

  // Portal a <body>: el header tiene backdrop-blur, que crea un containing
  // block para descendientes `fixed`. Sin el portal, `fixed inset-0` se
  // posicionaria contra el header (~64px) en vez del viewport.
  return createPortal(
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop: cierra al tocar fuera. */}
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-ink/20"
      />

      <div
        id={id}
        className="absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-bg p-6 shadow-xl"
      >
        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink"
          >
            <HamburgerIcon open />
          </button>
        </div>

        <nav aria-label="Main" className="mt-2">
          <PanelGroup heading="Lash sets" links={lashSets} firstRef={firstLinkRef} />
          <PanelGroup heading="Areas" links={areas} />
          <PanelGroup heading="Studio" links={flatLinks} />
        </nav>

        <div className="mt-8">
          <Button href="/book/" className="w-full">
            Book now
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function PanelGroup({
  heading,
  links,
  firstRef,
}: {
  heading: string;
  links: NavLink[];
  firstRef?: React.RefObject<HTMLAnchorElement | null>;
}) {
  return (
    <div className="border-b border-beige py-4">
      <h2 className="font-serif text-sm uppercase tracking-wide text-muted">
        {heading}
      </h2>
      <ul className="mt-2 space-y-1">
        {links.map((link, i) => (
          <li key={link.href}>
            <Link
              ref={i === 0 ? firstRef : undefined}
              href={link.href}
              className="block rounded-md py-2 text-lg text-ink hover:text-olive-dark"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M5 5l14 14" />
          <path d="M19 5L5 19" />
        </>
      ) : (
        <>
          <path d="M3 6h18" />
          <path d="M3 12h18" />
          <path d="M3 18h18" />
        </>
      )}
    </svg>
  );
}
