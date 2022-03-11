function setup()
{
    video=createCapture(VIDEO);
    video.size(580,600);

    canvas=createCanvas(550,550);
    canvas.position(600,100);

    poseNet=ml5.poseNet(video,modelLoaded());
    poseNet.on('pose',gotPoses);
}

function draw()
{
background(lightblue);
}

function modelLoaded()
{
    console.log('Posenet is Initialised');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}