function solve() {
    const firstNameField = document.getElementById("fname");
    const lastNameField = document.getElementById("lname");
    const emailField = document.getElementById("email");
    const birthDateField = document.getElementById("birth");
    const positionField = document.getElementById("position");
    const salaryField = document.getElementById("salary");

    const addWorkerButton = document.getElementById("add-worker");
    addWorkerButton.addEventListener("click", addWorker);

    const table = document.getElementById("tbody");

    const salarySumField = document.getElementById("sum");

    let salarySum = 0;

    function addWorker(event){
        event.preventDefault();

        let currentData = createTableData();

        table.appendChild(currentData);
        salarySum += Number(salaryField.value);
        salarySumField.textContent = salarySum.toFixed(2);

        firstNameField.value = ''; 
        lastNameField.value = '';
        emailField.value = '';
        birthDateField.value = '';
        positionField.value = '';
        salaryField.value = '';


    }

    function createTableData(){

        if(firstNameField.value == '' 
        || lastNameField.value == ''
        || emailField.value == ''
        || birthDateField.value == ''
        || positionField.value == ''
        || salaryField.value == ''){
            return;
        }

        let tr = document.createElement("tr");

        let firstNameTd = document.createElement("td");
        firstNameTd.textContent = firstNameField.value;
        tr.appendChild(firstNameTd);

        let lastNameTd = document.createElement("td");
        lastNameTd.textContent = lastNameField.value;
        tr.appendChild(lastNameTd);

        let emailTd = document.createElement("td");
        emailTd.textContent = emailField.value;
        tr.appendChild(emailTd);

        let dateOfBirthTd = document.createElement("td");
        dateOfBirthTd.textContent = birthDateField.value;
        tr.appendChild(dateOfBirthTd);

        let positionTd = document.createElement("td");
        positionTd.textContent = positionField.value;
        tr.appendChild(positionTd);

        let salaryTd = document.createElement("td");
        let currentSalary = Number(salaryField.value);
        salaryTd.textContent = currentSalary;
        tr.appendChild(salaryTd);

        let actionTd = document.createElement("td");
        let firedButton = document.createElement("button");
        firedButton.addEventListener('click', deleteWorker);
        firedButton.classList.add('fired');
        firedButton.textContent = 'Fired';
        actionTd.appendChild(firedButton);

        let editButton = document.createElement('button');
        editButton.addEventListener('click', editWorker);
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';
        actionTd.appendChild(editButton);
        tr.appendChild(actionTd);

        function deleteWorker(){
            debugger
            salarySum -= currentSalary;
            salarySumField.textContent = salarySum.toFixed(2);
            tr.remove();
        }

        function editWorker(){
            firstNameField.value = firstNameTd.textContent;
            lastNameField.value =  lastNameTd.textContent;
            emailField.value = emailTd.textContent;
            birthDateField.value = dateOfBirthTd.textContent;
            positionField.value =  positionTd.textContent;
            salaryField.value = salaryTd.textContent;
            salarySum -= currentSalary;
            salarySumField.textContent = salarySum.toFixed(2);
            tr.remove();

        }
        return tr;
    }
}
solve()
