pixels = [];
function setup() {
  createCanvas(360, 360);
  pixelDensity(1);
  loadPixels();
  let maxLevel = 400 ;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let a = map(x, 0, width, -1.5, 1.5);
      let b = map(y, 0, height, -1.5, 1.5);
      let ca = a ;
      let cb = b ;
      let n = 0;
      let z = 0;
      while (n < maxLevel) {
        let aa = a * a - b * b; // a2 + b2
        let bb = 2 * a * b; // 2 * a * b 
        a = aa + ca; 
        b = bb + cb;
        if (abs(a + b) > 16) {
          break;
        }
        n++;
      }
      let bright = map(n, 0, maxLevel, 0, 1);
      bright = map(sqrt(bright) , 0 , 1 , 0 , 255)
      if(n == maxLevel){
         bright = 0 ;
      }
      let pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}

function draw() {}
