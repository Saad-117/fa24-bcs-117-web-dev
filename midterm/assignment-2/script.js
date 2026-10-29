const MAX = 3; // (17 mod 4) + 2
 
let cart = [];
 
const badge = document.getElementById("cart-badge");
const panel = document.getElementById("mini-cart");
const list = document.getElementById("cart-list");
const totalText = document.getElementById("cart-total");
const cartIcon = document.getElementById("cart-icon");
const buttons = document.querySelectorAll(".best-sellers .card .btn");
 
// read the product name from the card that holds this button
function getName(button) {
    return button.closest(".card").querySelector(".card-title").textContent;
}
 
// how many times this product is in the cart
function countOf(name) {
    return cart.filter(function (item) {
        return item.name === name;
    }).length;
}
 
// redraw badge, list, total and button states
function updateCart() {
    badge.textContent = cart.length;
 
    list.innerHTML = "";
    cart.forEach(function (item, index) {
        const li = document.createElement("li");
        li.textContent = item.name + " - $" + item.price + " ";
 
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        removeBtn.addEventListener("click", function () {
            cart.splice(index, 1);
            updateCart();
        });
 
        li.appendChild(removeBtn);
        list.appendChild(li);
    });
 
    const total = cart.reduce(function (sum, item) {
        return sum + item.price;
    }, 0);
    totalText.textContent = total;
 
    buttons.forEach(function (button) {
        if (countOf(getName(button)) >= MAX) {
            button.textContent = "Limit reached";
            button.classList.add("disabled");
        } else {
            button.textContent = "Add to Cart";
            button.classList.remove("disabled");
        }
    });
}
 
// Add to Cart
buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
 
        const card = button.closest(".card");
        const name = getName(button);
        const price = Number(card.querySelector(".card-text").textContent.replace("$", ""));
 
        if (countOf(name) < MAX) {
            cart.push({ name: name, price: price });
            updateCart();
        }
    });
});
 
// open / close the mini cart
cartIcon.addEventListener("click", function (event) {
    event.preventDefault();
    panel.classList.toggle("open");
});