function preload(){

}

function setup(){
 canvas = createCanvas(640,480);
 canvas.center();

 video = createCapture(VIDEO);
 video.hide();

 color = "";
}

function draw(){
 image(video,0,0,640,480);
 tint(color);
}

function take_snapshot(){
 save("filtro.png");
}
