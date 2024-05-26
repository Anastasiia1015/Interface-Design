// Отримуємо посилання на кнопку "Proceed Payment" і спливаюче вікно
var proceedPaymentBtn = document.getElementById("proceed-payment-btn");
var modal = document.getElementById("confirmation-modal");

// Отримуємо посилання на елемент закриття
var closeBtn = document.getElementsByClassName("close")[0];

// При кліку на кнопку "Proceed Payment", вікно з'являється
proceedPaymentBtn.onclick = function() {
    modal.style.display = "block";
}

// При кліку на хрестик закриваємо вікно
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// При кліку поза вікном також закриваємо його
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const cardNumberInput = document.getElementById('card_number');
    const cvvInput = document.getElementById('cvv');

    cardNumberInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 16) {
            value = value.substring(0, 16);
        }
        const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1-');
        e.target.value = formattedValue;
    });

    cvvInput.addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
    });
});
