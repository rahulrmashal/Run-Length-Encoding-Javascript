
function encode(w) {

  let currentLetter, lastLetter, currentCount
  let output = ''
  
  for (let i = 0; i < w.length; i++) {
   
    if (typeof lastLetter === 'undefined') {
      lastLetter = w[i];
      currentCount = 1;
      continue;
    }
    
    if (w[i] !== lastLetter) {
      output += lastLetter + currentCount ;
      lastLetter = w[i];
      currentCount = 1;
      continue;
    }
    currentCount++;
  }
  console.log(output + (lastLetter + currentCount))
  return (output + (lastLetter + currentCount))
  
}
encode('aaabbc')