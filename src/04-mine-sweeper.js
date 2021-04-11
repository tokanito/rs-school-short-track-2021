/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let res=[];
  for (let i=0; i<matrix.length; i++){
      let arr=[];
      res.push(arr);
      for (let k=0; k<matrix[i].length; k++){
          res [i][k]=0;
      }
      for (let k=0; k<matrix[i].length; k++){
          
          if (matrix[i-1]){
              if (matrix[i-1][k]===true){
                  res[i][k]++; 
              }
              if (matrix[i-1][k-1]===true){
                  res[i][k]++; 
              }
              if (matrix[i-1][k+1]===true){
                  res[i][k]++; 
              }
              
          }
          if (matrix[i+1]){
              if (matrix[i+1][k]===true){
                  res[i][k]++; 
              }
              if (matrix[i+1][k-1]===true){
                  res[i][k]++; 
              }
              if (matrix[i+1][k+1]===true){
                  res[i][k]++; 
              }
          }

          if (matrix[i][k+1]===true){
                  res[i][k]++; 
              }
              if (matrix[i][k-1]===true){
                  res[i][k]++; 
              }
      }
  }
  
  return res;
}

module.exports = minesweeper;
