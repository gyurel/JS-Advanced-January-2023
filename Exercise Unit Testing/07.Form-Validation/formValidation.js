function validate() {
    const userNameRegEx = /^([A-Za-z0-9]){3,20}$/;
    const passwordRegEx = /^([\w]){5,15}$/;
    const emailRegEx = /^(.+[@]{1}.+[.].+)$/;

    const userNameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const submitButton = document.getElementById('submit');
    const companyCheckbox = document.getElementById('company');
    const companyInfoField = document.getElementById('companyInfo');
    const companyNumberField = document.getElementById('companyNumber');
    const divValid = document.getElementById('valid');

    submitButton.addEventListener('click', onButtonClick);
    companyCheckbox.addEventListener('change', onCheckBoxCheck);
    

    function onButtonClick(event){
        event.preventDefault();
        let errorFlag = false;

        if(!userNameRegEx.test(userNameField.value)){
            userNameField.style.borderColor = 'red';
            errorFlag = true;
        }

        if(!emailRegEx.test(emailField.value)){
            emailField.style.borderColor = 'red';
            errorFlag = true;
        }

        if(!passwordRegEx.test(passwordField.value)){
            passwordField.style.borderColor = 'red';
            errorFlag = true;
        }

        if(confirmPasswordField.value != passwordField.value){
            passwordField.style.borderColor = 'red';
            confirmPasswordField.style.borderColor = 'red';
            errorFlag = true;
        }

        debugger
        if(companyInfoField.style.display == 'block'){
            let companyRegNum = Number(companyNumberField.value);
            if(!(companyRegNum >= 1000  && companyRegNum <= 9999)){
                companyNumberField.style.borderColor = 'red';
                errorFlag = true;
            }
        }

        if(!errorFlag){
            divValid.style.display = 'block';
        }
    }


    function onCheckBoxCheck(){
        if(companyCheckbox.checked == true){
            companyInfoField.style.display = 'block';
        }else{
            companyInfoField.style.display = 'none';
        }
    }
}
