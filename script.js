let cartes = document.querySelectorAll('.cartes');
let cartesRetournees = false;
let premiereCarte, deuxiemeCarte;

// révèle la couleur du caré
for (const carte of cartes) {
    carte.addEventListener('click', retournerCartes)
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
    
       if (premiereCarte.getAttribute('data-color') !== deuxiemeCarte.getAttribute('data-color')) {
           setTimeout(() => {
               premiereCarte.classList.add('colorHidden');
               deuxiemeCarte.classList.add('colorHidden');
           }, 1000);
       }
    }
}