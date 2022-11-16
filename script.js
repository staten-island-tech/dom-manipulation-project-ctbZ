// const DOMSelectors = {
//     button:document.getElementById("btn"),
//     text: documument.querySelector("#text"),
// };
// console.log()
// const button = document.getElementById("btn")
// const text = document.querySelector("#text")

const DOMSelectors = {
    button: document.getElementById("btn"),
    form: document.getElementById("form"),
};

console.log(DOMSelectors.button);
DOMSelectors.form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    output();
    clearInput();
    // e for event
});

