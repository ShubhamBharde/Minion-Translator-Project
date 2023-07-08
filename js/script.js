// 1st step : taking Reference
const textInput = document.querySelector('#text-input');
const btnTranslate = document.querySelector('#btn-translate');
const output = document.querySelector('#output');
const serverUrl = 'https://api.funtranslations.com/translate/minion.json';

// 4th step : make function of fetching i/p 
function fetchTranslatedText(text) {
    return (`${serverUrl}?text=${text}`);
}

// 5th step : make function of errorHandler
function errorHandler(err) {
    console.log(`error is ${err}`);
    setTimeout(() => {
        alert('please try again! something went wrong');
    }, 1000);
}

// 3rd step : make function of clickHandler
const clickHandler = () => {
    let inputText = textInput.value; // I/P
    fetch(fetchTranslatedText(inputText)) // Processing 
        .then(res => res.json())
        .then(res => {
            // console.log(res.contents.translated)
            output.innerText = res.contents.translated; // O/P
        })
        .catch(errorHandler) //Error handling  

    // html logic : show output box when click it btn.
    output.style.display = 'block';
}

// 2nd step : listening event by addEventListener()
btnTranslate.addEventListener('click', clickHandler);



