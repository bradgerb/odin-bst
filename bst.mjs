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
    let uniqueArray = sortedArray.filter((item, index) => sortedArray.indexOf(item) === index);
    
    console.log(uniqueArray);

    return root
}

export default buildTree