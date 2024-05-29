(function () {
    "use strict";
    // Adds search, sort, filters and flexibility to plain HTML lists, or anything.
    const options = {
        valueNames: ["account-name", "account-number", "bank-name"],
    };
    const searchElement = new List("recipient-list", options);
    // Count the total number of recipients selected.
    const countElement = document.getElementsByClassName("form-check-input");
    const countMessage = document.getElementById("countMessage");
    Array.from(countElement).forEach((el) => {
        countMessage.style.display = "none";
        el.addEventListener("click", () => {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            if (checkboxes.length > 0) {
                countMessage.textContent = `${checkboxes.length} ${checkboxes.length == 1 ? 'recipient' : 'recipients'} selected.`;
                countMessage.style.display = "block";
            } else {
                countMessage.style.display = "none";
            }
        });
    });
})();