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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let array_curr = ["KULAK", "ubuntu", "DESYATINa", "BOURGEOIS", "laborite"];

let count = array_curr.length;
let points = 0;

//SHUFFLE THE ARRAY HERE
shuffleArray(array_curr);
for (let i = 0; i < count; i++) {
  let meaningEl = document.createElement("p"); // create a new element for each meaning
  let currentWord = array_curr[i].toUpperCase(); //the word
  //display meaning of the word
  define_word(currentWord).then((definition) => {
    meaningEl.textContent = definition;
  });

  document.body.appendChild(meaningEl); //append meaning to doc

  // CREATE CHOICES
  // create select element
  const selectEl = document.createElement("select");

  // create option elements and add them to the select element

  const option = document.createElement("option");
  option.text = "";
  selectEl.add(option);

  array_curr.forEach((element) => {
    const option = document.createElement("option");
    option.text = element.toUpperCase();
    selectEl.add(option);
  });

  // append select element to document
  document.body.appendChild(selectEl);

  selectEl.addEventListener("change", function () {
    // add event listener to input element
    let selectedWord = selectEl.options[selectEl.selectedIndex].value;
    // let trial = inputEl.value.trim().toLowerCase(); // get user's trial and convert to lowercase

    if (selectedWord === currentWord) {
      meaningEl.style.color = "green"; // if correct, change text color to green
      meaningEl.textContent += ` Correct!`;
      points++;
    } else {
      meaningEl.style.color = "red"; // if wrong, change text color to red
      meaningEl.textContent += ` Wrong! The answer is ${currentWord.toUpperCase()}.`; // append correct answer to meaning text
    }

    selectEl.disabled = true; // disable input element after user submits their trial

    // check if quiz is over
    if (i === count - 1) {
      let scoreEl = document.createElement("p"); // create a new element to display score
      scoreEl.textContent = `You got ${points} out of ${count} correct.`; // set score text
      document.body.appendChild(scoreEl); // append score to doc
    }
  });
}
