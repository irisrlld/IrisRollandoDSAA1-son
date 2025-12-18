let grille = 7;
let sound;
let amp;

function preload(){
  sound = loadSound('sound/Jaunter-Reset.mp3')
}


let marge = 3;
function setup() {
    colorMode(HSL)
    //colorMode(RGB)
 createCanvas(windowWidth, windowHeight);

 
frameRate(10)

 amp = new p5.Amplitude();

}

let zoom =0.003;
let temps =0;

function draw() {

   let level = amp.getLevel();
   console.log(level)
   temps = temps+level;
   background(10)
   noStroke()
  for (let x = marge; x <width-marge; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {
        // fill(random(frameCount*1.5))

         
         let seed = y*x
         //let s = noise(seed+frameCount*0.1)*grille*2
        
         /// teinte finale entre 150 et 250
         let paramX=x*zoom;
         let paramY =y*zoom;

         //let temps= level;
   
         let noise2d = noise(paramX,paramY,temps)*grille*2
         let bruitX = noise(paramX,paramY,temps)*100
         let treshold = noise(paramX,paramY,temps)
         fill(120,50,99)
         textSize(30)
         stroke(255,50,50)
         //line(x,y,x+bruitX,y+grille)

         if(treshold>0.5){
        text('etcestok',x,y)
         }else if(treshold>1){
            text('non',x,y)
         }else if(treshold>0,4){
            fill(100,78,34)
         }
   
 }
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
