function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableRows = document.querySelectorAll('tbody tr');
      let searchInputField = document.querySelector('#searchField');
      let searchText = searchInputField.value;
      
      for (const row of tableRows) {
         // debugger
         for (const cell of Array.from(row.children)) {
            if(cell.textContent.includes(searchText)){
               cell.parentElement.classList.add('select');
               break;
            }else{
               cell.parentElement.classList.remove('select');
            };
         };
      };
      // debugger
      searchInputField.value = '';
   };
}
