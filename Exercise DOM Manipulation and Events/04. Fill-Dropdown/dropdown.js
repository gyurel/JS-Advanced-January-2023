function addItem() {
    let selectMenu = document.getElementById('menu');
    let newText = document.getElementById('newItemText');
    let newValue = document.getElementById('newItemValue');
    
    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = newText.value;
    newOptionElement.value = newValue.value;

    selectMenu.appendChild(newOptionElement);
    newText.value = '';
    newValue.value = '';
}
