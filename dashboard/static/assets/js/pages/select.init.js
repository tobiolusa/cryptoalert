(function () {
    "use strict";
    // Initialize custom select format options
    let optionFormat = function(item) {
        if ( !item.id ) {
            return item.text;
        }
        let span = document.createElement('span');
        let imgUrl = item.element.getAttribute('data-select-country');
        let template = '';
        template += '<img src="' + imgUrl + '" class="international-svg" alt="image"/>';
        template += item.text;
        span.innerHTML = template;
        return $(span);
    }
    $('#selectNationality').select2({
        minimumResultsForSearch: Infinity,
        templateSelection: optionFormat,
        templateResult: optionFormat
    });
}());