export default function contact() {

    const content = document.getElementById('content');
    const mainContent = document.createElement('main');

    // background-image
    const backImage = document.createElement('div');
    backImage.setAttribute('class', 'back-image');
    const h1 = document.createElement('h1');
    h1.textContent = 'reyesdevpro@gmail.com!';
    backImage.appendChild(h1);
    mainContent.appendChild(backImage);
    content.appendChild(mainContent);

    return content;

}