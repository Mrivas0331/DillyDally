async function saveData() {
    const key = document.getElementById('key').value;
    const value = document.getElementById('value').value;
    const response = await fetch('/save', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({key, value})
    });
    
    const data = await response.json();
    document.getElementById('result').innerText = data.message;
}

async function loadData() {
    const key = document.getElementById('key').value;
    const response = await fetch(`/get/${key}`);
    const data = await response.json();
    if (response.ok) {
        document.getElementById('result').innerText = `Value: ${data.value}`;
    } else {
        document.getElementById('result').innerText = data.error;
    }
}

async function deleteData() {
    const key = document.getElementById('key').value;
    const response = await fetch(`/delete/${key}`);
    const data = await response.json();
    if (response.ok) {
        document.getElementById('result').innerText = `${data.value}`;
    } else {
        document.getElementById('result').innerText = data.error;
    }
}