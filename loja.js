//carrinho

const shoppingCart = document.querySelector('.shopping-cart');
const shoppingCartContent = document.querySelector('.shopping-cart-content');
const shoppingCartList = document.querySelector('.shopping-cart-list');
const badge = document.querySelector('.badge');
const totalPrice = document.querySelector('.total-price');

shoppingCart.addEventListener('click', function() {
  shoppingCartContent.style.display = shoppingCartContent.style.display === 'block' ? 'none' : 'block';
});

//função que chama o carrinho
let count = 0;

function addToCart() {
  count++;
  document.querySelector('.badge').innerHTML = count;
}

//adicionar o evento de clique a todos os elementos com a class "button"
document.querySelectorAll('.button').forEach(function(button) {
  button.addEventListener('click', addToCart);
});

let cart = [];

function addToCart(item) {
  cart.push(item);
  updateCartCount();
  updateCartList();
}

function updateCartCount() {
  document.querySelector('.badge').innerHTML = cart.length;
}

function updateCartList() {
  let list = '';
  for (let item of cart) {
    list += '<li>' + item + '</li>';
  }
  document.querySelector('.shopping-cart-list').innerHTML = list;
}

/*document.querySelector('button').addEventListener('click', function() {
    addToCart('Air Force');
  });*/
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }
  
  let totalAmount = '0,00';
  
  function ready() {
    // Botão remover produto
    const removeCartProductButtons = document.getElementsByClassName('remove-product-button');
for (let i = 0; i < removeCartProductButtons.length; i++) {
  removeCartProductButtons[i].addEventListener('click', removeProduct);
}
  
    // Mudança valor dos inputs
    const quantityInputs = document.getElementsByClassName('product-qtd-input');
    for (let i = 0; i < quantityInputs.length; i++) {
      quantityInputs[i].addEventListener('change', checkIfInputIsNull);
    }
  
    // Botão add produto ao carrinho
    const addToCartButtons = document.getElementsByClassName('button-hover-background');
    for (let i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener('click', addProductToCart);
    }
  
    // Botão comprar
    const purchaseButton = document.getElementsByClassName('purchase-button')[0];
    purchaseButton.addEventListener('click', makePurchase);
  }
  
  function removeProduct(event) {
    event.target.parentElement.parentElement.remove();
    updateTotal();
  }
  
  function checkIfInputIsNull(event) {
    if (event.target.value === '0') {
      event.target.parentElement.parentElement.remove();
    }
  
    updateTotal();
  }
  
  function addProductToCart(event) {
    const button = event.target;
    const productInfos = button.parentElement.parentElement;
    const productImage = productInfos.getElementsByClassName('product-image')[0].src;
    const productName = productInfos.getElementsByClassName('product-title')[0].innerText;
    const productPrice = productInfos.getElementsByClassName('product-price')[0].innerText;
  
    const productsCartNames = document.getElementsByClassName('cart-product-title');
    for (let i = 0; i < productsCartNames.length; i++) {
      if (productsCartNames[i].innerText === productName) {
        productsCartNames[i].parentElement.parentElement.getElementsByClassName('product-qtd-input')[0].value++;
        updateTotal();
        return;
      }
    }
  
    const newCartProduct = document.createElement('tr');
    newCartProduct.classList.add('cart-product');
  
    newCartProduct.innerHTML = `
        <td class="product-identification">
          <img src="${productImage}" alt="${productName}" class="cart-product-image">
          <strong class="cart-product-title">${productName}</strong>
        </td>
        <td>
          <span class="cart-product-price">${productPrice}</span>
        </td>
        <td>
          <input type="number" value="1" min="0" class="product-qtd-input">
          <button type="button" class="remove-product-button">Remover</button>
        </td>
      `;
    
    const tableBody = document.querySelector('.cart-table tbody');
    tableBody.append(newCartProduct);
    updateTotal();
  
    newCartProduct.getElementsByClassName('remove-product-button')[0].addEventListener('click', removeProduct);
    newCartProduct.getElementsByClassName('product-qtd-input')[0].addEventListener('change', checkIfInputIsNull);
  }
  
  function makePurchase() {
    if (totalAmount === '0,00') {
      alert('Seu carrinho está vazio!');
    } else {   
      alert(`
          Obrigado pela sua compra!
          Valor do pedido: R$${totalAmount}
          Volte sempre :)
        `);
  
      document.querySelector('.cart-table tbody').innerHTML = '';
      updateTotal();
    }
  }
  
  // Atualizar o valor total do carrinho
  function updateTotal() {
    const cartProducts = document.getElementsByClassName("cart-product")
    totalAmount = 0
  
    for (var i = 0; i < cartProducts.length; i++) {
      const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
      const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value
  
      totalAmount += productPrice * productQuantity
    }
    
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
  }


// Menu-Mobile

 function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
// Scrollbar Personalizado

    var btn = document.querySelector("#back-to-top");
    btn.addEventListener("click", function() {
        window.scrollTo(0, 0);
    });

// abaProdutos

const relatedProductsBtn = document.querySelector('#related-products-btn');
const relatedProductsModal = document.querySelector('#related-products-modal');
const closeBtn = document.querySelector('.close');

relatedProductsBtn.addEventListener('click', () => {
  relatedProductsModal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  relatedProductsModal.classList.remove('active');
});