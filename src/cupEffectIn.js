// import AMERICANO from './img/americano.svg';
// import CAPPUCCINO from './img/cappuccino.svg';
// import MACCHIATO from './img/macchiato.svg';
// import EXPRESSO from './img/expresso.svg';
// import FLATWHITE from './img/flatWhite.svg';
// import MOCHA from './img/mocha.svg';
// import LATTE from './img/latte.svg';

// const images = {
//     'AMERICANO': AMERICANO,
//     'CAPPUCCINO': CAPPUCCINO,
//     'MACCHIATO': MACCHIATO,
//     'EXPRESSO': EXPRESSO,
//     'FLATWHITE': FLATWHITE,
//     'MOCHA': MOCHA, 
//     'LATTE': LATTE, 
// }

export default function cupEffectIn(e) {

    // get row class on hover
    const thisImage = e.currentTarget.className.split(' ')[0];

    // get image with the class 'thisImage' and toggle the
    // show class
    const toggleThis = document.querySelector(`.each-img-container${thisImage}`);
    toggleThis.classList.toggle('show');

    setTimeout(() =>{
        const toggleSteam = document.querySelectorAll('.steam-list-item');
        toggleSteam.forEach(item => {
            item.classList.toggle('show-steam');
        });
    }, 500)

}