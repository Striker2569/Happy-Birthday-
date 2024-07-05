function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '060702'; // Replace MMDD with her actual birthdate

    if (password === correctPassword) {
        window.location.href = 'birthday.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

function showMessage() {
    const message = document.getElementById('surprise-message');
    message.style.display = 'block';
}
function navigateToDrawing() {
    window.location.href = "drawing.html";
}

