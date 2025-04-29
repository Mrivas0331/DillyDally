async function loadData() {
    const productkey = window.location.pathname.split('/')[2];
    const response = await fetch('/get/${productkey');
    const data = await response.json();

    if (response.ok) {
        document.getElementById('keyout').innerText = `UPC: ${data.key}\n`;
        document.getElementById('nameout').innerText = `${data.value.name}\n`;
        document.getElementById('priceout').innerText = `${data.value.price}\n`;
        document.getElementById('descout').innerText = `${data.value.desc}\n`;
        document.getElementById('imgout').src = `${data.value.img}`;
    } else {
        document.getElementById('result').innerText = data.error;
    }
}
window.onload = loadData();