import {format} from "date-fns";

export function formatDate(
  date: string | Date,
  formatPattern = "MMMM dd, yyyy",
) {
  return format(date, formatPattern);
}
