const renderCart = () => {
  let total = 0;

  let html = "";
  if(cartArray.length === 0){
    x = `<div class="text-center">Your cart is empty<br>Add trees to get started</div>
    `
    html += x;
  }else{
    cartArray.forEach((cart) => {
    total += (cart.price * cart.quantity);
    x = `<div class="bg-gray-200 p-5 rounded-lg flex justify-between items-center w-80">
  
  <div>
    <h3 class="font-semibold">${cart.name}</h3>
    <p class="text-sm text-gray-600">$${cart.price} × ${cart.quantity}</p>
  </div>

  <button id="cart-${cart.id}" class="font-bold cart-delete hover:bg-amber-400">X</button>

  <div class="font-bold text-lg">${cart.price * cart.quantity}</div>

</div>`;
  html += x;
  });
  }
  html += `<div class="bg-gray-400 p-6 rounded">total - $${total}</div>`
  cartContainer.innerHTML = html
  
};
