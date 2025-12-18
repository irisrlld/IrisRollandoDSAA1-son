let grille = 5;
let pas = 20
let marge = pas*5
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

   background(255,90,10)
   

   let condition = frameCount%20;
   //permet d'activer et desactiver en auto 

grille3()



if(affichage1==true){
      grille2()
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

for (let x = -marge; x <width-marge; x+=grille) {
      for (let y = -marge; y<height-marge; y+=grille) {
 
         let paramX=x*zoom;
         let paramY =y*zoom;

         let noise3d = noise(paramX,paramY,temps)*grille*20
         let treshold = noise(paramX,paramY,temps)
         fill(255)

         noStroke()
         push()
         rotate(noise3d)
         square(x*2,y*2,grille-6)
         pop()
   
      }
 }

 }

function grille2(){
     let level = amp.getLevel();
   
     
  
    temps = temps+level*0.5;

for (let x = -marge; x <width-marge; x+=grille) {
      for (let y = -marge; y<height-marge; y+=grille) {
 
         let paramX=x*zoom;
         let paramY =y*zoom;

         let noise3d = noise(paramX,paramY,temps)*grille*20
         let treshold = noise(paramX,paramY,temps)
         fill(255)

         noStroke()
         push()
         rotate(noise3d)
         square(x,y,grille-6)
         pop()
   
      }
 }

 }

function grille3(){
     let level = amp.getLevel();
  
    temps = temps+level*0.5;

for (let x = marge; x <width-marge; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {
 
         let paramX=x*zoom;
         let paramY =y*zoom;

         let noise3d = noise(paramX,paramY,temps)
         //map(valeur, min1, min2, max1, min2, max2)

      
        noise3d = map(noise3d,0,1,-100,100)
        stroke(186, 88, 86)
        line(x,y,x+noise3d,y+grille-5)

        
       
        stroke(250, 100, 60)
        line(x,y,x+grille-5,y+noise3d)
        
      }

         
      
 }
 }