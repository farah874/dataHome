document.getElementById('subscribeForm').addEventListener('submit',
function (event) {
event.preventDefault();
const name = document.getElementById('name').value.trim()
;
const email =
document.getElementById('email').value.trim();
const message =
document.getElementById('message');
message.textContent = '';
if (!name || !email) {
message.textContent = 'Please fill out all fields.';
message.style.color = 'red';
return;
}
const emailPattern =/^[^@\s]+@[^@\s]+\.[^@\s]+$/;
if (!emailPattern.test(email)) {
message.textContent = 'Please enter a valid email address.';
message.style.color = 'red';
return;
}

message.textContent = `Thank you, ${name}, for login!`;
message.style.color = 'black';
document.getElementById('subscribeForm').reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const signUpBtn = document.getElementById("signUpBtn");

    if (signUpBtn) {
        signUpBtn.addEventListener("click", function () {
            window.location.href = "signup.html";
        });
    }
});
