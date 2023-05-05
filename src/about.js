function createAbout() {
  const main = document.querySelector('.main');
  const headline = document.createElement('h1');
  headline.textContent = 'European elegance in 77 vibrant colors';
  main.appendChild(headline);

  const container = document.createElement('div');
  container.classList.add('container');
  main.appendChild(container);

  const body1 = document.createElement('p');
  body1.textContent =
    "At 77velvet, we specialize in velvet fabrics, which allows us to offer a wide range of colors and finishes to choose from. Our collection includes classic hues like deep burgundy and midnight blue, as well as trendy shades like blush pink and emerald green. With so many options to choose from, you're sure to find the perfect velvet for your project.";
  container.appendChild(body1);
  const body2 = document.createElement('p');
  body2.textContent =
    'Our fabrics are made using only the finest materials sourced from the most reputable mills in Europe. We take pride in ensuring that our fabrics are of the highest quality, with a soft and sumptuous texture that feels as luxurious as it looks.';
  container.appendChild(body2);
  const body3 = document.createElement('p');
  body3.textContent =
    "Our commitment to quality doesn't stop at our fabrics. We also believe in providing exceptional customer service, with a team of experts available to help you with any questions you may have. Whether you're looking for advice on choosing the perfect color or need tips on caring for your velvet, we're here to help.";
  container.appendChild(body3);
  const body4 = document.createElement('p');
  body4.textContent =
    'In a world where fast fashion dominates, we stand out as a company that values quality, craftsmanship, and timeless elegance. We invite you to explore our collection of velvet fabrics and discover the beauty and luxury of 77velvet.';
  container.appendChild(body4);

  const products = document.getElementById('products');
  products.classList.remove('active');
  const aboutUs = document.getElementById('aboutUs');
  aboutUs.classList.add('active');
  const pricing = document.getElementById('pricing');
  pricing.classList.remove('active');

  main.classList.remove('fade');
  main.classList.add('fade');
}

export { createAbout };
