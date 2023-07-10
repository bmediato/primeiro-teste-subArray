array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// primeira forma para entendimento do requisito

// sumMax = (array) => {
//   let maxSum = 0; // usada para encontrar a soma máxima 
//   let currentSum = 0; // usada para calcular a soma atual do subarray
  
//   for(let i = 0; i < array.length; i += 1) {
//     currentSum = 0;

//     for(let j = i; j < array.length; j += 1) {
//       currentSum += array[j];

//       if( currentSum > maxSum) {
//         maxSum = currentSum;
//       }
//     }
//   }
//   return maxSum
// }

// segunda forma refatorada para diminuir a complexidade de tempo e retirar o for aninhado

sumMax2 = (array) => {
  let maxSum = array[0]; // usada para encontrar a soma máxima 
  let currentSum = array[0]; // usada para calcular a soma atual do subarray
  
  for(let i = 1; i < array.length; i += 1) {
    if(currentSum + array[i] > array[i]){
      currentSum += array[i]
    } else {
        currentSum = array[i];
    }
    
    if(currentSum > maxSum) {
      maxSum = currentSum
    }

  }
  return maxSum
}

console.log(sumMax(array));
console.log(sumMax2(array));