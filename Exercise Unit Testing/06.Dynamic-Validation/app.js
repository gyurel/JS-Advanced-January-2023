function validate() {
    const emailField = document.getElementById('email');
    emailField.addEventListener('change', onchange);
    const validMailRegEx = /([a-z]+)@([a-z]+)\.([a-z]+)/;


    function onchange(){
        debugger
        if(!validMailRegEx.test(emailField.value) && emailField.value != ""){
            emailField.classList.add('error');
        }else{
            emailField.classList.remove('error');
        }
    }
}
