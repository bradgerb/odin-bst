import Tree from "./bst.mjs";

let testData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

let testTree = new Tree(testData);
let printTree = testTree.root;
prettyPrint(printTree);

// testTree.insert(1000);
// prettyPrint(printTree);

// testTree.remove(3);
// prettyPrint(printTree);
// testTree.remove(9);
// prettyPrint(printTree);
// testTree.remove(67);
// prettyPrint(printTree);
// testTree.remove(8);
// prettyPrint(printTree);
// testTree.remove(42);
// prettyPrint(printTree);

// console.log(testTree.find(4));
// console.log(testTree.find(324));
// console.log(testTree.find(42));

// testTree.levelOrder((node)=> {
//   console.log(node.value);
// });

// testTree.preOrder((node)=> {
//   console.log(node.value);
// });

// testTree.inOrder((node)=> {
//   console.log(node.value);
// });

// testTree.postOrder((node)=> {
//   console.log(node.value);
// });

// console.log(testTree.height(8));
// console.log(testTree.height(1));
// console.log(testTree.height(6345));
// console.log(testTree.height(92387));

// console.log(testTree.depth(8));
// console.log(testTree.depth(1));
// console.log(testTree.depth(6345));
// console.log(testTree.depth(92387));
// console.log(testTree.depth(5));

// console.log(testTree.isBalanced());
// testTree.insert(1000);
// testTree.insert(1001);
// console.log(testTree.isBalanced());

testTree.insert(1000);
testTree.insert(1001);
testTree.insert(1002);
testTree.insert(1003);
testTree.rebalance();
prettyPrint(testTree.root);
