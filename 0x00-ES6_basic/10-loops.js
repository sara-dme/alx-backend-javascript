export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
    for (const idx of array) {
      var value = array[idx];
      arr.push(appendString + value);
    }
  
    return array;
  }