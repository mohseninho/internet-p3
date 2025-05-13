function submitForm(event) {
    event.preventDefault();

    let fields = ['name', 'email', 'phone', 'address'];
    let isValid = true;

    fields.forEach(function (fieldId) {
        let field = document.getElementById(fieldId);
        if (field.value.trim() === '') {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
        }
    });

    if (isValid) {
        window.location.href = 'success.html';
    }
}