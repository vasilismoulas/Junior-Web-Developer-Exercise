document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputNumber1');
    const submitButton = document.getElementById('submitButton1');

    // Handle form submission
    submitButton.addEventListener('click', () => {
        const value = parseFloat(inputField.value);
        if (value > 10) {
            alert(`Valid input: ${value}`);
        }
    });
});
