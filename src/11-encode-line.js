/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let names=str.split('');
  var output=[];
  for (let i=0; i<names.length; i++){
      let count=1;
      let el=names[i];        
      if (names[i+1]!=el){
          output.push(el);
      }
      else if (names[i+1]==el){
          while (names[i+1]==el){
              i++;
              count++;
          }
          let newEl=count+el;
          output.push(newEl);            
      }        
  }
     
  return output.join('');
}

module.exports = encodeLine;
