import firstWhiteOverlay from './firstWhiteOverlay'; 
import secondWhiteOverlay from './secondWhiteOverlay';
// import { inPage} from './index.js';

const changePage = (currentPage) => {

    firstWhiteOverlay();
    // setTimeout(secondWhiteOverlay, 2000, currentPage);
};


export {
    changePage,
}