// module pattern creates the load (js version of classes)
const homePage = (() => {
    // creates element, class name, innerHTML, and appends
    const elementCreator = (name,type,text,parent) => {
        const temp = document.createElement(type);
        temp.id = name;
        temp.innerHTML = text
        document.querySelector(parent).appendChild(temp);
    }

    // error from .id should be #id this caused the webpack dev server to delete bundle.js
    // and create runtime.js and main.js not sure why something with chunks i think
    // had to go on laptop with an earlier version of code and push cause im lazy lol

    const renderHome = () => {
        elementCreator('home-main-page','div','','#content');
        elementCreator('menu-main-page','div','','#content');
        elementCreator('contact-main-page','div','','#content');

        elementCreator('','header','','#home-main-page');
        elementCreator('home','button','Home','header');
        elementCreator('menu','button','Menu','header');
        elementCreator('contact','button','Contact','header');
        document.querySelector('#home').className = 'tab';
        document.querySelector('#menu').className = 'tab';
        document.querySelector('#contact').className = 'tab';
        elementCreator('','main','','#home-main-page');
        elementCreator('main-img','img','','main');
        elementCreator('title-container','div','','main');
        elementCreator('','h1','Mediocore Eats','#title-container');
        elementCreator('text1-container','div','','main');
        elementCreator('','p','Mediocore Eats founded by Eric Le based in Albuquerque, New Mexico. Over time the restuarant expanded outwards and found its success in chicken. '
        ,'#text1-container');
        elementCreator('','h3','-Eric','#text1-container');
        elementCreator('text2-container','div','','main');
        elementCreator('','h3','Hours','#text2-container');
        elementCreator('','ul','Sunday: 5pm - 9pm','#text2-container');
        elementCreator('','ul','Monday: CLOSED','#text2-container');
        elementCreator('','ul','Tuesday: CLOSED','#text2-container');
        elementCreator('','ul','Wednesday: CLOSED','#text2-container');
        elementCreator('','ul','Thursday: CLOSED','#text2-container');
        elementCreator('','ul','Friday: 5pm - 9pm','#text2-container');
        elementCreator('','ul','Saturday: 5pm - 9pm','#text2-container');
        elementCreator('text3-container','div','','main');
        elementCreator('','h3','Location','#text3-container');
        elementCreator('','div','308 Negra Arroyo Lane, Albuquerque, New Mexico','#text3-container');
        elementCreator('','footer','','#home-main-page');
        elementCreator('','div','Website created by Eric Le','footer');
    }

    const removeHtml = (tabId) => {
        document.getElementById(tabId).style.display = 'none';
    }

    const revealHtml = (tabId) => {
        document.getElementById(tabId).style.display = 'block';
    }

    return {
        elementCreator,
        renderHome,
        removeHtml,
        revealHtml,
    };

})();

export default homePage;