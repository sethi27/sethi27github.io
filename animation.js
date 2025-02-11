console.log("Hello, this is my JavaScript file!");

let x = 0; 

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('p5-container'); 
    console.log('Canvas created successfully'); 
}

function draw() {
    background(0);
    fill(0, 0, 255);
    ellipse(x, height/2, 100, 100);

    x += 2;
    if (x > width + 50) {
        x = -50;
    }
}