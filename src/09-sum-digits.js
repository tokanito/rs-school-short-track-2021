/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  q=n.toString();
  let summ=0;
  for (let i=0; i<q.length; i++){
      summ=summ+parseInt(q[i], 10);
  }
  q=summ;    
  if (q>9){
      return getSumOfDigits(q);              
  } 
             
  return q;        
  } 

module.exports = getSumOfDigits;
