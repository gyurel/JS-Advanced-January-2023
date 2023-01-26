function search() {


   let searchText = document.getElementById('searchText');
   let towns = Array.from(document.getElementsByTagName('li'));
   let resultText = document.getElementById('result');

   let counter = 0;

   for (const town of towns) {
      // debugger
      if(town.textContent.includes(searchText.value)){

         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter += 1;
      }else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   resultText.textContent = `${counter} matches found`;
   
}
