(function () {
    "use strict";
    // Adds search, sort, filters and flexibility to plain HTML lists, or anything.
    const options = {
        valueNames: ["account-name", "account-number", "bank-name"],
    };
    const searchElement = new List("recipient-list", options);
    // Display the specified content of the delivery method element.
    const selectElement = document.getElementById("isDelivery");
    const isFiat = document.getElementsByClassName("isFiat");
    const isCrypto = document.getElementsByClassName("isCrypto");
    selectElement.addEventListener("change", () => {
        const selectedID = selectElement.options[selectElement.selectedIndex].id;
        Array.from(isFiat).forEach((el) => {
            if (selectedID == "isFiat") {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }
        });
        Array.from(isCrypto).forEach((el) => {
            if (selectedID == "isCrypto") {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }
        });
    });
})();