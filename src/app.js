
(() => {
    const select = document.querySelector('select');

    document.addEventListener("DOMContentLoaded", getLenguague());

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


    // const select = document.querySelector('select');

    select.onchange = function ({ target }) {
        console.log('change')
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

    function changeAllToSpanish() {
        document.querySelector('.about-me').textContent = "Hola, mi nombre es Alexis desarrollodor front-end. Actualmente estudio la niversidad, y sobre todo amo el mundo del desarrollo";
    }
    function changeAllToEnglish() {
        document.querySelector('.about-me').textContent = "Hi, I'm alexis a front-end developer. I am Currently studying university and i love the development world";
    }

})()
