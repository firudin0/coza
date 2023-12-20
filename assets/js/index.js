const qutu = document.getElementById('products')

let page = 1
let limit = 4



async function getProducts() {
    let skip = (page-1)*limit
    const response = await axios.get(`https://655c844f25b76d9884fd70a7.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`)
    const data = await response.data;
    db = data;

    db.map(item => {
        const box = document.createElement('div');
        box.className = 'productsCard'
        box.innerHTML = `
        <img src="${item.image}" class = "img2" alt="photo">
        <h1>${item.title}</h1>
        <p>${item.price}</p>
        <button class = "addToBasket" onclick = "addToBasket(${item.id})">Sepete Ekle</button>`
        qutu.append(box);
    })
    page++
}
moreBtn.addEventListener('click', function (){
    getProducts()
})


function addToBasket(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(db.find(item => item.id == id));
    localStorage.setItem('cart',JSON.stringify(cart));
}

getProducts()