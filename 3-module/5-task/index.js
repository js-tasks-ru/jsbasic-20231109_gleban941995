function getMinMax(str) {
  // ваш код...
  const numbers = str.split(' ')
                     .filter(item => !isNaN(item))
                     .map(item => parseFloat(item));
  
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return { min, max };
}
