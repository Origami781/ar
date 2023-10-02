statuski=""
objects=[]
function preload(){
}

function setup(){
canvas=createCanvas(564, 470)
canvas.center()
video=createCapture(VIDEO)
video.hide()
objectDetector=ml5.objectDetector('cocossd', modelLockedandLoaded)
}

function modelLockedandLoaded(){
console.log("Good job: respect++")
statuski=true    
objectDetector.detect(video, gotResult)
}

function gotResult(e, r){
    if(e){
     console.error(e)   
    }
    else{
console.log(r)
objects=r }   
}

function draw(){
    image(video, 0, 0, 564, 470)
    if(statuski != ""){
        for(i=0; i<objects.length; i++)
        {document.getElementById("e").innerHTML="Object/s detected"
        fill("#b3feff")
        percent=floor(objects[i].confidence*100)
        text(objects[i].label+" "+percent, objects[i].x, objects[i].y)
        noFill()
        stroke("#b3feff")
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }
    }
    }
    