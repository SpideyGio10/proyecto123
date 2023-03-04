function setup(){
    canvas=createCanvas(350,350);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(350,350);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("#969A97");
}

function modelLoaded(){
    console.log("PoseNet se inicializo");
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
    }
}