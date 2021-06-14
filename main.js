function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 120, 100, 400, 300);
    ellipse(120, 100, 55, 55);
    rect(110, 90, 20,300);
    ellipse(120, 400, 55, 55);
    rect(510, 100, 20, 300);
    ellipse(520, 100, 55, 55);
    rect(120, 390, 400, 20);
    ellipse(520, 400, 55, 55);
    fill('green')
    rect(120, 90, 400, 20);
    
}

function take_snapshot(){
    save('student_name.png');
}