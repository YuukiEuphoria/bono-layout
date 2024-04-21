document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById("bookingForm");
    const errorNotification = document.getElementById("errorNotification");
    const successNotification = document.getElementById("successNotification");

    function showErrorNotification(message) {
        errorNotification.textContent = message; 
        errorNotification.style.display = "block";
        setTimeout(function() {
            errorNotification.style.display = "none";
        }, 3000); 
    }

    function showSuccessNotification() {
        successNotification.style.display = "block";
        setTimeout(function() {
            successNotification.style.display = "none";
        }, 3000); 
    }

    function addErrorClass(element) {
        element.classList.add("error");
    }

    function removeErrorClass(element) {
        element.classList.remove("error");
    }

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const clientNameInput = document.getElementById("clientName");
        const clientNumberInput = document.getElementById("clientNumber");
        const reservationTimeInput = document.getElementById("reservationTime");
        const guestCountInput = document.getElementById("guestCount");

        const clientName = clientNameInput.value;
        const clientNumber = clientNumberInput.value;
        const reservationTime = reservationTimeInput.value;
        const guestCount = guestCountInput.value;

        if (!clientName || !clientNumber || !reservationTime || !guestCount) {
            showErrorNotification("Пожалуйста, заполните всю форму"); 
        } else {
            removeErrorClass(clientNameInput);
            removeErrorClass(clientNumberInput);
            removeErrorClass(reservationTimeInput);
            removeErrorClass(guestCountInput);
            showSuccessNotification();
        }
    });
});
