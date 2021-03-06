import homePage from './home.js';


const clickEvents = (() => {

    const navBtn = document.querySelector('#content');
    navBtn.addEventListener('click',render);
    
    function render(e) {

        if (e.target.id == 'menu') {
            homePage.removeHtml('home-header-page');
            homePage.removeHtml('contact-header-page');
            homePage.revealHtml('menu-header-page');
        }

        if (e.target.id == 'home') {
            homePage.removeHtml('menu-header-page');
            homePage.removeHtml('contact-header-page');
            homePage.revealHtml('home-header-page');
        }

        if (e.target.id == 'contact') {
            homePage.removeHtml('menu-header-page');
            homePage.removeHtml('home-header-page');
            homePage.revealHtml('contact-header-page');
        }
    }

    // const render = (e) => {      how come this not same as above
    //     console.log(e.target);
    // }

    return {
        render,
    };


})();

export default clickEvents;
