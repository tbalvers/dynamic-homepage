import { createAbout } from './about';
import { createProducts } from './products';
import { clearContent } from './clear';
import { createPricing } from './pricing';

function sidebarLinkListener() {
  const links = document.querySelectorAll('a');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.target.id === 'aboutUs') {
        clearContent();
        createAbout();
      } else if (event.target.id === 'products') {
        clearContent();
        createProducts();
      } else if (event.target.id === 'pricing') {
        clearContent();
        createPricing();
      }
    });
  });
}
function fadeInListener() {
  const main = document.querySelector('.main');
  main.addEventListener('animationend', () => {
    main.classList.remove('fade');
  });
}
export { sidebarLinkListener, fadeInListener };
