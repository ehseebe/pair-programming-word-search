const wordSearch = (letters, word) => {
  if (word === '' || !letters.length) {
    return false;
  }

  if (Array.isArray) {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let i = 0; i < horizontalJoin.length; i++) {
      for (let j = 0; j < horizontalJoin[i].length; j++) {
        if (horizontalJoin[i].includes(word)) {
          return true;
        }
      }
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (let i = 0; i < verticalJoin.length; i++) {
      for (let j = 0; j < verticalJoin[i].length; j++) {
        if (verticalJoin[i].includes(word)) {
          return true;
        }
      }
    }
  }

  return false;
}

const transpose = function(matrix) {
    const newArray = [];
  
    for (let i = 0; i < matrix[0].length; i++) {
      newArray.push([]) 
    }
  
    for (let i = 0; i < matrix.length; i++) { 
      
      for (let j = 0; j < matrix[i].length; j++){
       {
         newArray[j].push(matrix[i][j]);
      
    }
   }
   }
   return newArray;
  };


module.exports = wordSearch




// let completeWord = "";
// let array = [ 
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ];

// let word = 'Frank';

// console.log(wordSearch(array, word));


