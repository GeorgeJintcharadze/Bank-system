let balance = 0;

document.getElementById('deposit').addEventListener('click', () => {
    const amount = parseInt(document.getElementById('amount').value);
    if (amount > 0) {
        balance += amount;
        document.getElementById('balance').innerText = balance;
    }
});

document.getElementById('withdraw').addEventListener('click', () => {
    const amount = parseInt(document.getElementById('amount').value);
    if (amount > 0) {
        if (balance >= amount) {
            balance -= amount;
            document.getElementById('balance').innerText = balance;
        } else {
            alert('Not enough money on balance!');
        }
    }
});