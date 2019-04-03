const MyArray = require('./array');

//2. Explore the push() method:

function main() {
  MyArray.SIZE_RATIO = 3;
  let arr = new MyArray();
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);

  console.log(arr.get(0));
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  arr.push(5);
  console.log(arr);
  console.log(arr.get(0));

  //drill 5
}

//drill 5 , big o(n)
function replaceSpace(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      newStr += '%20';
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(replaceSpace('tauhida parveen'));

//drill 6
function filter(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filter([0, 1, 8, 9, 10, 12, 6, 4]));

//drill 7

function maxSum(arr) {
  let sum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum < 0) {
      sum = 0;
    }
    if (maxSum < sum) {
      maxSum = sum;
    }
  }
  return maxSum;
}
console.log(maxSum([4, 6, -3, 5, -30, 8, 12]));

//drill 8 bigO(n);

function mergeArr(arr1, arr2) {
  const newArr = [];

  let c1 = 0;
  let c2 = 0;
  while (c1 < arr1.length || c2 < arr2.length) {
    if (arr1[c1] < arr2[c2] || arr2[c2] === undefined) {
      newArr.push(arr1[c1]);
      c1++;
    } else {
      newArr.push(arr2[c2]);
      c2++;
    }
  }
  return newArr;
}
console.log(mergeArr([1, 3, 6, 8, 11, 13], [2, 3, 5, 8, 9, 10, 12]));

/*Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]*/

main();

// the length is 6, the capacity is 12, and the memory address is 3.
// length is 6 because we pushed 6 values into the array.
// capacity is twelve because it went over the previous capacity, so we multiplied it and allocated the new space in memory.
// memory address is 3 because we had to resize the array to accomodate the new values, which starts a new block and copies the values over.

//3. Exploring the pop() method

// the length is 3. This is because we pushed 6 values and then removed 3. 6 - 3 = 3.
// the capacity is 12, this is because we had pushed 6 values. When we pop, we don't decrease the capacity, just the length.
// memory address is 3 because we had to resize the array to accommodate new values. Poping doesn't change the pointer.

//4. Understanding arrays

//it return NaN because of how we initialize the memory in our memory file, it only takes Floats "Float64Array"
//the purpose of the resize function in our array class is to reallocate memory whenever length exceeds the capactiy of our array

//5. urlify
