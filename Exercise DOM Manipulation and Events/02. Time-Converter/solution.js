function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll('input[type="button"]'));
    
    for (const button of buttons) {
        button.addEventListener('click', onClick);
    }

    function onClick(event){
        debugger
        let convertToSeconds = {
            'daysBtn': (value) => value * 60 * 60 * 24,
            'hoursBtn': (value) => value * 60 * 60,
            'minutesBtn': (value) => value * 60,
        }

        let convertToOthers = {
            'daysBtn': (value) => value / 60 / 60 / 24,
            'hoursBtn': (value) => value / 60 / 60,
            'minutesBtn': (value) => value / 60,
        }

        let inputType = event.target.id;
        let inputValue = Number(event.target.parentElement.querySelector('input[type="text"]').value);

        let valueInSeconds = 0;

        if(inputType != 'secondsBtn'){
            valueInSeconds = convertToSeconds[inputType](inputValue);
        }else{
            valueInSeconds = Number(event.target.parentElement.querySelector('input[type="text"]').value);
        }

        let valueInDays = convertToOthers['daysBtn'](valueInSeconds);
        let valueInHours = convertToOthers['hoursBtn'](valueInSeconds);
        let valueInMinutes = convertToOthers['minutesBtn'](valueInSeconds);

        document.getElementById('days').value = valueInDays
        document.getElementById('hours').value = valueInHours
        document.getElementById('minutes').value = valueInMinutes
        document.getElementById('seconds').value = valueInSeconds
    }
}
