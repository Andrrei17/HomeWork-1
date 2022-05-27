// bubble sort

let arr = [2, 3, 1, 9, 6, -2];

function bubbleSort(array) {
    let bubble = [];
    array.sort((a, b) => {
        return a - b;
    });
   bubble.push(array);
  
  return bubble;
}

console.log(bubbleSort(arr));



