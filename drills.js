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
}

// the length is 6, the capacity is 12, and the memory address is 3.
// length is 6 because we pushed 6 values into the array.
// capacity is twelve because it went over the previous capacity, so we multiplied it and allocated the new space in memory.
// memory address is 3 because we had to resize the array to accomodate the new values, which starts a new block and copies the values over.

//3. Exploring the pop() method

// the length is 3. This is because we pushed 6 values and then removed 3. 6 - 3 = 3.
// the capacity is 12, this is because we had pushed 6 values. When we pop, we don't decrease the capacity, just the length.
// memory address is 3 because we had to resize the array to accommodate new values. Poping doesn't change the pointer.

