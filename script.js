/* Footer's JS */

let link = document.getElementsByClassName("lien-page");

let currentValue = 1;

function activeLink(){
    for(l of link){
        l.classList.remove("actif");
    }
    event.target.classList.add("actif");
    currentValue = event.target.value
}

function nextBtn(){
    if(currentValue < 10){
        for(l of link){
        l.classList.remove("actif");
        }
        currentValue++;
        link[currentValue-1].classList.add("actif");
    }
}

/* END Footer's JS */

/*Double slider range*/

const rangeMin = document.querySelector('.range-min');
const rangeMax = document.querySelector('.range-max');
const prixValeurs = document.querySelector('.prix-valeurs');

if (rangeMin && rangeMax) {
    rangeMin.addEventListener('input', function() {
        updatePrix();
    });

    rangeMax.addEventListener('input', function() {
        updatePrix();
    });

    function updatePrix() {
        const min = parseInt(rangeMin.value);
        const max = parseInt(rangeMax.value);
        
        if (min > max - 100) {
            rangeMin.value = max - 100;
        }
        
        if (max < min + 100) {
            rangeMax.value = min + 100;
        }
        
        prixValeurs.innerHTML = `
            <span>$${rangeMin.value}</span>
            <span>$${rangeMax.value}+</span>
        `;
    }
}

/*END double slider range*/

/* Mobile Functionality */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Filtre mobile bascule
    const btnFiltreMobile = document.getElementById('btnFiltreMobile');
    const conteneurFiltresMobile = document.getElementById('conteneurFiltresMobile');
    
    const filtresBureau = document.querySelector('.section-filtres');
    
    if (btnFiltreMobile && conteneurFiltresMobile && filtresBureau) {
        
        const filtresClones = filtresBureau.cloneNode(true);
        filtresClones.style.display = 'block'; 

        filtresClones.classList.remove('bureau-uniquement');
        
        // filtresClones.querySelector('.titre-filtre').remove(); 
        
        conteneurFiltresMobile.appendChild(filtresClones);

        btnFiltreMobile.addEventListener('click', () => {
            conteneurFiltresMobile.classList.toggle('cache');
            
            const icon = btnFiltreMobile.querySelector('i');
            if (icon) {
                if (conteneurFiltresMobile.classList.contains('cache')) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                } else {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            }
        });
    }


    /*Double slider range*/

const rangeMin = document.querySelector('.range-min');
const rangeMax = document.querySelector('.range-max');
const prixValeurs = document.querySelector('.prix-valeurs');

if (rangeMin && rangeMax) {
    rangeMin.addEventListener('input', function() {
        updatePrix();
    });

    rangeMax.addEventListener('input', function() {
        updatePrix();
    });

    function updatePrix() {
        const min = parseInt(rangeMin.value);
        const max = parseInt(rangeMax.value);
        
        if (min > max - 100) {
            rangeMin.value = max - 100;
        }
        
        if (max < min + 100) {
            rangeMax.value = min + 100;
        }
        
        prixValeurs.innerHTML = `
            <span>$${rangeMin.value}</span>
            <span>$${rangeMax.value}+</span>
        `;
    }
}

/*END double slider range*/

    // 2. Mobile Menu (Burger)
    const btnMenuMobile = document.getElementById('btnMenuMobile');
    const btnMenuGauche = document.getElementById('btnMenuGauche'); // Add left menu button
    
    const toggleMenu = () => {
        let menuMobileOverlay = document.getElementById('menuMobileOverlay');
        
        if (!menuMobileOverlay) {
            menuMobileOverlay = document.createElement('div');
            menuMobileOverlay.id = 'menuMobileOverlay';
            menuMobileOverlay.className = 'superposition-menu-mobile';
            
            // Styles for mobile menu
            menuMobileOverlay.style.cssText = `
                position: absolute;
                top: 60px; /* Header height */
                left: 0;
                width: 100%;
                background: white;
                border-bottom: 1px solid #ddd;
                padding: 20px;
                z-index: 100;
                display: flex;
                flex-direction: column;
                gap: 15px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            `;
            
            // Add links
            menuMobileOverlay.innerHTML = `
                <a href="#" style="text-decoration:none; color:black; font-weight:bold; font-size:16px; padding: 10px 0;">HOME</a>
                <a href="#" style="text-decoration:none; color:black; font-weight:bold; font-size:16px; padding: 10px 0;">SHOP</a>
                <a href="#" style="text-decoration:none; color:black; font-weight:bold; font-size:16px; padding: 10px 0;">MAGAZINE</a>
                <hr style="border:0; border-top:1px solid #eee; margin:5px 0;">
                <a href="#" style="text-decoration:none; color:black; font-weight:bold; font-size:16px; padding: 10px 0;">LOGIN</a>
            `;
            
            const header = document.querySelector('header');
            if (header) {
                header.parentNode.insertBefore(menuMobileOverlay, header.nextSibling);
            } else {
                document.body.appendChild(menuMobileOverlay);
            }
        } else {
            
            if (menuMobileOverlay.style.display === 'none') {
                menuMobileOverlay.style.display = 'flex';
            } else {
                menuMobileOverlay.style.display = 'none';
            }
        }
    };

    if (btnMenuMobile) {
        btnMenuMobile.addEventListener('click', toggleMenu);
    }
    
    if (btnMenuGauche) {
        btnMenuGauche.addEventListener('click', toggleMenu);
    }
});