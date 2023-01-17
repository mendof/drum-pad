// Récupération des éléments
const pads = document.querySelectorAll('.key');
const sound = document.querySelectorAll('audio');

// Ajout d'un événement 'transitionend' aux pads
pads.forEach(pad => {
  pad.addEventListener('transitionend', removeTransition);
});

// Ajout d'un événement 'click' aux pads
pads.forEach(pad => {
  pad.addEventListener('click', playSound);
});

// Ajout d'un événement 'keydown' à la page
document.addEventListener('keydown', playSound);

// Fonction pour jouer le son
function playSound(e) {
  // Récupération de la clé de la note
  let keyCode;
  if (e.type === 'keydown') {
    keyCode = e.keyCode;
  } else {
    keyCode = this.getAttribute('data-key');
  }

  // Recherche de la note correspondante
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  // Récupération du pad correspondant
  const pad = document.querySelector(`div[data-key="${keyCode}"]`);

  // Vérification que la note existe
  if (!audio) return;

  // Ajout de la classe 'playing' au pad
  pad.classList.add('playing');

  // Réinitialisation de l'audio
  audio.currentTime = 0;

  // Lecture de l'audio
  audio.play();
}

// Fonction pour retirer la classe 'playing'
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
const keys = [90, 69, 81, 83, 68, 87, 88, 67];
const sounds = ['hihat', 'Kick', 'openhat', 'boom', 'ride', 'snare', 'tom', 'tink'];
const pad = document.querySelector('.pad');

for (let i = 0; i < keys.length; i++) {
  // Création de la div pour la case
  const key = document.createElement('div');
  key.classList.add('key');
  key.setAttribute('data-key', keys[i]);
  
  // Création de l'élément kbd pour l'affichage de la touche
  const kbd = document.createElement('kbd');
  kbd.innerHTML = String.fromCharCode(keys[i]);
  
  // Création de l'élément span pour l'affichage du nom du son
  const sound = document.createElement('span');
  sound.classList.add('sound');
  sound.innerHTML = sounds[i];
  
  // Ajout des éléments à la div pour la case
  key.appendChild(kbd);
  key.appendChild(sound);
  
  // Ajout de la case à la div .pad
  pad.appendChild(key);
  
  // Ajout des événements click et transitionend
  key.addEventListener('click', playSound);
  key.addEventListener('transitionend', removeTransition);
}