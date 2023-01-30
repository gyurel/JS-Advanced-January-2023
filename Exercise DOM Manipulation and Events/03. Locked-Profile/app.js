function lockedProfile() {
    let divProfiles = Array.from(document.querySelectorAll('.profile'));
    
    for (const div of divProfiles) {
        div.querySelector('button').addEventListener('click', onClick);
        // debugger
    }

    function onClick(event){
        let currentDivLockStatusUnlocked = event.target.parentElement.querySelector('input[value="unlock"]');
        // debugger
        let currentButton = event.target.parentElement.querySelector('button');
        let currentHiddenDiv = event.target.parentElement.querySelector('div');
        // debugger

        if(currentDivLockStatusUnlocked.checked && currentButton.textContent == 'Show more'){
            currentHiddenDiv.style.display = 'block';
            currentButton.textContent = 'Hide it';
        }else if(currentDivLockStatusUnlocked.checked && currentButton.textContent == 'Hide it'){
            currentHiddenDiv.style.display = '';
            currentButton.textContent = 'Show more';
        }
    }
}
