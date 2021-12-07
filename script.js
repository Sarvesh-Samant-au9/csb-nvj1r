const URL = "https://api.funtranslations.com/translate/yoda.json";
const buttonTranslate = document.querySelector("#button");
const txtInput = document.querySelector("#text-input");
const outputDiv = document.querySelector("#output");

const returnFetchFunction = (e) => `${URL}?text=${e}`;

buttonTranslate.addEventListener("click", function clickMe() {
  let inputText = txtInput.value.trim();
  // console.log(inputText)
  fetch(returnFetchFunction(inputText))
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      if (data.error) {
        alert(`${data.error.code}, "Too many Requests Try again Later"`);
        outputDiv.textContent = data.error.message;
        return;
      }
      outputDiv.textContent = data.contents.translated;
    })
    .catch((e) => console.log(e));
});
