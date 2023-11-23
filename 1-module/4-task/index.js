function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('1xbet now') || lowerStr.includes('xxx');
}

alert( checkSpam('1XbeT now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );