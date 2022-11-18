const DOMSelectors = {
    button: document.getElementById("btn"),
    title: document.getElementById("title"),
    text: document.getElementById("text"),
    form: document.getElementById("form"),
    url: document.getElementById("form"),
    display: document.getElementById("display"),
};
function createcard() {
    DOMSelectors.form.insertAdjacentHTML(
        "beforeend",
        `
        
        `
    )
}

function clearInput() {
    DOMSelectors.title.value = "";
    DOMSelectors.text.value = "";
    DOMSelectors.url.value = "";
  } 
//   blank inside "" to empty the input box
