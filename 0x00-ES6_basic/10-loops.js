export default function appendToEachArrayValue(array, appendString) {
  const clone = [];
  // let idx = '';
  // let value = '';

  for (const idx of array) {
    clone.push(appendString + idx);
  }

  return clone;
}
