function setup() {
    createCanvas(400, 400);
    background(30, 144, 255);
  
  }
  
  function draw() {
    
     stroke("yellow");
     fill("violet");
    
    // console.log(mouseIsPressed); utilizado para ver logs do mouse quando é precionado.
    
    if (mouseIsPressed) {
  
     rect(mouseX, mouseY, 50,40);
    }
    
  }
  