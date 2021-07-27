export default function parseDate (timestamp) {
  const date = new Date(timestamp);
  const string = date.toDateString().split(' ');
  const year = string[3];
  const day = string[2];
  const month = string[1];
  return `${month} ${day}, ${year}`
}