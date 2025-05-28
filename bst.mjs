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

    levelOrder(callback) {

        if (typeof callback !== 'function') {
            throw new Error('Callback is not defined as a function');
        }

        let queue = [this.root];

        while (queue.length > 0) {
            let currentNode = queue.shift();

            callback(currentNode);
            
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }

    preOrder(callback) {

        if (typeof callback !== 'function') {
            throw new Error('Callback is not defined as a function');
        }

        if (this.root === null) {
            return null
        }

        function recursionPreOrder(node) {

            if (node === null) {
                return
            }

            callback(node);

            if(node.left !== null) {
                recursionPreOrder(node.left);
            }

            if(node.right !== null) {
                recursionPreOrder(node.right);
            }

            return
        }

        recursionPreOrder(this.root);
    }

    inOrder(callback) {

        if (typeof callback !== 'function') {
            throw new Error('Callback is not defined as a function');
        }

        if (this.root === null) {
            return null
        }

        function recursionPreOrder(node) {

            if (node === null) {
                return
            }

            if(node.left !== null) {
                recursionPreOrder(node.left);
            }

            callback(node);

            if(node.right !== null) {
                recursionPreOrder(node.right);
            }

            return
        }

        recursionPreOrder(this.root);
    }

    postOrder(callback) {

        if (typeof callback !== 'function') {
            throw new Error('Callback is not defined as a function');
        }

        if (this.root === null) {
            return null
        }

        function recursionPreOrder(node) {

            if (node === null) {
                return
            }

            if(node.left !== null) {
                recursionPreOrder(node.left);
            }

            if(node.right !== null) {
                recursionPreOrder(node.right);
            }

            callback(node);

            return
        }

        recursionPreOrder(this.root);
    }
 
    height(value) {
        
        let node = this.find(value);

        if (node === null) {
            return null
        }

        const recursionHeight = (node)=> {
            if (node === null) {
                return null
            }
    
            let leftHeight = recursionHeight(node.left);
            let rightHeight = recursionHeight(node.right);

            return Math.max(leftHeight, rightHeight) + 1;
        }
        return recursionHeight(node) - 1;
    }

    depth(value) {
        let node = this.find(value);
        let currentNode = this.root;
        let depth = 0;

        if (node === null || currentNode === null) {
            return null
        }
        
        while (currentNode !== null) {
            if (value < currentNode.value) {
                depth++;
                currentNode = currentNode.left;
            } else if(value > currentNode.value) {
                depth++;
                currentNode = currentNode.right;
            } else {
                return depth
            }
        }
        return null
    }

    isBalanced() {
        let currentNode = this.root;

        if (currentNode === null) {
            return null
        }

        let result = true
        
        let checkFalse = this.levelOrder((currentNode)=> {

            let leftHeight = 0
            let rightHeight = 0

            if (currentNode.left) {
                leftHeight = this.height(currentNode.left.value);
            }
            
            if (currentNode.right) {
                rightHeight = this.height(currentNode.right.value);
            }

            let heightDifference = Math.abs(leftHeight - rightHeight);

            if (heightDifference > 1) {
                return false
            }
        });
        
        if (checkFalse === false) {
            result = false;
        }

        return result
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