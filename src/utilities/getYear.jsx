export function getYear(date) {
  const newDate = new Date(date)
  return newDate.getFullYear().toString()
}
