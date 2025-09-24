export function join(...values: any[]): string {
  return values
    .filter((value: unknown): value is string => typeof value === "string")
    .map((value) => value.trim())
    .join(" ");
}
