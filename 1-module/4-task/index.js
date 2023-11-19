function checkSpam(str) {

  let lowerStr = str.toLowerCase();

  return lowerStr.includes('1xbet now') || lowerStr.includes('xxx');
}
checkSpam('1XbeT now') === true
checkSpam('free xxxxx') === true
checkSpam('innocent rabbit') === false