function sort(arr) {
  let last = arr.length - 1;
  debugger;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 1) {
      while (arr[last] !== 0) {
        last--;
      }
      if (last < i) {
        break;
      } else {
        arr[last] = 1;
        arr[i] = 0;
      }
    }
  }
  return arr;
}

console.log(sort([0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0]));
