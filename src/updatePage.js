export default function updatePage() {

    const content = document.getElementById('content');
    for (const eachChild of Array.from(content.children)) {
        // remove children not header
        if (eachChild.id.includes('header') == false) {
            eachChild.remove();
        }
    }
}