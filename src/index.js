module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }
  let resArr = []
  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[i].length; j++) {
      i%2 == 0 ? resArr.push(matrix[i][j]) : resArr.push(matrix[i][matrix[i].length-1-j]) 
    }
  }
  return resArr
}