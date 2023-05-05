import pic1 from './black.jpg';
import pic2 from './purple.jpg';
import pic3 from './moss.jpg';
import pic4 from './navy.jpg';

function createProducts() {
  const main = document.querySelector('.main');
  const headline = document.createElement('h1');
  headline.textContent = 'Our Velvets';
  main.appendChild(headline);
  const container = document.createElement('div');
  container.classList.add('container');
  container.classList.add('products');
  main.appendChild(container);
  let card = document.createElement('div');
  card.classList.add('card');
  container.appendChild(card);
  let velvet = new Image();
  velvet.src = pic1;
  card.appendChild(velvet);
  let description = document.createElement('p');
  description.textContent = 'Midnight Black';
  card.appendChild(description);

  card = document.createElement('div');
  card.classList.add('card');
  container.appendChild(card);
  velvet = new Image();
  velvet.src = pic2;
  card.appendChild(velvet);
  description = document.createElement('p');
  description.textContent = 'Imperial Purple';
  card.appendChild(description);

  card = document.createElement('div');
  card.classList.add('card');
  container.appendChild(card);
  velvet = new Image();
  velvet.src = pic3;
  card.appendChild(velvet);
  description = document.createElement('p');
  description.textContent = 'Lime Green';
  card.appendChild(description);

  card = document.createElement('div');
  card.classList.add('card');
  container.appendChild(card);
  velvet = new Image();
  velvet.src = pic4;
  card.appendChild(velvet);
  description = document.createElement('p');
  description.textContent = 'Navy Blue';
  card.appendChild(description);

  const products = document.getElementById('products');
  products.classList.add('active');
  const aboutUs = document.getElementById('aboutUs');
  aboutUs.classList.remove('active');
  const pricing = document.getElementById('pricing');
  pricing.classList.remove('active');

  main.classList.remove('fade');
  main.classList.add('fade');
}

export { createProducts };
