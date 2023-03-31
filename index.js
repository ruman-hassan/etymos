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
        return "Error: Unable to retrieve definition.";
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

let array_cuis = ["couscous", "waragi", "matoke", "sosatie", "braai"];

let meaningEl = document.body.querySelector("#meaning-el");
let wordEl = document.body.querySelector("#trial-el");
let index = 0;
let points = 0;
let currentWord;

const restartButton = document.querySelector("#restart-button");
function restart() {
  // Reset the game state here

  index = 0;
  points = 0;
  shuffleArray(array_cuis); //shuffle the questions again
  currentWord = array_cuis[index];
  define_word(currentWord).then((definition) => {
    meaningEl.textContent = definition;
  });

  //remove the previous results and score
  let existingScoreEl = document.querySelector("result-el");
  if (existingScoreEl) {
    existingScoreEl.remove(); //refuse multiple solution paragraphs to doc
  }
}

restartButton.addEventListener("click", restart());

shuffleArray(array_cuis);

define_word(array_cuis[index]).then((definition) => {
  meaningEl.textContent = definition;
  currentWord = array_cuis[index];
});

const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", submit());

function submit() {
  let userWord = wordEl.value.toLowerCase().trim(); //user input
  let resultElId = "result-el"; //soln displayed to user
  let existingResultEl = document.querySelector(`#${resultElId}`);
  if (existingResultEl) {
    existingResultEl.remove(); //refuse multiple solution paragraphs to doc
  }

  //display whether correct or wrong to user
  let resultEl = document.createElement("p");
  resultEl.id = resultElId;
  if (userWord === currentWord) {
    resultEl.textContent = "Correct!";
    points++;
  } else {
    resultEl.textContent = `Wrong. The correct answer is "${currentWord}".`;
  }
  document.body.appendChild(resultEl);
  wordEl.value = "";

  // Move to the next word in the array
  index++;

  if (index >= array_cuis.length) {
    //end of game
    let scoreEl = document.createElement("p");
    scoreEl.textContent = "Score: " + points + "/" + array_cuis.length;
    scoreEl.id = "score-el"; // NEW LINE
    document.body.appendChild(scoreEl);
  }
  //game still continuing
  currentWord = array_cuis[index];
  define_word(currentWord).then((definition) => {
    meaningEl.textContent = definition;
  });
}

//check if name can be played in scrabble
let nameButton = document.querySelector("#name-button");
nameButton.addEventListener("click", defineName());

async function defineName() {
  let meaningElId = "meaning-el"; //soln displayed to user
  let existingMeaningEl = document.querySelector(`#${meaningElId}`);
  if (existingMeaningEl) {
    existingMeaningEl.remove(); //refuse multiple solution paragraphs to doc
  }

  //display whether correct or wrong to user
  let meaningEl = document.createElement("p");
  meaningEl.id = meaningElId;

  let nameInput = document.querySelector("#name-input");
  let nameMeaningDiv = document.querySelector("#name-meaning");

  // Retrieve the meaning of the name using a different API or method
  let meaning = await define_word(nameInput.value);

  if (meaning === "Error: Unable to retrieve definition.") {
    meaningEl.textContent = `Meaning not found`;
  } else {
    meaningEl.textContent = `Your name means: ${meaning}`;
  }
  // meaningEl.textContent = `Your name means: ${meaning}`;
  nameMeaningDiv.appendChild(meaningEl);
}
