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
