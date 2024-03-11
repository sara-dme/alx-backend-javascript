export default function cleanSet(set, str) {
    if (str === undefined || str.length === 0) {
        return '';
    }
    return [...set]
      .filter((str) => (str !== undefined ? str.startsWith(str) : ''))
      .map((str) => (str !== undefined ? str.slice(str.length) : ''))
      .join('-');
}