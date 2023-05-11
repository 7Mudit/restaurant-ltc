const renderCartItems = () => {
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";

  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  cartItems.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <h3>${item.title}</h3>
      <p>Price: Rs. ${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <p>Total Price: Rs. ${item.totalPrice.toFixed(2)}</p>
      <button class="remove-item-btn" data-id="${index}">Remove</button>
    `;

    cartContainer.appendChild(cartItem);
  });

  const removeItemButtons = document.getElementsByClassName("remove-item-btn");
  for (let i = 0; i < removeItemButtons.length; i++) {
    removeItemButtons[i].addEventListener("click", function (event) {
      const index = parseInt(event.target.dataset.id);
      removeItemFromCart(index);
    });
  }
};

renderCartItems();

const clearCart = () => {
  localStorage.removeItem("cart");
  renderCartItems();
};
const removeItemFromCart = (index) => {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity -= 1;
    cartItems[index].totalPrice =
      cartItems[index].price * cartItems[index].quantity;
  } else {
    cartItems.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cartItems));
  renderCartItems();
};
