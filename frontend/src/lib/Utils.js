/**
 * Formats a date into a string representation.
 *
 * @param {Date} date - The date to format.
 * @return {string} The formatted date as a string.
 */
export function formatDate(date) {
  return date.toLocaleDateString("en-us", {
    day: "numeric",
    year: "numeric",
    month: "short",
  });
}

/**
 * Formats the given date as a string in the format "HH:MM".
 *
 * @param {Date} date - The date to format.
 * @return {string} The formatted time string.
 */
export function formatTime(date) {
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

/**
 * Formats the input date into a string in the YYYY-MM-DD format.
 *
 * @param {Date} date - The input date to be formatted.
 * @return {string} The formatted date string in the YYYY-MM-DD format.
 */
export function inputFormatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

/**
 * Formats the input time to a specific format.
 *
 * @param {Date} date - The input date object to be formatted.
 * @return {string} The formatted time in the format "HH:MM".
 */
export function inputFormatTime(date) {
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
