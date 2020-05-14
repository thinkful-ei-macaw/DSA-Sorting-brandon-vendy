//1. Understanding merge sort
//21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

//[21, 1, 26, 45, 29, 28, 2, 9]
//[16, 49, 39, 27, 43, 34, 46, 40]

//a.[21 1], [26,45],[29,28]
//left:
//[21, 1, 26, 45, 29, 28, 2, 9]
//[21 1], [26,45], [29, 28], [2,9]
//[1 21], [26,45], [28,29],[2,9]
//1 21 26 45 28 29 2 9
//right:[16, 49], [27, 39], [34, 43]
// [16, 49], [39, 27], [43, 34], [46, 40]
// [16, 49], [27, 39], [34, 43], [40, 46]
// [16, 49, 27, 39, 34, 43, 40, 46]
// [16, 27, 34, 39, 40, 43, 46]

//a.3rd call is mergeSort[21]
//b. 16th call is mergeSort[34]
//c. first list: [1,21], second list [26,45]
//d. merge[34,43]

// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
// [1, 2, 9, 16, ... 45] [46, 49]
//----
//1st call to left mergeSort(21, 1, 26, 45, 29, 28, 2, 9)
//right mergeSort(16, 49, 39, 27, 43, 34, 46, 40)

//2nd call to left mergeSort([21,1],[26,45],[29,28])
//right mergeSort([16, 49], [39, 27], [43,34], [46,40])

//3rd call to left mergeSort([21][1],[26][45],[29][28],[2][9])
  //mergeSort[21] mergeSort[1], mergeSort[26] mergeSort[45], mergeSort[29] mergeSort[28], mergeSort[2] mergeSort[9]
//right mergeSort([16][49],[39][27],[43][34],[46][40])
//mergeSort[16] mergeSort[49], mergeSort[39] mergeSort[27], mergeSort[43] mergeSort[34], mergeSort[46] mergeSort[40]
//left: merge[1,21] merge[26,45], merge[28,29], merge[2,9]
//right: merge[16,49],merge[27,39], merge[34,43], merge[40,46]

//merge left: [1,2,9,21,26,28,29,45]
//merge right: [16,27,34,39,40,43,46]

//merge [1,2,9,16,21,26,27,28,29,34,39,40,43,45,46]


const bubbleSort = arr => {
  // count how many iterations 
  let sorts = 0;
  //loop through, - 1 from length for each step in the sort
  for(let i = 0; i < arr.length - 1; i++) {
    
  }
}



//breaks array down into continually smaller chunks
//then merges them back together
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}
