//1. Understanding merge sort
//a.3rd call is mergeSort[21]
//b. 16th call is mergeSort[34]
//c. first list: [1,21], second list [26,45]
//d. merge[34,43]


//21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

//[21, 1, 26, 45, 29, 28, 2, 9]
//[16, 49, 39, 27, 43, 34, 46, 40]



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



//2.Understanding Quicksort
//a. Pivot could be either 14, or 17
//values below 14 or 17 are less, 
//values above 14 or 17 are higher
//b.  9, answer[16], 13, 15, 19, 10, 3, 17, 14, pivot(12)
// pivot(14), 17, 12, 15, answer[3], 10, 19, 16, 9, 13
//breaks array down into continually smaller chunks
//then merges them back together


function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

const partition = (arr, start, end) => {
  // final value in array too look for
  const pivot = arr[end - 1];
  let j = start;
  for (let i = 0; i < end - 1; i++) {
    console.log(arr);
    if (arr[i] <= pivot) {
      console.log(arr);
      swap(arr, i, j);
      console.log(arr);
      j++;
    }
  }
  console.log(arr);
  swap(arr, end - 1, j);
  console.log(arr);
  return j;
};

const quickSort = (arr, start = 0, end = arr.length) => {
  if (start >= end) {
    return arr;
  }
  const middle = partition(arr, start, end);
  console.log(arr);
  arr = quickSort(arr, start, middle);
  console.log(arr);
  arr = quickSort(arr, middle + 1, end);
  return arr;
};

console.log(quickSort(qSortArray));

const qSortArray = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5,
];
