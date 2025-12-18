let grille = 6;
let sound;
let amp;
let font;
let affichage1 = false;

let fft;


function preload(){
  sound = loadSound('sound/aria.mp3')
}

function setup() {
    colorMode(HSL)
    angleMode(DEGREES)
    createCanvas(windowWidth, windowHeight);
    frameRate(10)
    amp = new p5.Amplitude();

    fft = new p5.FFT();
    // pour récupérer des sons 
}

let zoom =0.004;
let temps =0;

function draw() {

   background(255,50,10)
   //jouer avec la transparence du bg pour avoir des traces des anim


   let condition = frameCount%20;
   //permet d'activer et desactiver en auto 

grille1()
   if(affichage1==true){
       
      grille1()
      }

}


function mousePressed(){
 let lecture = sound.isPlaying();
 if(lecture == false){
      sound.play()
 }

    
}

function keyPressed(){
   if(key=='a') {
affichage1 = !affichage1
//! = l'inverse 
   }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

 

function grille1(){

  
     let level = amp.getLevel();
  
    temps = temps+level*0.5;
    let pas = 8

     let marge = pas;

for (let x = -marge; x < width + marge; x += pas/3) {
    for (let y = -marge; y < height + marge; y += pas/3) {

      let paramX = x*zoom*5;
      let paramY = y*zoom;

      let noise3d = noise(paramX, paramY, temps)*grille*5;

      noStroke();
      fill(255,90,90);

      push();
      translate(x,y);
      rotate(noise3d);
      square(x,y,grille-4);
      pop();
    }
  }
}