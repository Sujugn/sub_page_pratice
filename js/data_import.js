import products from './data.js';

const productArea = document.querySelector('.product_area')

products.forEach((product) => {
  let element = document.createElement('div');
  element.setAttribute('class', 'goods');

  element.innerHTML = `
    <div class="product">
      <div class="product_img">
      <img src="${product.image}">
      </div>
      <div class="product_name">
          <p>${product.name}</p>
      </div>
      <div class="product_color">
          <p>${product.color}</p>
      </div>
      <div class="product_price">
          <p>${product.price}</p>
      </div>
    </div>
  `;

  productArea.appendChild(element);
});