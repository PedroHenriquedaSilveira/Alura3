document.getElementById('financing-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100;
    const installments = parseInt(document.getElementById('installments').value);

    const i = interest;
    const n = installments;

    const monthlyPayment = (amount * i) / (1 - Math.pow(1 + i, -n));

    document.getElementById('result').textContent = monthlyPayment.toFixed(2);
});
