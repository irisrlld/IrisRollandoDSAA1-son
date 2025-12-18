let grille = 4;
let pas = 50
let marge = pas*5
let sound;
let amp;
let font;
let affichage1 = false;
let affichage2 = false;
let affichage3 = false;

let fft;


function preload(){
  sound = loadSound('sound/Molecule - Abysses.mp3')
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



grille4()

if(affichage3==true){
grille1()  

      }

 if(affichage2==true){
      grille3()
      }


if(affichage1==true){
      grille2() 

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
if(key=='z') {
affichage2 = !affichage2 
//! = l'inverse 
   }
if(key=='e') {
affichage3 = !affichage3
//! = l'inverse 
   }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function grille1() {
  let level = amp.getLevel();
  temps += level*0.5;

  push();
  translate(width/2,height/2);

  let seuil = 0.5; 

  for (let x = -width/2+marge;x<width/2-marge;x+=grille) {
    for (let y = -height/2+marge;y<height/2-marge;y+=grille) {

      let paramX = x*zoom;
      let paramY = y*zoom;

      let noise3d = noise(paramX,paramY,temps);
      noise3d = map(noise3d,0,1,-50,50)

      let thresholdValue = noise(paramX*0.5,paramY*0.5,temps); 

      if (thresholdValue>seuil) { 
        stroke(186,88,86);
        line(x,y,x+noise3d,y+grille);

        stroke(250,100,60);
        line(x,y,x+grille,y+noise3d);
      }
    }
  }

  pop();
}



function grille2(){
 let level = amp.getLevel();
  
    temps = temps+level*0.5;
    a=+0.1

 push()
for (let x = marge; x <width-marge; x+=grille+1) {
      for (let y = marge; y<height-marge; y+=grille+4) {
        translate(width/2, height/2);
        rotate(a)
        translate(-width/2,-height/2);
        let paramX=x*zoom;
         let paramY =y*zoom;

         let noise3d = noise(paramX,paramY,temps)
      
      
        noise3d = map(noise3d,0,1,-100,100)
       
        stroke(245, 95, 79)
        line(x,y,x+noise3d,y+grille)

        
       
        stroke(303, 71, 55)
        line(x,y,x+grille,y+noise3d)

       

        }
        
      }   
  pop()
      
 }

function grille3(){
  let level = amp.getLevel();
  temps += level*0.5;

  push();
  translate(width/2,height/2);
  rotate(90)

  let seuil = 0.5; 

  for (let x = -width/2+marge;x<width/2-marge;x+=grille) {
    for (let y = -height/2+marge;y<height/2-marge;y+=grille) {

      let paramX = x*zoom;
      let paramY = y*zoom;

      let noise3d = noise(paramX,paramY,temps);
      noise3d = map(noise3d,0,1,-50,50)

      let thresholdValue = noise(paramX*0.5,paramY*0.5,temps); 

      if (thresholdValue>seuil) { 
        stroke(186,88,86);
        line(x,y,x+noise3d,y+grille);

        stroke(250,100,60);
        line(x,y,x+grille,y+noise3d);
      }
    }
  }

  pop();
}
 
function grille4(){
      let level = amp.getLevel();
      temps+=level*0.3;
stroke(189, 67, 30,0.7)
//fill(100,50,50)
noFill()

//inverser x et y pour faire des ligne horizontale
 for (let x = 0; x <width; x+=grille) {
    beginShape()
    for (let y = 0; y <height; y+=grille) {
     
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
