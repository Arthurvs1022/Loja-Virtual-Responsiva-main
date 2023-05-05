//carrinho

const shoppingCart = document.querySelector('.shopping-cart');
const shoppingCartContent = document.querySelector('.shopping-cart-content');
const shoppingCartList = document.querySelector('.shopping-cart-list');
const badge = document.querySelector('.badge');
const totalPrice = document.querySelector('.total-price');

shoppingCart.addEventListener('click', function() {
  shoppingCartContent.style.display = shoppingCartContent.style.display === 'block' ? 'none' : 'block';
});

// Adiciona 1 ao contador de itens no carrinho ao clicar em um botão "Adicionar ao carrinho"
let count = 0;

function updateCartCountOnClick() {
  count++;
  document.querySelector('.badge').innerHTML = count;
}

document.querySelectorAll('.button').forEach(function(button) {
  button.addEventListener('click', updateCartCountOnClick);
});

// Adiciona item à lista do carrinho e atualiza o contador e a lista de itens do carrinho
let cart = [];

function addToCartList(item) {
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

/* //função que chama o carrinho
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
*/
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

const botoesDescricao = document.querySelectorAll(".btn-descricao");
const botoesValor = document.querySelectorAll(".btn-valor");

for (let i = 0; i < botoesDescricao.length; i++) {
  botoesDescricao[i].addEventListener("click", function() {
    const descricao = this.parentElement.querySelector(".descricao");
    const valor = this.parentElement.querySelector(".valor");
    if (valor.style.display === "block") {
      valor.style.display = "none";
    }
    descricao.style.display = "block";
  });
}

for (let i = 0; i < botoesValor.length; i++) {
  botoesValor[i].addEventListener("click", function() {
    const descricao = this.parentElement.querySelector(".descricao");
    const valor = this.parentElement.querySelector(".valor");
    if (descricao.style.display === "block") {
      descricao.style.display = "none";
    }
    valor.style.display = "block";
  });
}