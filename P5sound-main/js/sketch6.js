let grille = 7;
let sound;
let amp;
let affichage1 = false;
let fft;

let zoom = 0.004;
let temps = 0;

function preload() {
  sound = loadSound('sound/Kosmorider-Night.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  angleMode(DEGREES);
  frameRate(10);

  amp = new p5.Amplitude();
  fft = new p5.FFT();
}

function draw() {
  background(255, 50, 50);

  // Affiche la grille une ou deux fois selon affichage1
  grille1();
  if (affichage1) grille1();
}

// Lecture du son au clic
function mousePressed() {
  if (!sound.isPlaying()) sound.play();
}

// Touche 'a' pour activer/désactiver la double grille
function keyPressed() {
  if (key === 'a') affichage1 = !affichage1;
}

// Ajuste le canvas si la fenêtre change
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Fonction qui dessine la grille
function grille1() {
  let level = amp.getLevel();
  temps += level * 0.5; // incrémente le temps selon l'amplitude

  for (let x = 0; x <= width; x += grille) {
    for (let y = 0; y <= height; y += grille) {
      // Calcul du bruit 3D
      let paramX = x * zoom;
      let paramY = y * zoom;
      let noise3d = noise(paramX, paramY, temps) * grille * 5;

      fill(noise3d); // couleur selon le bruit
      noStroke();

      push();
      translate(x, y);       // centre le carré sur sa position
      rotate(noise3d);       // rotation selon le bruit
      square(-grille / 2, -grille / 2, grille - 1); // carré centré
      pop();
    }
  }
}
