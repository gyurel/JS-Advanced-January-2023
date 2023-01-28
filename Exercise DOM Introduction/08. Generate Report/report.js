function generateReport() {
    let outputElement = document.getElementById('output');
    let headRow = Array.from(document.querySelectorAll('thead tr th input'));
    let tableRows = Array.from(document.querySelectorAll('tbody tr'));

    let resultArr = [];

    for (let row = 0; row < tableRows.length; row++) {
        let currentTableRow = Array.from(tableRows[row].querySelectorAll('td'));
        let currentTableObj = {};

        for (let col = 0; col < headRow.length; col++) {
            if(headRow[col].checked){
                currentTableObj[headRow[col].name] = currentTableRow[col].textContent;
                
            }
        }
        resultArr.push(currentTableObj);
    }
    outputElement.textContent = JSON.stringify(resultArr);
}