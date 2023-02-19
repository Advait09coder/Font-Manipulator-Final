leftWristX = 0;
rightWristX = 0;

difference = 0;
mainDiff = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(500,500);
    canvas.position(600,175);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Intialized.");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        mainDiff = difference / 4;
        console.log("Left Wrist = " + leftWristX + " Right Wrist = " + rightWristX + " Difference = ", + difference);
    }
}

function draw(){
    background('#00FF00');
    textSize(mainDiff);
    fill('#000000');
    text("This Is Advait Chavan",100,250);
    document.getElementById("f_size").innerHTML = difference;
}