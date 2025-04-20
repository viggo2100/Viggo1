const inputElement = document.getElementById('userInput');
        const buttonElement = document.getElementById('submitButton');


        function handleButtonClick() {
            const userInputValue = inputElement.value;
            alert('Terimakasih, ini hanya hiasan jadi tidak terkirim sungguhan dan hanya notifikasi.')
            }


        buttonElement.addEventListener('click', handleButtonClick);