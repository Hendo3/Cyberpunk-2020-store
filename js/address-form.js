function submitAddress(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const street = document.getElementById('street').value;
    const number = document.getElementById('number').value;
    const complement = document.getElementById('complement').value;
    const district = document.getElementById('district').value;

    console.log(street, number, complement, district);

    window.location.href = 'purchase.html?street=' + street + '&number=' + number + '&complement=' + complement + '&district=' + district + '&name=' + name;
}

submitAddress();