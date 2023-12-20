const customers = document.getElementById("customers");

function getCart () {
    customers.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.map((item, index) => {
        const card = document.createElement("div");
        card.className = "cardBox";
        card.innerHTML = `
                  <img src="${item.image}" alt="">
                  <div class="cardTextBox">
                      <h2>${item.title}</h2>
                      <p>${item.description}</p>
                      <p>${item.price} $</p>
                  </div>
                  <button onclick="removeItem(${index})">ÜRÜNLERİ KALDIR</button>
              `;
        customers.appendChild(card);
      });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
}

window.onload = () => {
    getCart()
}