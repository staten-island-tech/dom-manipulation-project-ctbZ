const DOMSelectors = {
  button: document.getElementById("btn"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  form: document.getElementById("form"),
  display: document.getElementById("display"),
};
// prevents refresh and clear input box
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  createcard();
});
// prints the card after user submits and prints the input values
function createcard() {
  DOMSelectors.form.insertAdjacentHTML(
    "afterend",
    `
    <div class="display-card"> 
    <h2 class="title">${DOMSelectors.title.value}</h2>
    <h3 class="artist">By ${DOMSelectors.artist.value}</h3>
    <img class src="${DOMSelectors.url.value}" /><img>
    <button class="remove btn">Remove</button>
    </div>
    `
  );
  removebtn();
}
// makes the remove btn delete the printed
function removebtn() {
  let remove = document.querySelectorAll(".remove");

  remove.forEach((e) => {
    e.addEventListener("click", function (e) {
      this.parentElement.remove();
    });
  });
}