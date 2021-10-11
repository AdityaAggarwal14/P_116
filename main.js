nosex=0
nosey=0
function preload(){
img= loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function draw(){
image(video,0,0,300,300);
image(img,nosex,nosey,80,35);
}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initialised");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-10;
        nosey=results[0].pose.nose.y+10;
        console.log("nosex= "+results[0].pose.nose.x);
        console.log("nosey= "+results[0].pose.nose.y);
    }
}
function take_snapshot(){
    save('Aditya.png');
}