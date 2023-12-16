import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.render();
    this.addEventListeners();
  }
<<<<<<< HEAD
}

  render() 
=======

  render() {
>>>>>>> 973fc53c6cc95f6d71188c131b4fb6330b423b99
    this.elem = createElement(`<div class="card">
      <div class="card__top">
        <img
          src="/assets/images/products/${this.product.image}"
          class="card__image"
          alt="product"
        />
        <span class="card__price">€${this.product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${escapeHtml(this.product.name)}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon" />
        </button>
      </div>
    </div>`);
<<<<<<< HEAD
  

  addEventListeners() 
    this.elem.onclick = (event) => this.onClick(event);
  
  onClick(event) 
=======
  }

  addEventListeners() {
    this.elem.onclick = (event) => this.onClick(event);
  }

  onClick(event) {
>>>>>>> 973fc53c6cc95f6d71188c131b4fb6330b423b99
    this.elem.dispatchEvent(new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true
    }));
<<<<<<< HEAD
  
=======
  }
}
>>>>>>> 973fc53c6cc95f6d71188c131b4fb6330b423b99
