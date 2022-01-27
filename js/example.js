const array = [1, 2, 3];

const mapResult = map(array, function (item, index, array) {
  return item * 4;
});

console.log(mapResult); // => [4, 8, 12]

const filterResult = filter(array, (item, index, array) => {
  return item > 1;
});

console.log(filterResult); // => [2, 3]

const someResult = some(array, (item, index, array) => {
  return item > 2;
});

console.log(someResult); // => true

const everyResult = every(array, (item, index, array) => {
  return item > 2;
});

console.log(everyResult); // => false
