// Module imports
import template from './dir/template';
import templateClear from './dir/tools/templateClear';
import scrollTool from './dir/tools/scrollTool';
import Home from './dir/modules/Home';
import Menu from './dir/modules/Menu';
import Info from './dir/modules/Info';


// Loads basic website template
template();
scrollTool();

// Default to home page
window.onload = () => {
    Home();
}

// Page switching functionality 
document.addEventListener('click', (e) => {
    debugger;
    const pageName = e.target.dataset.pageName;
    if(pageName) {

        templateClear();
        template();
        scrollTool();

        switch(pageName) {
            case 'home':
                Home();
                break;
            case 'menu':
                Menu();
                break;
            case 'info':
                Info();
                break;
            default:
                break;
        }
    }
})

