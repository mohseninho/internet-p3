function login(event) {
    event.preventDefault();
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    let messageBox = document.getElementById('loginMessage');
    messageBox.classList.remove('text-danger', 'text-success');
    messageBox.innerText = '';


    if (user === '' || pass === '') {
        messageBox.classList.add('text-danger');
        messageBox.innerText = 'Please fill in all the fields.';
        return;
    }

    if (pass.length < 4) {
        messageBox.classList.add('text-danger');
        messageBox.innerText = 'Password must be at least 4 characters long.';
        return;
    }

    if (user === 'admin' && pass === '1234') {
        messageBox.classList.add('text-success');
        messageBox.innerText = 'Login successful!';
        window.location.href = 'adminPanel.html';
    } else if (user === 'user' && pass === '1234') {
        messageBox.classList.add('text-success');
        messageBox.innerText = 'Login successful!';
        window.location.href = 'userPanel.html';
    } else {
        messageBox.classList.add('text-danger');
        messageBox.innerText = 'Incorrect username or password.';
    }
}