function setup() {
createCanvas(400,400);
}

function draw() {
background(180);
    if(mouseIsPressed){
        if(mouseX>150 && mouseX<=250){
            if(mouseY>150 && mouseY<=255){
                background(0,255,0);
            }
        }
    }
rect(150,150,100,100);
    console.log(mouseX,mouseY);
}   
