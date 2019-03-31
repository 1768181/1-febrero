var x=200;
var vel=5;

function setup() {
createCanvas(400,400);
    x=x+1;
  }

function draw() {
    show(255,0,0);
    move();
    bouncer();
        

} 


function show(R,G,B){
    background(220);
    ellipse(x,200,100,100);
    fill(R,G,B);
    }
function move(){
    x=x+vel;
}
function bouncer(){
    if(x>350){
        vel=vel*-1;
    }
    if(x<50){
        vel=vel*-1;
    }

}

