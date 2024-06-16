let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);

let poemElement = document.querySelector("#poem");

function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Two hearts in tune, a perfect song,",
    autoStart: true,
    delay: 100,
    cursor: "",
  });

  //poemElement.innerHTML = "generating poem";
}
