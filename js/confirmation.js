function generateCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';

    for (let i = 0; i < 15; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return code;
}

function ShowItens() {
    const itensLs = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itensList = document.getElementById('itens-list');
    console.log(itensLs);


    let value = 0;
    itensLs.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        value += item.price;
        itensList.appendChild(listItem);
    });
    document.getElementById('total').textContent = "Total: " + value.toFixed(2);
        
        const params = new URLSearchParams(window.location.search);
        const code = generateCode();
        
        console.log(params);
        
        const name = params.get('name');
        const street = params.get('street');
        const number = params.get('number');
        const complement = params.get('complement');
        const district = params.get('district');
        const itens = params.get('itens');
        const total = params.get('total');
        
        document.getElementById('name').textContent = name;
        document.getElementById('street').textContent = "Street: " + street;
        document.getElementById('number').textContent = "Number: " + number;
        document.getElementById('complement').textContent = "Complement: " + complement;
        document.getElementById('district').textContent = "District:" + district;
        document.getElementById('code').textContent = "Purchase code: " + generateCode();
        document.getElementById('itens').textContent = "Itens: " + itens + "<br>";
        document.getElementById('total').textContent = "Total: " + total;
}

window.onload = ShowItens;