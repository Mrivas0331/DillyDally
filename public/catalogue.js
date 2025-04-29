async function loadAllProducts() {
    const response = await fetch('/getAll');
    const products = await response.json();

    const catalogContainer = document.getElementById('catalog');
    catalogContainer.innerHTML ='';

    products.forEach(element => {
        const productLink = document.createElement('a');
        productLink.href=`/product/${element.key}`;
        productLink.style.textDecoration = 'none';
        productLink.style.color = 'inherit';

        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML= `
        <img src="${element.img}" alt="${element.name}" class="product-image"/>
        <h3>${element.name}</h3>
        <p>Price: $${element.price}</p>
        <p>${element.desc}</p>`;

        productLink.append(productDiv);
        catalogContainer.appendChild(productDiv);
    });

}
window.onload = loadAllProducts;