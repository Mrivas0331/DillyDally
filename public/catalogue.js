async function loadAllProducts() {
    const response = await fetch('/getAll');
    const products = await response.json();

    const catalogContainer = document.getElementById('catalog');
    catalogContainer.innerHTML ='';

    products.forEach(element => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML= `
        <img src="${element.img}" alt="${element.name}" class="product-image"/>
        <h3>${element.name}</h3>
        <p>Price: $${element.price}</p>
        <p>${element.desc}</p>`;
        catalogContainer.appendChild(productDiv);
    });

}
window.onload = loadAllProducts;