import Tree from "./bst.mjs";

let driverTreeArray = [];

for (let i = 0; i < 23; i++){
    driverTreeArray.push(Math.floor(Math.random() * 100))
}

//step 1
console.log('Step 1');
let driverTree = new Tree(driverTreeArray);
console.log(driverTree);

//step 2
console.log('Step 2');
console.log(driverTree.isBalanced());

//step 3
console.log('Step 3');

console.log('Level order');
driverTree.levelOrder((node)=> {
  console.log(node.value);
});

console.log('Pre order');
driverTree.preOrder((node)=> {
  console.log(node.value);
});

console.log('In order');
driverTree.inOrder((node)=> {
  console.log(node.value);
});

console.log('Post order');
driverTree.postOrder((node)=> {
  console.log(node.value);
});

//step 4
console.log('Step 4');
for (let i = 0; i < 42; i++){
    driverTree.insert(Math.floor((Math.random() * 100) + 100))
}
console.log(driverTree);

//step 5
console.log('Step 5');
console.log(driverTree.isBalanced());

//step 6
console.log('Step 6');
driverTree.rebalance();
console.log(driverTree);

//step 7
console.log('Step 7');
console.log(driverTree.isBalanced());

//step 8
console.log('Step 8');

console.log('Level order');
driverTree.levelOrder((node)=> {
  console.log(node.value);
});

console.log('Pre order');
driverTree.preOrder((node)=> {
  console.log(node.value);
});

console.log('In order');
driverTree.inOrder((node)=> {
  console.log(node.value);
});

console.log('Post order');
driverTree.postOrder((node)=> {
  console.log(node.value);
});
