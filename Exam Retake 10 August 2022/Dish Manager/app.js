window.addEventListener("load", solve);

function solve() {
  let firstNameInputField = document.getElementById('first-name');
  let lastNameInputField = document.getElementById('last-name');
  let ageInputField = document.getElementById('age');
  let genderInputField = document.getElementById('genderSelect');
  let descripionInputField = document.getElementById('task');
  let clearButton = document.getElementById('clear-btn');
  
  let ulInProgress = document.getElementById("in-progress");
  let progressSpan = document.getElementById('progress-count');
  let counter = 0;

  let ulFinished = document.getElementById('finished');

  let submitButton = document.getElementById("form-btn");
  submitButton.addEventListener('click', submitForm);

  function submitForm(event){
    event.preventDefault();

    let firstName = firstNameInputField.value;
    let lastName = lastNameInputField.value;
    let age = ageInputField.value;
    let gender = genderInputField.value;
    let descripion = descripionInputField.value;

    if( firstNameInputField.value == '' 
    || lastNameInputField.value == ''
    || ageInputField.value == ''
    || genderInputField.value == ''
    || descripionInputField.value == ''){
      return;
    }

    let li = document.createElement('li');
    li.classList.add('each-line');
    let article = document.createElement('article');
    li.appendChild(article);
    let h4 = document.createElement('h4');
    h4.textContent = `${firstName} ${lastName}`;
    article.appendChild(h4);
    let p1 = document.createElement('p');
    p1.textContent = `${gender}, ${age}`;
    article.appendChild(p1);
    let p2 = document.createElement('p');
    p2.textContent = `Dish description: ${descripion}`;
    article.appendChild(p2);
    li.appendChild(article);

    let editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = "Edit";
    editButton.addEventListener('click', editDish);
    li.appendChild(editButton);

    let completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.textContent = "Mark as complete";
    completeButton.addEventListener('click', markComplete);
    li.appendChild(completeButton);

    ulInProgress.appendChild(li);

    counter += 1;

    progressSpan.textContent = counter;

    clearInputs();

    clearButton.addEventListener('click', clearTasks);

    function editDish(){
      ulInProgress.removeChild(li);
      populateInputs();
      counter -= 1;
      progressSpan.textContent = counter;
    }

    function markComplete(){
      ulInProgress.removeChild(li);
      li.removeChild(editButton);
      li.removeChild(completeButton);
      ulFinished.appendChild(li);
      counter -= 1;
      progressSpan.textContent = counter;
    }

    function clearTasks(){
      let liElements = Array.from(ulFinished.querySelectorAll('li'));
      for (const element of liElements) {
        element.remove();
      }
    }

    function populateInputs(){
      firstNameInputField.value = firstName;
      lastNameInputField.value = lastName;
      ageInputField.value = age;
      genderInputField.value = gender;
      descripionInputField.value = descripion;
    }

    function clearInputs(){
      firstNameInputField.value = '';
      lastNameInputField.value = '';
      ageInputField.value ='';
      genderInputField.value = '';
      descripionInputField.value = '';
    }
  }
}
