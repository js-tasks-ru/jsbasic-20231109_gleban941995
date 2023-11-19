function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 3900
}

let salaries = {
  "John": 1000,
  "Pete": 1600,
  "Mary": 1300
};

alert( sumSalaries(salaries) );
