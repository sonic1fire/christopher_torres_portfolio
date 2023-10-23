// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
    const mpgForm = document.getElementById("mpgForm");
    const milesTraveledInput = document.getElementById("milesTraveled");
    const gallonsOfGasUsedInput = document.getElementById("gallonsOfGasUsed");
    const mpgValue = document.getElementById("mpgValue");

    mpgForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const milesTraveled = parseFloat(milesTraveledInput.value);
        const gallonsOfGasUsed = parseFloat(gallonsOfGasUsedInput.value);

        if (!isNaN(milesTraveled) && !isNaN(gallonsOfGasUsed) && gallonsOfGasUsed > 0) {
            const milesPerGallon = milesTraveled / gallonsOfGasUsed;
            mpgValue.textContent = milesPerGallon.toFixed(2);
        } else {
            mpgValue.textContent = "Invalid input";
        }
    });
});
