/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let summ=0;
//   throw new Error('Not implemented');
 var exclude =[];
 for (let i=0; i<matrix.length; i++){
     let current = matrix[i];
     for (let k=0; k<current.length; k++){
         if (!exclude.includes (k)){
             summ=summ+current[k];
         }           
     }
     console.log (summ);
     exclude =[];
     for (let k=0; k<current.length; k++){
         if (current[k]==0){
              exclude.push(k);
         }           
     }
     console.log (exclude);

 }
  console.log (summ);
  return summ;
}

module.exports = getMatrixElementsSum;
