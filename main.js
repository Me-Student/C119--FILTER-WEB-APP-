noseX=0;
noseY=0;

function preload() {
  lipStick = loadImage('https://www.google.com/imgres?imgurl=http%3A%2F%2Fclipart-library.com%2Fimage_gallery2%2FLips-PNG-Picture.png&imgrefurl=http%3A%2F%2Fclipart-library.com%2Ffree%2Flips-clipart-transparent.html&tbnid=an8Dal-Q3OfrYM&vet=12ahUKEwiunJ6UosnxAhX2gksFHft9D-IQMygAegUIARCwAQ..i&docid=B4HgNQHa9XASHM&w=2261&h=818&q=lips%20animation%20with%20transparent%20background&ved=2ahUKEwiunJ6UosnxAhX2gksFHft9D-IQMygAegUIARCwAQ');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-40;
    noseY = results[0].pose.nose.y;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(lipStick, noseX, noseY, 80, 35);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
