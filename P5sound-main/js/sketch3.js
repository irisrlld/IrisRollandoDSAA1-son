let grille = 10;
let marge = 30;
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

let zoom =0.009;
let temps =0;

function draw() {

background(15)

 let bass, lowMid, mid, highMid, treble;
  fft.analyze();
 //ici on obtient que des valeurs entre 0 et 255
  bass = fft.getEnergy("bass");
  lowMid = fft.getEnergy("lowMid");
  mid = fft.getEnergy("mid");
  highMid = fft.getEnergy("highMid");
  treble = fft.getEnergy("treble");

let bassConverti = map(bass,0,255,0,height)
 fill(9,200,110)
 circle(width/2,height/2,bassConverti)
 fill(39,38,89)
 stroke(15,38,89)
 circle(width/2,height/2,treble)

  print(bass)


   let condition = frameCount%20;
   //permet d'activer et desactiver en auto 

   if(condition>3){
      grille2()
      }

       circle(width/2,height/2,bass)

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

function grille1(color){
     let level = amp.getLevel();
  
    temps = temps+level*0.5;

for (let x = marge; x <width-marge; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {
 
         let paramX=x*zoom;
         let paramY =y*zoom;

         let noise3d = noise(paramX,paramY,temps)
         //map(valeur, min1, min2, max1, min2, max2)

      
        noise3d = map(noise3d,0,1,-100,100)
        stroke(300,250,50)
        line(x,y,x+noise3d,y+grille-5)

        
       
        stroke(400,150,50)
        line(x,y,x+grille-5,y+noise3d)
        
      }

         
      }
 }

 

function grille2(){
     let level = amp.getLevel();
  
    temps = temps+level*0.5;

for (let x = marge; x <width-marge; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {
 
         let paramX=x*zoom;
         let paramY =y*zoom;

         let noise3d = noise(paramX,paramY,temps)*grille*5
         let treshold = noise(paramX,paramY,temps)
         fill(255,50,50)
        
         stroke(255,50,50)

         if(treshold>0.5){
            ellipse(x,y,noise3d)
   
         }
      }
 }

 }

