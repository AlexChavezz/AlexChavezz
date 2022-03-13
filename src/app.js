
(() => {
    const select = document.querySelector('select');

    document.addEventListener("DOMContentLoaded", getLenguague());
    // -> Get lenguague from localStorage to render text on window
    function getLenguague() {
        const currentLenguague = window.localStorage.getItem('lenguague');
        if (currentLenguague === "spanish") {
            changeAllToSpanish();
            select.options.item(0).selected = 'selected';
        } else if (currentLenguague === "english") {
            changeAllToEnglish();
            select.options.item(1).selected = 'selected';
        } else {
            window.localStorage.setItem('lenguague', 'english');
        }
    }
    // -> Event select onChange   
    select.onchange = function ({ target }) {
        switch (target.value) {
            case "spanish":
                changeAllToSpanish();
                window.localStorage.setItem('lenguague', 'spanish');
                break;
            case "english":
                changeAllToEnglish();
                window.localStorage.setItem('lenguague', 'english');
                break;
            default:
                changeAllToEnglish();
                window.localStorage.setItem('lenguague', 'english');
                break;
        }
    }

    // -> Load Text in spanish and it add in all places where be text in my page
    function changeAllToSpanish() {
        document.querySelector('.about-me-text').textContent = "SOBRE MI";
        document.querySelector('.about-me').textContent = "Hola, mi nombre es Alexis desarrollodor front-end. Actualmente estudio la niversidad, y sobre todo amo el mundo del desarrollo";
        document.querySelector('.resume-button-download').innerHTML = "Curriculum ( CV ) <br /> Descargar";
        document.querySelector('.giff-proyect-description').textContent = "GiffApp es una aplicación web en la que podrás buscar giffs y guardarlos. Usa firestore para guardar las colecciones de usuarios y un backend propio contruido en nodejs para administrar la authentificación de usuarios"
        document.querySelector('.journal-proyect-description').textContent = "Journal es una aplicación web para administrar guardar tanto tareas diarias como notas para que no dejes ir nada. Usa sevicios de firebase como lo son firestore, firebase authentification y firebase hosting.";
        document.querySelector(".restaurant-proyect-description").textContent = "Restaurant App es una aplicacion web que simula el manejo de un restaurante tanto del lado del cliente como del administrador y empleados. Usa un back-end construido en node js para realizar las interaccoines con una base de datos en mysql.";
        document.querySelector('.section-proyects-title').textContent = "PROYECTOS";
        document.querySelector(".section-skills-title").textContent = "HABILIDADES";
        document.querySelector(".contact-me").textContent = "CONTACTAME !";
        document.querySelector(".footer-text").innerHTML = "Desarrollado y Diseñado por Alexis Chávez.<br /> &copy; 2022 Todos los derechos reservados."
        const buttonsSite = document.querySelectorAll('.site');
        buttonsSite.forEach(button => {
            button.textContent = "Ver Sitio";
        })
        const buttonsRepository = document.querySelectorAll('.repository');
        buttonsRepository.forEach(button => {
            button.textContent = "Repositorio";
        })
    }
    // -> This funciton make the same process that before function but in english
    function changeAllToEnglish() {
        document.querySelector('.about-me-text').textContent = "ABOUT ME";
        document.querySelector('.about-me').textContent = "Hi, I'm alexis a front-end developer. I am Currently studying university and i love the development world";
        document.querySelector('.resume-button-download').innerHTML = "Resume ( CV ) <br /> Download";
        document.querySelector('.giff-proyect-description').textContent = "GiffApp is a single web application, here you can see and save gifs. Use firestore as database to save giffs users collections also has a backend build whit nodejs to manage users authentifications."
        document.querySelector('.journal-proyect-description').textContent = "Journal it´s a web application to manage your day´s save notes or check list, you´ll dont forget nothing. It use firebase services like firestore, firebase authentification and firense hosting";
        document.querySelector(".restaurant-proyect-description").textContent = "Restaurant App is a web application that simulate the management of a true restaurant.";
        document.querySelector('.section-proyects-title').textContent = "PROYECTS";
        document.querySelector(".section-skills-title").textContent = "SKILLS-SET";
        document.querySelector(".contact-me").textContent = "CONTACT ME  !";
        document.querySelector(".footer-text").innerHTML = "Developed and designed by Alexis Chávez.<br /> &copy; 2022 All rights reserved."
        const buttonsSite = document.querySelectorAll('.site');
        buttonsSite.forEach(button => {
            button.textContent = "Site";
        })
        const buttonsRepository = document.querySelectorAll('.repository');
        buttonsRepository.forEach(button => {
            button.textContent = "Repository";
        })
    }

    // -> Observer implementation 

    // const giffApp = document.querySelector('#giff-app');

    // let counter = 0;
    // const observer = new IntersectionObserver(loadProyects, {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 0,
    // });
    // observer.observe(giffApp);
    // function loadProyects() {
    //     if (counter > 2) {
    //         return;
    //     }
    //     // giffApp.animate([
    //     //     { opacity: 1 },
    //     //     { transform: 'translate(-50%)' },
    //     //     { opacity: 0 },
    //     //     { transform: 'translate(0%)' },
    //     // ], {
    //     //     duration: 400,
    //     // });
    //     // window.setTimeout(() => {
    //     //     giffApp.style.visibility = "visible";
    //     // }, 200);
    //     counter++;
    // }

})()
