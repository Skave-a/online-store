/* import AppController from '../controller/controller';
import { AppView } from '../view/appView'; */



class App {
   /*  controller: AppController;
    view: AppView ;*/
    constructor() {
        /* this.controller = new AppController();
        this.view = new AppView(); */
    }

    start() {
        const doc = document.querySelector('.sources');
        if (doc) {
            doc.addEventListener('click', () => `<p>Hello main page</p>`);
            
        }
        
    }
}

export default App;
