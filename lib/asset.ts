/**
 * Prefija una ruta de /public con el basePath del sitio.
 *
 * Necesario en GitHub Pages, donde el sitio vive en un subpath
 * (/mainne-lash-studio) y `next/image` con `unoptimized` NO agrega el basePath
 * al `src` por si mismo (los <Link> y los iconos de metadata si). Fuera de Pages
 * `NEXT_PUBLIC_BASE_PATH` es "" y la ruta queda igual (raiz).
 *
 * Uso: <Image src={asset("/logo-header.png")} ... />
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
