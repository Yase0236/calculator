document.querySelector('#frmCalculate').addEventListener('submit', (e) => {
    e.preventDefault();

    const amount = parseFloat(e.target.txtAmount.value);
    const percentage = parseFloat(e.target.txtPercentage.value);

    const tax = (percentage * amount) / 100

    document.querySelector('#tax').innerText = tax.toFixed(2);
    document.querySelector('#final').innerText = (amount - tax).toFixed(2);


})