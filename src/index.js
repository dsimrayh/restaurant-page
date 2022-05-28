// Module imports
import template from './dir/template';
import templateClear from './dir/tools/templateClear';
import scrollTool from './dir/tools/scrollTool';
import Home from './dir/modules/Home';
import Menu from './dir/modules/Menu';


// Loads basic website template
template();
scrollTool();

// Default to home page
window.onload = () => {
    Home();
}

// Page switching functionality 
document.addEventListener('click', (e) => {
    const pageName = e.target.dataset.pageName;
    if(pageName) {

        templateClear();
        template();
        scrollTool();

        switch(pageName) {
            case 'home':
                Home();
            case 'menu':
                Menu();
            default:
                break;
        }
    }
})

