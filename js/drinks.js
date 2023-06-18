const words = [
  "waragi",
  "spritzer",
  "negroni",
  "mahewu",
  "daiquiri",
  "bodega",
  "vermouth",
  "claret",
  "merlot",
  "usque",
];

//shuffle array to reduce predictability
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 'cassine', bauera timbo mycetes asarum marri penthia panax leasow taramea
async function define_word(word_to_search) {
  let trimmed_word = word_to_search.toLowerCase().trim();
  return fetch(
    `https://api.wordnik.com/v4/word.json/${trimmed_word}/definitions?limit=200&partOfSpeech=noun&includeRelated=false&sourceDictionaries=wiktionary&useCanonical=false&includeTags=false&api_key=nh1cb9m4yspcmwq687www9qn7j3ix3dmppv7a0ot4mn0bwr3v`
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

const wordText = document.querySelector(".word");
hintText = document.querySelector(".hint span");
inputField = document.querySelector("input");
refreshBtn = document.querySelector(".refresh-word");
checkBtn = document.querySelector(".check-word");
timeText = document.querySelector(".time b");
let correctWord,
  timer,
  current_index = -1;
points = words.length;

const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.textContent = maxTime);
    }
    clearInterval(timer);
    alert(`Time up!\n${correctWord.toUpperCase()} is the answer`);
    points--;
    initGame();
  }, 1000);
};

//shuffle the array here
shuffleArray(words);

const initGame = () => {
  current_index++;
  if (current_index === words.length)
    alert(
      `You finished! Cheers to you🍻\nYou scored ${points} out of ${words.length}`
    );
  // alert(`finished`);

  initTimer(60);
  // let randomObj = words[Math.floor(Math.random() * words.length)]; //a word
  let randomObj = words[current_index]; //current word in array

  let wordArray = randomObj.split(""); //individual letters in the word

  //shuffle the letters to make it hard for player to guess
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.textContent = wordArray.join(""); // join the shuffled letters into a word

  //display meaning of the word
  define_word(randomObj).then((definition) => {
    hintText.textContent = definition;
  });

  correctWord = randomObj.toLowerCase(); //to check against user input
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
  //   console.log(wordArray, randomObj.word);
};

initGame();

const checkWord = () => {
  let userWord = inputField.value.toLowerCase(); // get user's input and convert to lowercase

  if (!userWord) return alert("Please enter a word to check"); //when there's no user trial
  if (userWord !== correctWord)
    return alert("not correct"); //if user input is not correct
  else alert("correct"); //if user input is correct}

  // {meaningEl.style.color = "green"; // if correct, change text color to green
  // meaningEl.textContent += ` Correct!`;
  // points++;}
  //   else console.log(userWord);

  initGame();
};

//allow the player to shuffle the rack at their leisure
const shuffleRack = (wordArray) => {
  //shuffle the letters to make it hard for player to guess
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.textContent = wordArray.join(""); // join the shuffled letters into a word
};

refreshBtn.addEventListener("click", () => {
  shuffleRack([...wordText.textContent]); // Pass the current rack as an array to the shuffleRack function
});

checkBtn.addEventListener("click", checkWord); //call checkWord when checkBtn is clicked
