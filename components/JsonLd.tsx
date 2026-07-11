/**
 * Unico punto donde el sitio inyecta structured data.
 *
 * `</script>` dentro de un valor string cerraria la etiqueta antes de tiempo y
 * dejaria el resto del JSON como HTML ejecutable. Escapamos `<` para que eso no
 * pueda ocurrir aunque el copy incluya la secuencia.
 */
export function JsonLd({ schema }: { schema: object }) {
  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
