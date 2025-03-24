let submit = document.querySelector('#submit');
let pass_1 = document.querySelector('#pass_1');
let pass_2 = document.querySelector('#pass_2');
let lastcheck = document.querySelector('.lastcheck');
pass_1.onkeyup = function () {
    if (pass_1.value != '') {
        lastcheck.classList.remove('d-none');
    } else {
        lastcheck.classList.add('d-none');
    }
}
pass_2.onkeyup = function () {
    if (pass_1.value != '') {
        if (pass_1.value != pass_2.value) {
            pass_2.classList.add('crouse');
        } else {
            pass_2.classList.remove('crouse');
        }
    }
}
// open
document.querySelector('.button.submit').addEventListener('click', function (event) {
    event.preventDefault();
    const emailElem = document.getElementById('mail');
    const pass1Elem = document.getElementById('pass_1');
    const pass2Elem = document.getElementById('pass_2');
    const email = emailElem ? emailElem.value.trim() : '';
    const pass1 = pass1Elem ? pass1Elem.value.trim() : '';
    const pass2 = pass2Elem ? pass2Elem.value.trim() : '';
    if (email === '' || pass1 === '') {
        alert('برجاء إدخال بياناتك أولاً.');
        return;
    }
    const lastCheck = document.querySelector('.lastcheck');
    if (lastCheck && !lastCheck.classList.contains('d-none') && pass1 !== pass2) {
        alert('كلمات المرور غير متطابقة.');
        return;
    }
    window.location.href = 'file:///G:/ziad/person/ar/index.html';
});
