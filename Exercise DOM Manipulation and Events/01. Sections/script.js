function create(words) {
   let content = document.getElementById('content');

   for (const element of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = 'none';
      p.textContent = element;

      div.appendChild(p);

      div.addEventListener('click', onClick);
      content.appendChild(div);
   }

   function onClick(event){
      let currentElement = event.target.querySelector('p');
      currentElement.style.display = 'block';
   }
}