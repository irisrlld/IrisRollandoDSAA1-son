let grille = 3;
let sound;
let amp;
let font;
let affichage1 = false;

let fft;


function preload(){
  sound = loadSound('sound/Kosmorider-Night.mp3')
}

function setup() {
    colorMode(HSL)

    createCanvas(windowWidth, windowHeight);
    frameRate(10)
    amp = new p5.Amplitude();

    fft = new p5.FFT();
    // pour récupérer des sons 
}

let zoom =0.004;
let temps =0;

function draw() {

   background(255,50,50)


   let condition = frameCount%20;
   //permet d'activer et desactiver en auto 
 
   //cercle avec noise 
   let level = amp.getLevel();
   let baseRadius = map(level, 0, 0.3, 150, 400);  
   let detail = 120;                                // nombre de points
   let noiseAmp = map(level, 0, 0.3, 20, 120);      // force de la déformation.                   
  

  noFill();
  stroke(0, 0, 100, 0.3); 
  strokeWeight(15);

  beginShape();
  for (let i = 0; i < detail; i++) {
  let angle = map(i, 0, detail, 0, TWO_PI);

  
  let xoff = cos(angle) * 0.8;
  let yoff = sin(angle) * 0.8;

  
  let deformation = noise(xoff + frameCount*0.01, yoff, level*10);

  let radius = baseRadius + deformation * noiseAmp;

  let x = width/2 + cos(angle) * radius;
  let y = height/2 + sin(angle) * radius;

  vertex(x, y);
}
endShape(CLOSE);
 // cercle avec noise


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




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

 

function grille1(){
     let level = amp.getLevel();
  
    temps = temps+level*0.5;

for (let x = 0; x <width; x += grille) {
      for (let y = 0; y<height; y += grille) {
 
         let paramX=x*zoom;
         let paramY =y*zoom;

         let noise3d = noise(paramX,paramY,temps)*grille*5
         let treshold = noise(paramX,paramY,temps)
         fill(random*9)

         noStroke()
         push()
         
         rotate(noise3d)
         square(x*3,y,grille-5)
         //retirer le *5 pour rendu plus organique et pas en ligne 


         pop()

         
   
      }
 }

 }

