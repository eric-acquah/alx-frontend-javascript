export default function appendToEachArrayValue(array, appendString) {
  // const clone = [];
  let idx = '';
  let value = '';
  let i = 0;

  for (idx of array) {
    value = idx;
    array[i] = appendString + value;
    i += 1;
    // clone.push(appendString + value);
  }

  return array;
}
