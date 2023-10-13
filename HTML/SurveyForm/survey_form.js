document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('survey-form');
    const submitButton = document.getElementById('submit-button');
    const resetButton = document.getElementById('reset-button');
    const popup = document.getElementById('popup');
    const closePopupButton = document.querySelector('.close-popup');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const submittedValues = [];
        const formElements = form.elements;

        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];

            if (element.type !== 'button') {
                const label = document.querySelector(`label[for="${element.id}"]`);
                if (label) {
                    const value = element.type === 'checkbox' ? element.checked : element.value;
                    submittedValues.push(`<strong>${label.textContent}:</strong> ${value}`);
                }
            }
        }

        const submittedValuesHtml = submittedValues.join('<br>');
        const submittedValuesContainer = document.getElementById('submitted-values');
        submittedValuesContainer.innerHTML = submittedValuesHtml;
        popup.style.display = 'block';
    });

    resetButton.addEventListener('click', function () {
        form.reset();
    });

    closePopupButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});

