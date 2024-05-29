(function () {
    "use strict";
    // A modern approach to copy text to clipboard
    const clipboard = new ClipboardJS(".copy");
    clipboard.on("success", function (e) {
        console.info("Action:", e.action);
        console.info("Text:", e.text);
        console.info("Trigger:", e.trigger);
        e.clearSelection();
    });
    clipboard.on("error", function (e) {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);
    });
    // A modern approach to add tooltip
    const elements = document.getElementsByClassName("copy");
    const contents = document.getElementsByClassName("copy-message");
    elements[0].addEventListener("click", () => {
        elements[0].classList.remove("bx-copy");
        elements[0].classList.add("bxs-copy");
        contents[0].textContent = "Copied";
        contents[0].style.display = "block";
        setTimeout(() => {
            contents[0].style.display = "none";
        }, 1000);
    });
    elements[1].addEventListener("click", () => {
        elements[1].classList.remove("bx-copy");
        elements[1].classList.add("bxs-copy");
        contents[1].textContent = "Copied";
        contents[1].style.display = "block";
        setTimeout(() => {
            contents[1].style.display = "none";
        }, 1000);
    });
    elements[2].addEventListener("click", () => {
        elements[2].classList.remove("bx-copy");
        elements[2].classList.add("bxs-copy");
        contents[2].textContent = "Copied";
        contents[2].style.display = "block";
        setTimeout(() => {
            contents[2].style.display = "none";
        }, 1000);
    });
}());