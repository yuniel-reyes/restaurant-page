import { header } from './header';
import './style.css';
import home from './home.js'
import contact from './contact';
import firstWhiteOverlay from './firstWhiteOverlay'; 
import secondWhiteOverlay from './secondWhiteOverlay';


const changePage = (e) => {
    if (e.target.textContent === 'CONTACT') {
        firstWhiteOverlay();
        setTimeout(secondWhiteOverlay, 3000);

        contact();
    }    
};


export {
    changePage,
}

document.body.appendChild(header());
document.body.appendChild(home());
