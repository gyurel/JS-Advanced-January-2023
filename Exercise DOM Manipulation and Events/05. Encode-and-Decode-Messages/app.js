function encodeAndDecodeMessages() {
    document.querySelectorAll('button')[0].addEventListener('click', encodeText);
    document.querySelectorAll('button')[1].addEventListener('click', decodeText);

    function encodeText(event){
        let currentText = document.querySelectorAll('textarea')[0].value;

        let encodedText = ''

        for (let index = 0; index < currentText.length; index++) {
            const currentChar = currentText[index];
            const charCode = currentChar.charCodeAt(0);
            const newChar = String.fromCharCode(charCode + 1);

            encodedText += newChar; 
        }

        document.querySelectorAll('textarea')[1].value = encodedText;
        document.querySelectorAll('textarea')[0].value = '';

    }

    function decodeText(event){
        let currentText = document.querySelectorAll('textarea')[1].value;

        let decodedText = ''

        for (let index = 0; index < currentText.length; index++) {
            const currentChar = currentText[index];
            const charCode = currentChar.charCodeAt(0);
            const newChar = String.fromCharCode(charCode - 1);

            decodedText += newChar; 
        }

        document.querySelectorAll('textarea')[1].value = decodedText;
    }
}