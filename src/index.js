
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];
  const arr =[];
  matrix.map((el,ind) =>{
  if(ind % 2===0) arr.push(...el)
    else arr.push(...el.reverse())
  }

  )

  return arr;
}
