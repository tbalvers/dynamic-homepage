import myLogo from './77velvet_light.svg';

function createHome() {
  const content = document.querySelector('#content');
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  content.appendChild(sidebar);
  const logo = new Image();
  logo.src = myLogo;
  sidebar.appendChild(logo);

  const aboutUs = document.createElement('a');
  aboutUs.textContent = 'About Us';
  aboutUs.setAttribute('title', 'About Us');
  aboutUs.setAttribute('id', 'aboutUs');
  aboutUs.classList.add('active');
  sidebar.appendChild(aboutUs);

  const products = document.createElement('a');
  products.textContent = 'Products';
  products.setAttribute('title', 'About Us');
  products.setAttribute('id', 'products');
  sidebar.appendChild(products);

  const pricing = document.createElement('a');
  pricing.textContent = 'Pricing';
  pricing.setAttribute('title', 'About Us');
  pricing.setAttribute('id', 'pricing');
  sidebar.appendChild(pricing);

  const main = document.createElement('div');
  main.classList.add('main');
  content.appendChild(main);
}

export { createHome };
