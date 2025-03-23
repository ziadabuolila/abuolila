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
document.querySelector(".submit").addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("mail").value.trim();
    const password1 = document.getElementById("pass_1").value.trim();
    const password2 = document.getElementById("pass_2").value.trim();
    if (email === "" || password1 === "" || password2 === "") {
        alert("برجاء ملئ الحقول أولاً");
    } else {
        window.location.href = "file:///G:/ziad/person/ar/index.html";
    }
});