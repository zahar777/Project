window.addEventListener('DOMContentLoaded', () => {

    const  tabs = require('./modules/tabs'),
           calc = require('./modules/calc'),
            forms = require('./modules/forms'),
            cards = require('./modules/cards'),
            timer = require('./modules/timer'),
            slider = require('./modules/slider'),
            modal = require('./modules/modal');

            tabs(); 
            calc();
            forms();
            cards();
            timer();
            slider();
            modal();


        });
        
        // npx json-server --watch db.json