import mergeSort from "./sort.mjs";

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = buildTree(array);
    }
}

function buildTree(array) {
    let root;
    let sortedArray = mergeSort(array);
    //remove duplicates
    sortedArray = sortedArray.filter((item, index) => sortedArray.indexOf(item) === index);
   
    root = sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);
    
    return root
}

function sortedArrayToBST(sortedArray, start, end) {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(sortedArray[mid]);

    root.left = sortedArrayToBST(sortedArray, start, mid - 1);
    root.right = sortedArrayToBST(sortedArray, mid + 1, end);

    return root
}

export default buildTree