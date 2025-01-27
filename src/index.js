let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);

let poemElement = document.querySelector("#poem");
let input = document.querySelector("#user-input");

let apiKey = "baf15f814713odta8a4baa99ed0733e5";

function displayPoem(response) {
  poemElement.innerHTML = `Generating short poem about ${input.value}`;
  let newPoem = response.data.answer;
  new Typewriter("#poem", {
    strings: newPoem,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let prompt = `Write a short sweet rhyming poem about ${input.value}`;
  let context =
    "You are a creative poet. Please provide poems in basic HTML, maximum length 160 and separate lines with <br> element. Make sure that first line of answer is first line of poem, maxium length 4 lines. Please don`t add titles.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}
