function solve() {

  let textInputElement = document.getElementById('text');
  let namingConventionElement = document.getElementById('naming-convention');
  let resultElement = document.getElementById('result');
  
  let textInput = textInputElement.value.split(' ');
  let namingConvention = namingConventionElement.value;

  let resultString = ''

  // debugger
  for (let index = 0; index < textInput.length; index++) {
    let currentWord = textInput[index];

    if(namingConvention == 'Camel Case' && index == 0){

      currentWord = currentWord.toLowerCase();
      resultString += currentWord;

    }else if(namingConvention != 'Camel Case' && namingConvention != 'Pascal Case'){

      resultString = 'Error!'
      break;

    }else{

      let firstLetter = currentWord[0].toUpperCase();
      let restOfWord = currentWord.slice(1).toLowerCase();
      currentWord = firstLetter + restOfWord;
      resultString += currentWord;
    }
  }

  resultElement.textContent = resultString;
  
}