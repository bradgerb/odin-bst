class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.array = array;
        this.root = buildTree();
    }
}