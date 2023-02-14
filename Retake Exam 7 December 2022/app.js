window.addEventListener('load', solve);

function solve() {
    let firstNameField = document.getElementById("first-name");
    let lastNameField = document.getElementById("last-name");
    let checkInDateField = document.getElementById("date-in");
    let checkOutDateField = document.getElementById("date-out");
    let numberOfPeopleField = document.getElementById("people-count");
    let reservationInfoField = document.querySelector(".info-list");
    let confirmReservationField = document.querySelector(".confirm-list");
    let verificationH1 = document.getElementById('verification');

    let nextButton = document.getElementById("next-btn");
    nextButton.addEventListener('click', createReservation);

    function createReservation(event){
        event.preventDefault();

        let firstName = firstNameField.value;
        let lastName = lastNameField.value;
        let numberOfPeople = numberOfPeopleField.value;

        let checkInDate = new Date(checkInDateField.value);
        let checkOutDate = new Date(checkOutDateField.value);
        // let checkInDate = checkInDateField.value;
        // let checkOutDate = checkOutDateField.value;

        // let days = checkOutDate.getDay() - checkInDate.getDay();

        
        if(firstName == '' 
        || lastName == '' 
        || checkInDate >= checkOutDate 
        || numberOfPeople == ''
        ){
            return;
        }else{
            let liElement = document.createElement('li');
            liElement.classList.add("reservation-content");
            
            let articleElement = document.createElement('article');
            let h3Element = document.createElement('h3');
            h3Element.textContent = `Name: ${firstName} ${lastName}`;
            articleElement.appendChild(h3Element);

            let firstP = document.createElement('p');
            // firstP.textContent = `From date: ${checkInDate.getFullYear()}-${checkInDate.getMonth() + 1}-${checkInDate.getDate()}`;
            firstP.textContent = `From date: ${checkInDate.getFullYear()}-${String(checkInDate.getMonth() + 1).length == 1 ? '0'+ (checkInDate.getMonth() + 1) : checkInDate.getMonth() + 1}-${String(checkInDate.getDate()).length == 1 ? '0' + checkInDate.getDate() : checkInDate.getDate()}`;

            articleElement.appendChild(firstP);

            let secondP = document.createElement('p');
            secondP.textContent = `From date: ${checkOutDate.getFullYear()}-${String(checkOutDate.getMonth() + 1).length == 1 ? '0'+ (checkOutDate.getMonth() + 1) : checkOutDate.getMonth() + 1}-${String(checkOutDate.getDate()).length == 1 ? '0' + checkOutDate.getDate() : checkOutDate.getDate()}`;
            articleElement.appendChild(secondP);

            let thirdP = document.createElement('p');
            thirdP.textContent = `For ${numberOfPeople} people`;
            articleElement.appendChild(thirdP);

            liElement.appendChild(articleElement);

            let editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit-btn');

            editButton.addEventListener('click', () => {
                reservationInfoField.removeChild(liElement);
                firstNameField.value = firstName;
                lastNameField.value = lastName;
                checkInDateField.value = `${checkInDate.getFullYear()}-${String(checkInDate.getMonth() + 1).length == 1 ? '0'+ (checkInDate.getMonth() + 1) : checkInDate.getMonth() + 1}-${String(checkInDate.getDate()).length == 1 ? '0' + checkInDate.getDate() : checkInDate.getDate()}`;
                checkOutDateField.value = `${checkOutDate.getFullYear()}-${String(checkOutDate.getMonth() + 1).length == 1 ? '0'+ (checkOutDate.getMonth() + 1) : checkOutDate.getMonth() + 1}-${String(checkOutDate.getDate()).length == 1 ? '0' + checkOutDate.getDate() : checkOutDate.getDate()}`;
                ;
                numberOfPeopleField.value = numberOfPeople;
                nextButton.disabled = false;

            });
            liElement.appendChild(editButton);

            let continueButton = document.createElement('button');
            continueButton.textContent = 'Continue';
            continueButton.classList.add('continue-btn');

            continueButton.addEventListener('click', () => {
                reservationInfoField.removeChild(liElement);
                editButton.remove();
                continueButton.remove();
                let confirmButton = document.createElement('button');
                confirmButton.classList.add('confirm-btn');
                confirmButton.textContent = 'Confirm';

                confirmButton.addEventListener('click', () => {
                    nextButton.disabled = false;
                    confirmReservationField.removeChild(liElement);
                    verificationH1.classList.add('reservation-confirmed');
                    verificationH1.textContent = 'Confirmed';
                })
                liElement.appendChild(confirmButton);

                let cancelButton = document.createElement('button');
                cancelButton.classList.add('cancel-btn');
                cancelButton.textContent = 'Cancel';
                cancelButton.addEventListener('click', () => {
                    nextButton.disabled = false;
                    confirmReservationField.removeChild(liElement);
                    verificationH1.classList.add('reservation-cancelled');
                    verificationH1.textContent = 'Cancelled';

                })
                liElement.appendChild(cancelButton);

                confirmReservationField.appendChild(liElement);

            });
            liElement.appendChild(continueButton);

            reservationInfoField.appendChild(liElement);

            firstNameField.value = '';
            lastNameField.value = '';
            // checkInDateField.value = `${checkInDate.getFullYear()}-${checkInDate.getMonth()}-${checkInDate.getDate()}`;
            // checkOutDateField.value = `${checkOutDate.getFullYear()}-${checkOutDate.getMonth()}-${checkOutDate.getDate()}`;
            checkInDateField.value = '';
            checkOutDateField.value = '';
            numberOfPeopleField.value = '';
            nextButton.disabled = true;
        } 
    }
}
