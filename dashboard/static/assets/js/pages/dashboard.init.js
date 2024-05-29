(function () {
    "use strict";
    // Launch choosePIN modal on page ready
    const choosePIN = new bootstrap.Modal(document.getElementById("choosePIN"), {});
    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            choosePIN.show();
        }
    };
    // A modern approach to mask the account balance
    const elements = document.getElementsByClassName("maskify");
    const contents = document.getElementsByClassName("masked");
    const m = contents[0].textContent;
    elements[0].addEventListener("click", () => {
        if (elements[0].classList.contains("iconly-Hide")) {
            elements[0].classList.remove("iconly-Hide");
            elements[0].classList.add("iconly-Show");
        } else {
            elements[0].classList.remove("iconly-Show");
            elements[0].classList.add("iconly-Hide");
        }
        if (contents[0].textContent == m) {
            contents[0].textContent = "****";
        } else {
            contents[0].textContent = m;
        }
    });
    const n = contents[1].textContent;
    elements[1].addEventListener("click", () => {
        if (elements[1].classList.contains("iconly-Hide")) {
            elements[1].classList.remove("iconly-Hide");
            elements[1].classList.add("iconly-Show");
        } else {
            elements[1].classList.remove("iconly-Show");
            elements[1].classList.add("iconly-Hide");
        }
        if (contents[1].textContent == n) {
            contents[1].textContent = "****";
        } else {
            contents[1].textContent = n;
        }
    });
})();