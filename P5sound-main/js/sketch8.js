let grille = 10;
let marge = 1;
let sound;
let amp;
let font;
let fft;


let affichage1 = true;




function preload(){
  sound = loadSound('sound/Inlandsis.mp3')
}

function setup() {
    colorMode(HSL)
    createCanvas(windowWidth, windowHeight);
    amp = new p5.Amplitude();
   
}

let zoom =0.02;
let temps =0;

function draw() {
   background(255,40,10)
  
 
         grille1()
         grille2()

      
}


function mousePressed(){
 let lecture = sound.isPlaying();
 if(lecture == false){
      sound.play()
 }    
}

function keyPressed(){
   if(key=='1'){
     affichage1 = !affichage1
   }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




function grille1(){
      let level = amp.getLevel();
      temps+=level*0.3;
stroke(360,50,50,0.7)
//fill(100,50,50)
noFill()

//inverser x et y pour faire des ligne horizontale
 for (let x = 0; x <width; x+=grille-6) {
    beginShape()
    for (let y = 0; y <height; y+=grille-6) {
     
      let noiseX = noise(x*zoom,y*zoom,temps)*10
      let treshold = noise(x*zoom,y*zoom,temps)
      
      if(treshold>0.05){
   vertex(x+noiseX,y) 
   }

   else{
    vertex(x,y)
      }
 }
 endShape()
 }
}


function grille2(){
      let level = amp.getLevel();
      temps+=level*0.3;
stroke(360,70,70)
//fill(100,50,50)




//inverser x et y pour faire des ligne horizontale
 for (let y = 0; y <height; y+=grille) {
    beginShape()
    for (let x =0; x <width; x+=grille) {
     
      let noiseX = noise(x*zoom,y*zoom,temps)*100
      let treshold = noise(x*zoom,y*zoom,temps)
      
      if(treshold>0.05){
   vertex(x,y+noiseX) 
   }

   else{
    vertex(x,y)
      }
 }
 endShape()
 }
}