async function define_word(word) {
  let word_to_search = word.toLowerCase().trim();
  return fetch(
    `https://api.wordnik.com/v4/word.json/${word_to_search}/definitions?limit=200&partOfSpeech=noun&includeRelated=false&sourceDictionaries=wiktionary&useCanonical=false&includeTags=false&api_key=nh1cb9m4yspcmwq687www9qn7j3ix3dmppv7a0ot4mn0bwr3v`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && data[0] && data[0].text) {
        const text = data[0].text;
        return text.replace(/(<([^>]+)>)/gi, "");
      } else {
        return "Meaning not found";
      }
    })
    .catch((error) => console.error(error));
}

let array_easter = ["zakat", "salat", "shahada", "hajj", "jihad"];


let count = array_easter.length;
let points = 0;

for (let i = 0; i < count; i++) {
  let meaningEl = document.createElement("p"); // create a new element for each meaning
  let currentWord = array_easter[i]; //the word
  //display meaning of the word
  define_word(currentWord).then((definition) => {
    meaningEl.textContent = definition;
  });

  document.body.appendChild(meaningEl); //append meaning to doc

  // let resultEl = document.createElement("p"); // create a new element for each result
  let inputEl = document.createElement("input"); // create an input element
  inputEl.type = "text"; // set input type to text
  inputEl.placeholder = "Check answer"; // set placeholder text for input
  document.body.appendChild(inputEl);

  inputEl.addEventListener("change", function () {
    // add event listener to input element
    let trial = inputEl.value.trim().toLowerCase(); // get user's trial and convert to lowercase
    if (trial === currentWord) {
      meaningEl.style.color = "green"; // if correct, change text color to green
      meaningEl.textContent += ` Correct!`;
      points++;
    } else {
      meaningEl.style.color = "red"; // if wrong, change text color to red
      meaningEl.textContent += ` Wrong! The answer is ${currentWord.toUpperCase()}.`; // append correct answer to meaning text
    }

    inputEl.disabled = true; // disable input element after user submits their trial

    // check if quiz is over
    if (i === count - 1) {
      let scoreEl = document.createElement("p"); // create a new element to display score
      scoreEl.textContent = `You got ${points} out of ${count} correct.`; // set score text
      document.body.appendChild(scoreEl); // append score to doc
    }
  });
}
