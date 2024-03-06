export default function appendToEachArrayValue(array, appendString) {
  const clone = [];
  let idx = '';
  let value = '';

  for (idx of array) {
    value = idx;
    clone.push(appendString + value);
  }

  return clone;
}
