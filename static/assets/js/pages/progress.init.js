let currentTab = 0;
showTab(currentTab);
// This function display the specified tab of the form.
function showTab(n) {
    let tab = document.getElementsByClassName("progress-tab");
    tab[n].style.display = "block";
}
// This function figure out which tab to display.
function nextTab(n) {
    let tab = document.getElementsByClassName("progress-tab");
    if (n == 1 && !validateForm()) return false;
    tab[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= tab.length) {
        document.getElementById("progress-form").submit();
        return false;
    }
    showTab(currentTab);
}
// This function validate the input fields.
function validateForm() {
    let tab, input, valid = true;
    tab = document.getElementsByClassName("progress-tab");
    input = tab[currentTab].querySelectorAll("[required]");
    Array.from(input).forEach(el => {
        if (el.value == "") {
            el.classList.add("is-invalid");
            valid = false;
        }
        el.addEventListener("input", () => {
            el.classList.remove("is-invalid");
        });
    });
    return valid;
}