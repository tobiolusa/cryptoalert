(function () {
    "use strict";
    // A modern approach to modify exchange value
    const send = document.getElementById("sendAmount");
    const receive = document.getElementById("receiveAmount");
    send.addEventListener("input", () => {
        send.value = send.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/(\.\d{2}).+/g, '$1');
        receive.value = parseFloat(send.value / 500).toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});
    });
    receive.addEventListener("input", () => {
        receive.value = receive.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/(\.\d{2}).+/g, '$1');
        send.value = parseFloat(receive.value * 500).toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});
    });
}());