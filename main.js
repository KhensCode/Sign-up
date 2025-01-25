function closeBtn() {
    const container = document.getElementById('container');
    container.style.display = "none";
}

const passwordBox = document.getElementById('passwordBox');
const generatePasswordButton = document.getElementById('generatePassword');
const generatedPasswordSpan = document.getElementById('generatedPassword');
const togglePasswordButton = document.getElementById('togglePassword');
const length = 15;
const upperCase = "ABCDEFGHIJ KLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*():?~`;</'[]+-|_=,.";
const allChars = upperCase + lowerCase + number + symbol;

togglePasswordButton.addEventListener('click', function() {
    const type = passwordBox.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordBox.setAttribute('type', type);
    this.querySelector('i').classList.toggle('bx-show');
    this.querySelector('i').classList.toggle('bx-hide');
});
passwordBox.addEventListener('input' , function () {
if(passwordBox.value.length > 0 ) {
    togglePasswordButton.style.display = 'block';
    generatePasswordButton.style.display = 'block';
    
}
else {
    togglePasswordButton.style.display = 'none';
    generatePasswordButton.style.display = 'none';
    generatePasswordButton.textContent = '';
   
}
});





function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    passwordBox.value = password;
    passwordBox.dispatchEvent(new Event('input', { bubbles: true }));
    generatedPasswordSpan.textContent = '';
}
