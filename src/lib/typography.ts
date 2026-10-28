// Typographic quotes for display. The source text stays as written; only the glyphs change.
export function smart(text: string) {
  return text
    .replace(/(^|[\s(\[{"“])'/g, "$1‘")
    .replace(/'/g, "’")
    .replace(/(^|[\s(\[{‘])"/g, "$1“")
    .replace(/"/g, "”");
}
