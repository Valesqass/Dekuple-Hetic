document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit');
    const newPassword = document.getElementById('new_password');
    const confirmPassword = document.getElementById('password_confirm');
    const errorMsg = document.querySelector('.error_msg');
    const successMsg = document.querySelector('.success_msg');

    submitButton.addEventListener('click', function(event) {
        if (newPassword.value.trim() === '' || confirmPassword.value.trim() === '') {
            errorMsg.style.display = 'block';
            successMsg.style.display = 'none'; 
            event.preventDefault();
            return;
        }


        if (newPassword.value === confirmPassword.value) {
            successMsg.style.display = 'block';
            errorMsg.style.display = 'none'; 
        } else {
            errorMsg.style.display = 'block'; 
            successMsg.style.display = 'none'; 
        }
    });

    newPassword.addEventListener('input', hideMessages);
    confirmPassword.addEventListener('input', hideMessages);

    function hideMessages() {
        errorMsg.style.display = 'none';
        successMsg.style.display = 'none';
    }
});

let button2 = document.getElementById ("submit2");
button2.addEventListener("click", (e)=>{
    e.preventDefault();
 document.location.href = "http://127.0.0.1:5500/steps/connect_appareil.html" ;

})