export function slugify(input: string): string {
  return input
    .toLowerCase() // Convert the string to lowercase
    .replace(/[^a-z0-9]+/g, "-") // Replace spaces and non-alphanumeric characters with a hyphen
    .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
    .replace(/^-|-$/g, ""); // Remove leading and trailing hyphens
}
