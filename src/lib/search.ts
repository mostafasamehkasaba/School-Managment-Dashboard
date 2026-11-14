const toSearchText = (value: unknown): string => {
  if (value === null || value === undefined) return "";
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return String(value);
  }
  if (Array.isArray(value)) return value.map(toSearchText).join(" ");
  if (typeof value === "object") {
    return Object.values(value as Record<string, unknown>)
      .map(toSearchText)
      .join(" ");
  }
  return "";
};

export const filterByQuery = <T,>(
  data: T[],
  query?: string | string[],
): T[] => {
  const raw = Array.isArray(query) ? query[0] : query;
  const q = raw?.trim().toLowerCase() ?? "";
  if (!q) return data;

  return data.filter((item) => toSearchText(item).toLowerCase().includes(q));
};
