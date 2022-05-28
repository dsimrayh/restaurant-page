// FOR HEADER SCROLL FUNCTIONALITY

export default function scrollTool() {
    
    const hc = document.querySelector('#header-contents');
    const hc2 = document.querySelector('#header-contents-2');
    const nav2 = document.querySelector('#nav-2');

    window.onscroll = () => {
        let scrollLimit = 0;
        if (window.pageYOffset > scrollLimit) {
            hc.style.opacity = 0;

            hc2.classList.add('display-mode-flex');
            nav2.classList.add('display-mode-flex');
        }
        else {
            hc.style.opacity = 1;

            hc2.classList.remove('display-mode-flex');
            nav2.classList.remove('display-mode-flex');
        }
    }

}