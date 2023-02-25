window.addEventListener('load', solve);

function solve() {
    
    let create = {
        li: function(){return document.createElement('li')},
        ul: function(){return document.createElement('ul')},
        div: function(){return document.createElement('div')},
        span: function(){return document.createElement('span')},
        td: function(){return document.createElement('td')},
        tr: function(){return document.createElement('tr')},
        strong: function(){return document.createElement('strong')},
        button: function(){return document.createElement('button')},
        article: function(){return document.createElement('article')},
        h1: function(){return document.createElement('h1')},
        h2: function(){return document.createElement('h2')},
        h3: function(){return document.createElement('h3')},
        h4: function(){return document.createElement('h4')},
        h5: function(){return document.createElement('h5')},
        p: function(){return document.createElement('p')},
    }

    let firstNameField = document.getElementById('first-name');
    let lastNameField = document.getElementById('last-name');
    let peopleField = document.getElementById('people-count');
    let dateField = document.getElementById('from-date');
    let daysField = document.getElementById('days-count');
    let nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', nextFunc);
    let mainDiv = document.getElementById('main');
    let bodyElement = document.getElementById('body');

    let ticketInfolist = document.querySelector('ul[class="ticket-info-list"]');
    let confirmTicketField = document.querySelector('ul[class="confirm-ticket"]');
    

    function nextFunc(event){
        event.preventDefault();

        let firstName = firstNameField.value;
        let lastName = lastNameField.value;
        let people = peopleField.value;
        let date = dateField.value;
        let days = daysField.value;

        if(firstName == ''
        || lastName == ''
        || people == ''
        || date == ''
        || days == ''){
                return;
            }
        
        // let div = create.div();
        // div.classList.add('first-container');

        // let h1 = create.h1();
        // h1.textContent = 'Ticket Preview';
        // div.appendChild(h1);

        // let ul = create.ul();
        // ul.classList.add('ticket-info-list')
        // div.appendChild(ul);

        let li = create.li();
        li.classList.add('ticket');
        // ul.appendChild(li);

        let article = create.article();
        let h3 = create.h3();
        h3.textContent = `Name: ${firstName} ${lastName}`;
        article.appendChild(h3);

        let p1 = create.p();
        p1.textContent = `From date: ${date}`;
        article.appendChild(p1);

        let p2 = create.p();
        p2.textContent = `For ${days} days`;
        article.appendChild(p2);

        let p3 = create.p();
        p3.textContent = `For ${people} people`;
        article.appendChild(p3);

        li.appendChild(article);

        let editButton = create.button();
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editTicket);
        li.appendChild(editButton);

        let continueButton = create.button();
        continueButton.classList.add('continue-btn');
        continueButton.textContent = 'Continue';
        continueButton.addEventListener('click', continueTicket);
        li.appendChild(continueButton);

        ticketInfolist.appendChild(li);

        firstNameField.value = '';
        lastNameField.value = '';
        peopleField.value = '';
        dateField.value = '';
        daysField.value = '';

        nextButton.disabled = true;

        function editTicket(event){
            nextButton.disabled = false;
            ticketInfolist.removeChild(li);


            firstNameField.value = firstName;
            lastNameField.value = lastName;
            peopleField.value = people;
            dateField.value = date;
            daysField.value = days;

        }

        function continueTicket(event){
            ticketInfolist.removeChild(li);

            li.removeChild(editButton);
            li.removeChild(continueButton);

            let confirmButton = create.button();
            confirmButton.classList.add('confirm-btn');
            confirmButton.textContent = 'Confirm';
            confirmButton.addEventListener('click', confirmTicket);
            li.appendChild(confirmButton);

            let cancelButton = create.button();
            cancelButton.classList.add('cancel-btn');
            cancelButton.textContent = 'Cancel';
            cancelButton.addEventListener('click', cancelTicket);
            li.appendChild(cancelButton);

            confirmTicketField.appendChild(li);


            function confirmTicket(event){
                bodyElement.removeChild(mainDiv);

                let h1confirm = create.h1();
                h1confirm.id = 'thank-you';
                h1confirm.textContent = 'Thank you, have a nice day!';

                bodyElement.appendChild(h1confirm);

                let backButton = create.button();
                backButton.id = 'back-btn';
                backButton.textContent = 'Back';
                backButton.addEventListener('click', reloadPage);

                bodyElement.appendChild(backButton);

                function reloadPage(event){
                    location.reload();
                }

            }

            function cancelTicket(event){
                confirmTicketField.removeChild(li);
                nextButton.disabled = false;
            }
        }
    }
   
}
