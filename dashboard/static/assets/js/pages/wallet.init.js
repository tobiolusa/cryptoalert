(function () {
    "use strict";
    // A modern approach to mask the account balance
    const elements = document.getElementsByClassName("maskify");
    const contents = document.getElementsByClassName("masked");
    const a = contents[0].textContent;
    elements[0].addEventListener("click", () => {
        if (elements[0].classList.contains("iconly-Hide")) {
            elements[0].classList.remove("iconly-Hide");
            elements[0].classList.add("iconly-Show");
        } else {
            elements[0].classList.remove("iconly-Show");
            elements[0].classList.add("iconly-Hide");
        }
        if (contents[0].textContent == a) {
            contents[0].textContent = "****";
        } else {
            contents[0].textContent = a;
        }
    });
    const b = contents[1].textContent;
    elements[1].addEventListener("click", () => {
        if (elements[1].classList.contains("iconly-Hide")) {
            elements[1].classList.remove("iconly-Hide");
            elements[1].classList.add("iconly-Show");
        } else {
            elements[1].classList.remove("iconly-Show");
            elements[1].classList.add("iconly-Hide");
        }
        if (contents[1].textContent == b) {
            contents[1].textContent = "****";
        } else {
            contents[1].textContent = b;
        }
    });
    const c = contents[2].textContent;
    elements[2].addEventListener("click", () => {
        if (elements[2].classList.contains("iconly-Hide")) {
            elements[2].classList.remove("iconly-Hide");
            elements[2].classList.add("iconly-Show");
        } else {
            elements[2].classList.remove("iconly-Show");
            elements[2].classList.add("iconly-Hide");
        }
        if (contents[2].textContent == c) {
            contents[2].textContent = "****";
        } else {
            contents[2].textContent = c;
        }
    });
    const d = contents[3].textContent;
    elements[3].addEventListener("click", () => {
        if (elements[3].classList.contains("iconly-Hide")) {
            elements[3].classList.remove("iconly-Hide");
            elements[3].classList.add("iconly-Show");
        } else {
            elements[3].classList.remove("iconly-Show");
            elements[3].classList.add("iconly-Hide");
        }
        if (contents[3].textContent == d) {
            contents[3].textContent = "****";
        } else {
            contents[3].textContent = d;
        }
    });
})();