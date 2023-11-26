function filterRange(arr, a, b) {
  // ваш код...
  let filtered = [];
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= a && arr[i] <= b) {
          filtered.push(arr[i]);
      }
  }

  return filtered;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered); // [3, 1]
console.log(arr); // [5, 3, 8, 1]


