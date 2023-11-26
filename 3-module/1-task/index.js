function namify(users) {
  // ваш код...
  return users.map(user=>user.name)
}
let names = namify(users); // ['Вася', 'Петя', 'Маша']