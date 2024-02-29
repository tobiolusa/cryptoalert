(function () {
    "use strict";
    // Initialize international telephone input
    let input = document.querySelector("#validationPhone");
    window.intlTelInput(input, {
        customContainer: "international",
        autoHideDialCode: false,
        separateDialCode: false,
        preferredCountries: ["ng", "gh", "za"],
        onlyCountries: ["ci", "cm", "gb", "gh", "ke", "mu", "mw", "ng", "rw", "tz", "ug", "us", "za", "zm"],
        initialCountry: "auto",
        geoIpLookup: function (callback) {
            $.get("https://ipinfo.io", function () {}, "jsonp").always(function (
                resp
            ) {
                let countryCode = resp && resp.country ? resp.country : "us";
                callback(countryCode);
            });
        },
        utilsScript: "assets/libs/intl-tel-input/js/utils.js"
    });
}());