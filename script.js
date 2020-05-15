let cartes = document.querySelectorAll('.cartes');
let cartesRetournees = false;
let premiereCarte, deuxiemeCarte;
let carteTrouvees = 0;

let btnMelanger = document.querySelector('#melanger');
btnMelanger.addEventListener('click', melanger);


// révèle la couleur de la carte
for (const carte of cartes) {
    carte.addEventListener('click', retournerCartes);
}


function retournerCartes(e) {
    
    this.classList.remove('colorHidden'); 
    
    if (!cartesRetournees) { // Si c'est la première carte qu'on retourne
        cartesRetournees = true;
        premiereCarte = e.currentTarget;
        console.log(premiereCarte.className);
    }
    else {  // Si c'est la deuxième carte qu'on retourne
        cartesRetournees = false;
        deuxiemeCarte = e.currentTarget;
        console.log(deuxiemeCarte.getAttribute('data-color'));
    
       if (premiereCarte.getAttribute('data-color') !== deuxiemeCarte.getAttribute('data-color')) { // alors on vérifie si c'est la même couleur
    
             setTimeout(() => {
               premiereCarte.classList.add('colorHidden');
               deuxiemeCarte.classList.add('colorHidden');
            }, 425);
       }
       else {
        premiereCarte.removeEventListener('click', retournerCartes);
        deuxiemeCarte.removeEventListener('click', retournerCartes);

        premiereCarte.classList.add('active');
        deuxiemeCarte.classList.add('active');
        carteTrouvees++;
        console.log(carteTrouvees);

        if (carteTrouvees == 8) {
            setTimeout(() => {
                alert('Vous avez gagné')
            }, 100)
        }
        
       }
    }
}


let arrayCouleur = ['red','red', 'yellow', 'yellow', 'orange', 'orange', 'pink', 'pink', 'purple', 'purple', 'blue', 'blue', 'cyan', 'cyan', 'black', 'black'];
let nombreAleatoire = 0;
let arrayNombreAleatoire = [];


function melanger() {

   retourAuDepart();

    for (i=0; i<cartes.length; i++) {  // Je remplis mon arrayNombreAleatoire
        do {
            nombreAleatoire = genererNombreAleatoire(cartes.length);
        } while (arrayNombreAleatoire.includes(nombreAleatoire))
        arrayNombreAleatoire.push(nombreAleatoire);
    }
    console.log(arrayNombreAleatoire);
    

     for (i=0; i<cartes.length; i++) {  // J'associe chaque nombre aleatoire de mon tableau à une couleur
        cartes[i].classList.add(arrayCouleur[arrayNombreAleatoire[i]]);
        cartes[i].setAttribute('data-color', arrayCouleur[arrayNombreAleatoire[i]]);
    }

}


function genererNombreAleatoire(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

melanger();

function retourAuDepart() {

    for (i=0; i<cartes.length; i++) {
        // cartes[i].classList[1].remove;
        
        cartes[i].classList.remove('red');
        cartes[i].classList.remove('yellow');
        cartes[i].classList.remove('cyan');
        cartes[i].classList.remove('orange');
        cartes[i].classList.remove('pink');
        cartes[i].classList.remove('purple');
        cartes[i].classList.remove('blue');
        cartes[i].classList.remove('black');

        cartes[i].classList.remove('active');

        cartes[i].classList.add('colorHidden');

        console.log(cartes[i].classList);
    }

}