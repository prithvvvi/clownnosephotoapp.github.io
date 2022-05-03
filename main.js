nose_x=0;
nose_y=0;
function preload() {
    clownnose=loadImage("https://i.postimg.cc/DZv0RWVn/clown-nose1-removebg-preview.png");
}

function setup() {
canvas=createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("the model has been loaded");
}
function draw(){
    image(video,0,0,300,300);
    image(clownnose,nose_x-45,nose_y-45,100,70);

}
function take_snapshot(){
    save("clown_nose_image.png");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x
        nose_y=results[0].pose.nose.y
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);

    }
}