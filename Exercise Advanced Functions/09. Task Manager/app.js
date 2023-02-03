function solve() {
    document.getElementById('add').addEventListener('click', addTask);



    let taskArea = document.getElementById('task');
    let descriptionArea = document.getElementById('description');
    let dateArea = document.getElementById('date');

    // let openSection = document.querySelector('h1[class="orange"]').parentElement.parentElement.children[1];
    // let inProgressSection = document.querySelector('h1[class="orange"]').parentElement.parentElement.children[2];
    // let completeSection = document.querySelector('h1[class="orange"]').parentElement.parentElement.children[3];

    let [openSection, inProgressSection, completeSection] = Array.from(document.querySelectorAll('section')).slice(1);


    function addTask(event){
        event.preventDefault()
        if(taskArea.value === '' || descriptionArea.value === '' || dateArea.value === ''){
            return;
        }else{

            let newArticle = document.createElement('article');
            
            let newH3 = document.createElement('h3');
            newH3.textContent = taskArea.value;
            newArticle.appendChild(newH3);

            let p1 = document.createElement('p');
            p1.textContent = `Description: ${descriptionArea.value}`;
            newArticle.appendChild(p1);

            let p2 = document.createElement('p');
            p2.textContent = `Due Date: ${dateArea.value}`;
            newArticle.appendChild(p2);

            let flexDiv = document.createElement('div');
            flexDiv.classList.add('flex');

            let startButton = document.createElement('button');
            startButton.textContent = 'Start';
            // startButton.id = 'start'
            startButton.classList.add('green');
            startButton.addEventListener('click', startTask);

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            // deleteButton.id = 'delete'
            deleteButton.addEventListener('click', deleteArticle);
            deleteButton.classList.add('red');

            flexDiv.appendChild(startButton);
            flexDiv.appendChild(deleteButton);
            newArticle.appendChild(flexDiv);

            openSection.children[1].appendChild(newArticle);

            taskArea.value = '';
            descriptionArea.value = '';
            dateArea.value = '';
            
            function deleteArticle(event){
                // event.target.parentElement.parentElement.remove();
                newArticle.remove();
            }

            function startTask(event){
                debugger
                startButton.remove();
                let finishButton = document.createElement('button');
                finishButton.classList.add('orange');
                finishButton.textContent = 'Finish';
                finishButton.addEventListener('click', finishTask);
                flexDiv.appendChild(finishButton);
                // openSection.removeChild(newArticle);
                inProgressSection.children[1].appendChild(newArticle);
            }

            function finishTask(event){
                flexDiv.remove();
                completeSection.children[1].appendChild(newArticle);
            }
        }
    }
}
