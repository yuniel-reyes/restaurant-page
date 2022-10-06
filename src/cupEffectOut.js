
export default function cupEffectOut(e) {
    
    // get row class on hover
    const thisImage = e.currentTarget.className.split(' ')[0];

    const toggleThis = document.querySelector(`.each-img-container${thisImage}`);
    toggleThis.classList.toggle('show');
}