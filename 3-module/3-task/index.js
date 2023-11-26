function camelize(str) {
  // ваш код...
  if (str === '') {
    return str;
  }

  var words = str.split('-');
  var camelized = words[0] + words.slice(1).map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');

  return camelized;
}

