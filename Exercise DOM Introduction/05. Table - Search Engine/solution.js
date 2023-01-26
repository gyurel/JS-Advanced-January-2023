function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableRows = document.querySelectorAll('tbody tr');
      let searchText = document.querySelector('#searchField').value;
      
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
      searchText = '';
   };
}
