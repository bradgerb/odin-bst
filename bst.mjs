import mergeSort from "./sort.mjs";

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.root = buildTree(array);
    }
    
    insert(value, node = this.root) {
        if (node === null) {
            return new Node(value);
        }

        if (value === node.value) {
            return node
        }

        if (value < node.value) {
            node.left = this.insert(value, node.left);
        } else if (value > node.value) {
            node.right = this.insert(value, node.right);
        }

        return node
    }

    remove(value, node = this.root) {
        if (node === null) {
            return node
        }

        if (value < node.value) {
            node.left = this.remove(value, node.left);
        } else if (value > node.value) {
            node.right = this.remove(value, node.right);
        } else {
            if (node.left === null) {
                return node.right
            }

            if (node.right === null) {
                return node.left
            }

            let previousNode = this.getPreviousNode(node);
            node.value = previousNode.value;
            node.right = this.remove(previousNode.value, node.right);
        }
        return node
    }

    getPreviousNode(currentNode) {
        currentNode = currentNode.right;
        while (currentNode !== null && currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode
    }

    find(value, node = this.root) {
        if (node === null) {
            return null
        }

        if (value === node.value) {
            return node
        }

        if (value < node.value) {
            node = this.find(value, node.left);
        } else if (value > node.value) {
            node = this.find(value, node.right);
        }
        return node
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

    let mid = Math.floor((start + end) / 2);
    let root = new Node(sortedArray[mid]);

    root.left = sortedArrayToBST(sortedArray, start, mid - 1);
    root.right = sortedArrayToBST(sortedArray, mid + 1, end);

    return root
}

export default Tree