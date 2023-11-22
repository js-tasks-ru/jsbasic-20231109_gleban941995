function sumSalary(salary) {
  let sum = 0;
  for (let key in salary) {
    if (typeof salary[key] === 'number' && Number.isFinite(salary[key]) && !Number.isNaN(salary[key])) {
      sum += salary[key];
    }
  }
  return sum;
}

let salary = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

let totalSalary = sumSalary(salary);
console.log(totalSalary); // 3900