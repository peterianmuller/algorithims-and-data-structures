const bubbleSort = (arr) => {
  // iterate over array starting at index 0 with counter i
  for (let i = 0; i < array.length; i++) {
    // iterate over array starting at index 1 with counter j
    for (let j = i + 1; j < array.length - 1; j++) {
      if (array[i] > array[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
      // if element at index i is greater than element at index j swap
    }
  }
  // return array
  return array;
  // todo: complete bubble sort
};
