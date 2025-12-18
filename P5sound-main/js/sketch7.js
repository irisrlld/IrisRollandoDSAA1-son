let zoom = 0.003;
let sound;

let amp;

let time =0;
let img;
let ecart = 190


function preload(){
   sound = loadSound('sound/Kosmorider-Night.mp3')
   img = loadImage('dame7.png')
}



function setup() {
   
    angleMode(DEGREES)
 createCanvas(windowWidth, windowHeight);
  img.resize(width,0)
 //background(0,225,0)
    colorMode(HSL)
    amp = new p5.Amplitude();
    textAlign(CENTER)
    ellipseMode(CENTER)
    rectMode(CENTER)
}


let grille = 20;
let marge =1
let maxRota=360

let margeGrille =0;
let grille3Play = true;


function draw() {
    let boucle = frameCount%100;
//   if(boucle<30){
//         grille3()
//         grille1(255)
//   }else{
//     background(255)
//     grille1(0)
//   }
    
grille4()
}

function keyPressed(){
    if(key='3'){
       grille3Play = !grille3Play;
    }
}


function mousePressed(){
    
if(sound.isPlaying() == false){
sound.play()
}
    
}



function grille3(){
     let level = amp.getLevel();
   //time = time+level;
   time+=level*0.3;
   //console.log(level)
  background(232, 100, 64.1,0.05)
   noStroke()
    
 
    
 for (let x = 0; x <width; x+=grille) {
   
    for (let y = 0; y <height; y+=grille) {
     
 
     
  //let noiseX = noise(x*y+time)*200
      let s = noise(x*zoom,y*zoom,time)
      let s1 = noise(500+x*zoom,500+y*zoom,time)
      let noiseX = map(s,0,1,-100,100)
      let noiseY = map(s1,0,1,-100,100)
     fill(251, 100, 22.9)
      noStroke()

      push()
      translate(noiseX+ x+grille/2,noiseY+y+grille/2)
      textSize(grille)
      //strokeWeight(5)
     text('x',0,0)
     pop()
    
    
 
     
    
    
 }

 }

}



function grille4(){
     let level = amp.getLevel();
   //time = time+level;
   time+=level*0.3;

   noStroke()
    
 
    
 for (let x =0; x <width; x+=grille) {
   
    for (let y = 0; y <height; y+=grille) {
     
 
     
  //let noiseX = noise(x*y+time)*200
      let s = noise(x*zoom,y*zoom,time)
     fill(251, 100, 22.9)
      noStroke()
    
    
 
     
    square(x,y,grille-10)
    
 }

 }

}


  