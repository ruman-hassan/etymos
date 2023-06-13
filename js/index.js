// this function isnt working for lowercase input

function sentenceCase(str) {
  // Convert the string to lowercase
  let lowerCaseStr = str.toLowerCase().trim();

  // Capitalize the first letter of the string
  let result = lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);

  // Find periods followed by a space and capitalize the next letter
  result = result.replace(/\. +./g, function (match) {
    return match.toUpperCase();
  });

  return result;
}

async function define_word(word) {
  let word_to_search = word.toLowerCase().trim();
  // let word_to_search = sentenceCase( word)
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

let nameInput = document.querySelector("#name-input");
let nameButton = document.querySelector("#name-button");

nameButton.addEventListener("click", async function () {
  let meaning = await define_word(nameInput.value);
  console.log(meaning);

  let meaningDiv = document.querySelector("#name-meaning");
  meaningDiv.textContent = `Meaning: ${meaning}`;

  nameInput.value = "";
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}



// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;

// function showSlide() {
//   slides.forEach((slide) => {
//     slide.classList.remove('active');
//   });

//   slides[currentSlide].classList.add('active');
//   currentSlide = (currentSlide + 1) % slides.length;
// }

// setInterval(showSlide, 1000);

