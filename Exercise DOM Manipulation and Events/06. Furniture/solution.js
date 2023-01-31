function solve() {
  let inputTextArea = document.querySelectorAll('textarea')[0];

  document.querySelectorAll('button')[0].addEventListener('click', generate);
  document.querySelectorAll('button')[1].addEventListener('click', buy);
  

  function generate(){
    let inputObj = JSON.parse(inputTextArea.value);

    for (const furniture of inputObj) {
      let tr = document.createElement('tr');

      let tdImage = document.createElement('td');
      let img = document.createElement('img');
      img.src = furniture.img;
      tdImage.appendChild(img);
      tr.appendChild(tdImage);
      
      let tdName = document.createElement('td');
      let paragraphName = document.createElement('p');
      paragraphName.textContent = furniture.name;
      tdName.appendChild(paragraphName);
      tr.appendChild(tdName);

      let tdPrice = document.createElement('td');
      let paragraphPrice = document.createElement('p');
      paragraphPrice.textContent = furniture.price;
      tdPrice.appendChild(paragraphPrice);
      tr.appendChild(tdPrice);

      let tdDeco = document.createElement('td');
      let paragraphDeco = document.createElement('p');
      paragraphDeco.textContent = furniture.decFactor;
      tdDeco.appendChild(paragraphDeco);
      tr.appendChild(tdDeco);

      let tdCheck = document.createElement('td');
      let inputCheck = document.createElement('input');
      inputCheck.type = 'checkbox';
      tdCheck.appendChild(inputCheck);
      tr.appendChild(tdCheck);

      document.querySelector('tbody').appendChild(tr);
    }
  }

  function buy(){
    let inputElements = Array.from(document.querySelectorAll('input'));
    
    let furnitures = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    let resultText = '';
    
    for (const check of inputElements) {
      if(check.checked){
        let info = Array.from(check.parentElement.parentElement.querySelectorAll('td p'));
        let currentName = info[0].textContent;
        furnitures.push(currentName);

        let currentPrice = Number(info[1].textContent);
        totalPrice += currentPrice;

        let currentDecFactor = Number(info[2].textContent);
        totalDecFactor += currentDecFactor;
        
      }
    }
    resultText += `Bought furniture: ${furnitures.join(', ')}\n`;
    resultText += `Total price: ${totalPrice.toFixed(2)}\n`;
    resultText += `Average decoration factor: ${totalDecFactor / furnitures.length}`;
    document.querySelectorAll('textarea')[1].textContent = resultText;
  }
}
