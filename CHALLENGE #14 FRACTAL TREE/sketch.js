var angle = 0;
var slider;
let tree = [];
let currentIndex = 1;
let ind = 0 ;
let root ;
let leaves = [];

function setup() {
  createCanvas(600, 400);
  let A = createVector(width / 2, height);
  let B = createVector(width / 2, height - 100);
  root = new Branch(A, B);
  tree[0] = root;
}
 

function mousePressed(){
    tree[currentIndex++] = tree[ind].branchRight(); 
    tree[currentIndex++] = tree[ind].branchLeft(); 
    ind++
    if(ind==8){
      for(let i = 0 ; i < tree.length ; i++){
        let leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
}


function draw() {
  background(51);
  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
  }
  // for (let i = 0; i < leaves.length ; i++) {
  //   fill(255 , 0 , 100)
  //   ellipse(leaves[i].x, leaves[i].y, 8, 8)
  //   tree[i].jitter();
  // }
}
