//  Keep track of the current page
const inPage = (() => {

    return {
        statePage: {
            'index': false,
            'menu': false,
            'about': false,
            'contact': false,
        }
    }
})();

// Export inPage IIFE 
export {
    inPage
}