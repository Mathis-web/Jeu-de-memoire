let cartes = document.querySelectorAll('.cartes');
let cartesRetournees = false;
let premiereCarte, deuxiemeCarte;
let carteTrouvees = 0;

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
            interdictionClique = true;
            setTimeout(() => {
               premiereCarte.classList.add('colorHidden');
               deuxiemeCarte.classList.add('colorHidden');
           }, 750);
       }
       else {
        premiereCarte.removeEventListener('click', retournerCartes);
        deuxiemeCarte.removeEventListener('click', retournerCartes);

        premiereCarte.classList.add('active');
        deuxiemeCarte.classList.add('active');
        carteTrouvees++;
        console.log(carteTrouvees);

        if (carteTrouvees == 8) { 
            alert('Vous avez gagné');
            console.log(carteTrouvees);
            }
        }
    }
}