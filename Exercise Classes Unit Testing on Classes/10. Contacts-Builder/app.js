function contactsBuilder(){
    class Contact{
        constructor(firstName, lastName, phone, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
            this._online = false;
        }

        get online(){
            return this._online;
        }

        set online(arg){
            let articles = Array.from(document.querySelectorAll('article'));
            let currentName = NaN;
            for (const article of articles) {
                if(article.firstChild.textContent.includes(`${this.firstName} ${this.lastName}`)){
                    currentName = article.firstChild;
                }
            }
            if(arg){
                currentName.classList.add('online');
            }else{
                currentName.classList.remove('online');
            }
            this._online = arg;
        }

        render(id){
            let articleElement = document.createElement('article');

            let firstDiv = document.createElement('div');
            firstDiv.classList.add("title");
            firstDiv.textContent = `${this.firstName} ${this.lastName}`;
            let button = document.createElement('button');
            button.innerHTML = '&#8505';
            button.addEventListener('click', this.#onClick);
            firstDiv.appendChild(button);

            let secondDiv = document.createElement('div');
            secondDiv.classList.add("info");
            secondDiv.style.display = 'none';
            let firstSpan = document.createElement('span');
            firstSpan.innerHTML = `&phone; ${this.phone}`;

            let secondSpan = document.createElement('span');
            secondSpan.innerHTML = `&#9993; ${this.email}`;
            secondDiv.appendChild(firstSpan);
            secondDiv.appendChild(secondSpan);

            articleElement.appendChild(firstDiv);
            articleElement.appendChild(secondDiv);

            document.getElementById('main').appendChild(articleElement);
        }

        #onClick(event){
            debugger
            let currentElement = event.target.parentElement.parentElement.children[1];
            if(currentElement.style.display == 'block'){
                currentElement.style.display = 'none'
            }else{
                currentElement.style.display = 'block'
            }
        }
    }

    let contacts = [
        new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
        new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
        new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
        ];
    contacts.forEach(c => c.render('main'));
    // After 1 second, change the online status to true
    debugger
    let currentIndex = Math.round(Math.random() * (2 - 0) + 0);
    setTimeout(() => contacts[currentIndex].online = true, 2000);
    // contacts[1].online = true;
}

