// Used to reset the header
// remove home-header class, display-info & display-header = visible

export default function resetHeader(displayMode) {
   const header = document.querySelector('#header');
   header.classList.remove('home-header'); 

   const displayInfo = document.querySelector('#display-info');
   displayInfo.style.display = displayMode;

   const displayHeader = document.querySelector('#display-header');
   displayHeader.style.display = 'block';

   const homeContents = document.querySelector('#home-contents');
   homeContents.style.display = 'none';
}