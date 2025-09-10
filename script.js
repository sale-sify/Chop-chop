// Scroll a la section choisie au click du bouton 
// Pour l'accueil
const accueilBtn = document.querySelector('#btn-acceuil');
const accueil = document.querySelector('.acceuil');

accueilBtn.addEventListener('click', 
    function () {
        accueil.scrollIntoView({ behavior: "smooth", block: 'start'});
    }
);

// Pour la carte
const carteBtn = document.querySelector('#btn-carte');
const carte = document.querySelector('.carte');

carteBtn.addEventListener('click', 
    function () {
        carte.scrollIntoView({ behavior: "smooth", block: 'start'});
    }
);



// Animation des boutons dans le header 

const headerBtn = document.querySelectorAll('.btn-header');

for (let i = 0; i < headerBtn.length; i++) {
    headerBtn[i].addEventListener('mouseenter', 
        function () {
            this.style.fontSize = '23px';   
        }
    );

    headerBtn[i].addEventListener('mouseleave', 
        function () {
            this.style.fontSize = '20px';
        }
    );
};



// Mise en animation du caroussel 

const images = document.querySelectorAll('.img-container > img');
const container = document.querySelector('.img-container');


function autoScroll () { 
    setInterval( function () {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth-1) {  //Si on arrive au bout on repart au debut
            clearInterval(autoScroll);
            container.scrollTo({ left: 0, behavior: 'auto' })
            setTimeout(() => {                                                          //Pause avant la reprise du defilement 
                console.log('wait 2 sec');
            }, "2000");
        } else {
            container.scrollLeft += 2                                                  //Defilement automatique
        }
    }, 40);     
};

// Appel de la fonction pour demarrer le scroll 
autoScroll();













