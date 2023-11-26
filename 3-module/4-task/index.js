function showSalary(users, age) {
  // ваш код...
  let result = '';
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.age <= age) {
      result += `${user.name}, ${user.balance}\n`;
    }
  }
  return result.trim();
}

let result1 = showSalary(users, 40);
console.log(result1);

let result2 = showSalary(users, 30);
console.log(result2);
