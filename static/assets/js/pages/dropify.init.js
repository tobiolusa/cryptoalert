(function () {
    "use strict";
    // Dropify drag and drop file uploader
    $('.dropify').dropify({
        messages: {
            'default': 'Click or drop image here',
            'replace': 'Click or drop image to replace',
            'remove':  'Remove',
            'error':   'Something went wrong.'
        }
    });
}());