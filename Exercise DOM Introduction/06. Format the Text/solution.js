function solve() {
  let inputElement = document.getElementById('input');
  let outputElement = document.getElementById('output');

  let currentInputText = inputElement.value.split('.');
  debugger
  currentInputText = currentInputText.filter(function(e){
    if(e){
      return e;
    }
  });

  let readyString = '';

  let counter = 1;
  let currentString = ''

  for (let index = 0; index < currentInputText.length; index++) {
    let sentence = currentInputText[index];
    debugger
    if(counter % 3 == 0 || index == currentInputText.length - 1){
      sentence.trim();
      currentString += `${sentence}.`
      currentString = `<p>${currentString}</p>`;
      readyString += currentString;
      currentString = '';
      counter = 1;  
    }else if(sentence.length > 0){
      sentence.trim();
      currentString += `${sentence}.`;
      counter += 1;
    }
  }

  outputElement.innerHTML = readyString;

}
