function Branch(begin, end) {
  this.begin = begin;
  this.end = end;

  this.show = function () {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  };

  this.branchRight = function () {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 2);
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let right = new Branch(this.end, newEnd);
    return right;
  };

  this.branchLeft = function () {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-(PI / 2));
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let left = new Branch(this.end, newEnd);
    return left;
  };

  this.jitter = function(){
     this.end.x += random(-0.5,0.5)
     this.end.y += random(-0.5,0.5)
  }
}
