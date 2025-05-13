function login(event) {
    event.preventDefault();
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    let messageBox = document.getElementById('loginMessage');
    messageBox.classList.remove('text-danger', 'text-success');
    messageBox.innerText = '';


    if (user === '' || pass === '') {
        messageBox.classList.add('text-danger');
        messageBox.innerText = 'لطفاً همه فیلدها را پر کنید.';
        return;
    }

    if (pass.length < 4) {
        messageBox.classList.add('text-danger');
        messageBox.innerText = 'رمز عبور باید حداقل ۴ کاراکتر باشد.';
        return;
    }

    if (user === 'admin' && pass === '1234') {
        messageBox.classList.add('text-success');
        messageBox.innerText = 'ورود موفق!';
    } else {
        messageBox.classList.add('text-danger');
        messageBox.innerText = 'نام کاربری یا رمز عبور اشتباه است.';
    }
  }