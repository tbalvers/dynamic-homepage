function createPricing() {
  const main = document.querySelector('.main');
  const headline = document.createElement('h1');
  headline.textContent = 'Pricing Information';
  main.appendChild(headline);

  const container = document.createElement('div');
  container.classList.add('container');
  main.appendChild(container);

  const products = document.getElementById('products');
  products.classList.remove('active');
  const aboutUs = document.getElementById('aboutUs');
  aboutUs.classList.remove('active');
  const pricing = document.getElementById('pricing');
  pricing.classList.add('active');

  const body1 = document.createElement('p');
  body1.textContent =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est amet minima quis veritatis quas excepturi iste eum quae esse ea, sed autem voluptates consequuntur at sapiente et maiores expedita. Nemo!';
  container.appendChild(body1);
  const body2 = document.createElement('p');
  body2.textContent =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
  container.appendChild(body2);
  const body3 = document.createElement('p');
  body3.textContent =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est amet minima quis veritatis quas excepturi iste eum quae esse ea, sed autem voluptates.';
  container.appendChild(body3);

  main.classList.remove('fade');
  main.classList.add('fade');
}

export { createPricing };
