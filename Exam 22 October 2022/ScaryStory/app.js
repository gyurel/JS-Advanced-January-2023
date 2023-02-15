window.addEventListener("load", solve);

function solve() {
  let firstNameInputField = document.getElementById('first-name');
  let lastNameInputField = document.getElementById('last-name');
  let ageInputField = document.getElementById('age');
  let storyTitleInputField = document.getElementById('story-title');
  let genreInputField = document.getElementById('genre');
  let storyTextAreaField = document.getElementById('story');
  let mainDiv = document.getElementById('main');

  let publishButton = document.getElementById('form-btn');
  publishButton.addEventListener('click', publishStory);

  let previewList = document.getElementById('preview-list');

  function publishStory(e){
    e.preventDefault();

    if(firstNameInputField.value == '' 
    || lastNameInputField.value == ''
    || ageInputField.value == ''
    || storyTitleInputField.value == ''
    || genreInputField.value == ''
    || storyTextAreaField.value == ''
    ){
      return;
    }

    let liElement = document.createElement('li');
    liElement.classList.add('story-info');

    let articleElement = document.createElement('article');
    let h4Element = document.createElement('h4');
    let firstName = firstNameInputField.value;
    let lastName = lastNameInputField.value;

    h4Element.textContent = `Name: ${firstName} ${lastName}`;
    articleElement.appendChild(h4Element);
    let firstP = document.createElement('p');
    let age = ageInputField.value;
    firstP.textContent = `Age: ${age}`;
    articleElement.appendChild(firstP);
    let secondP = document.createElement('p');
    let storyTitle = storyTitleInputField.value
    secondP.textContent = `Title: ${storyTitle}`;
    articleElement.appendChild(secondP);
    let thirdP = document.createElement('p');
    let genre = genreInputField.value;
    thirdP.textContent = `Genre: ${genre}`;
    articleElement.appendChild(thirdP);
    let fourthP = document.createElement('p');
    let storyText = storyTextAreaField.value;
    fourthP.textContent = storyText;
    articleElement.appendChild(fourthP);

    liElement.appendChild(articleElement);

    let saveStoryButton = document.createElement('button');
    saveStoryButton.classList.add('save-btn');
    saveStoryButton.textContent = 'Save Story';
    saveStoryButton.addEventListener('click', saveStory);
    liElement.appendChild(saveStoryButton);

    let editStoryButton = document.createElement('button');
    editStoryButton.classList.add('edit-btn');
    editStoryButton.textContent = 'Edit Story';
    editStoryButton.addEventListener('click', editStory);
    liElement.appendChild(editStoryButton);

    let deleteStoryButton = document.createElement('button');
    deleteStoryButton.classList.add('delete-btn');
    deleteStoryButton.textContent = 'Delete Story';
    deleteStoryButton.addEventListener('click', deleteStory);
    liElement.appendChild(deleteStoryButton);

    previewList.appendChild(liElement);
    publishButton.disabled = true;

    clearFormFields();

    function editStory(){
      publishButton.disabled = false;
      saveStoryButton.disabled = true; 
      editStoryButton.disabled = true;
      deleteStoryButton.disabled = true;
  
      firstNameInputField.value = firstName;
      lastNameInputField.value = lastName;
      ageInputField.value = age;
      storyTitleInputField.value = storyTitle;
      genreInputField.value = genre;
      storyTextAreaField.value = storyText;
  
      previewList.removeChild(liElement);
    }

    function deleteStory(){
      publishButton.disabled = false;
      previewList.removeChild(liElement);
    }

    function saveStory(){
      let h1Tag = document.createElement('h1');
      h1Tag.textContent = "Your scary story is saved!";
      let firstDiv = document.querySelector('.form-wrapper');
      mainDiv.removeChild(firstDiv);
      let secondDiv = document.getElementById('side-wrapper');
      mainDiv.removeChild(secondDiv);
      mainDiv.appendChild(h1Tag);

    }
  }

  function clearFormFields(){
    firstNameInputField.value = '';
    lastNameInputField.value = '';
    ageInputField.value = '';
    storyTitleInputField.value = '';
    genreInputField.value = '';
    storyTextAreaField.value = '';
  }
}