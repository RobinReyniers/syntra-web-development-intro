const ANSWER_LENGTH = 5;
const ROUNDS = 6;
const letters = document.querySelectorAll(".scoreboard-letter");
const loadingDiv = document.querySelector(".info-bar");

async function init() {
  console.log("lets get started");
  // the state for the app
  let letterCount = 0;
  let maxLetterCount = 5;
  let currentRow = 0;
  let currentGuess = "";

  // nab the word of the day
  const res = await fetch("https://words.dev-apis.com/word-of-the-day");
  const parsed = await res.json();
  const wordSplit = parsed.word.split("");
  console.log(parsed);
  console.log(wordSplit);

  // user adds a letter to the current guess
  function addLetter(letter) {
    console.log(letterCount);
    console.log(currentRow);
    if (maxLetterCount <= 5) {
      if (letterCount < 0) {
        letterCount = 0;
      }
      if (letter !== "") {
        letterCount++;
        currentGuess += letter;
        console.log(currentGuess);

        letters[currentRow * ANSWER_LENGTH + letterCount - 1].innerText =
          letter;
      }
    }
  }

  // use tries to enter a guess
  async function commit() {
    if (letterCount === ANSWER_LENGTH) {
      letterCount = 0;

      try {
        const word = await fetch("https://words.dev-apis.com/validate-word", {
          method: "POST",
          body: JSON.stringify({ word: currentGuess }),
        })
          .then((data) => {
            return data.json();
          })
          .then((data) => {
            const currentGuessArray = currentGuess.split("");
            let completed = true;

            if (!data.validWord) {
              markInvalidWord();
            } else {
              // const map = makeMap(currentGuessArray);
              // console.log(map);
              console.log(currentGuessArray);
              console.log(wordSplit);
              for (let i = 0; i < currentGuessArray.length; i++) {
                if (currentGuessArray[i] === wordSplit[i]) {
                  letters[currentRow * ANSWER_LENGTH + i].classList.add(
                    "correct"
                  );
                } else if (currentGuessArray[i - 1] === wordSplit[i]) {
                  letters[currentRow * ANSWER_LENGTH - i].classList.add(
                    "close"
                  );
                  completed = false;
                } else if (currentGuessArray[i + 1] === wordSplit[i]) {
                  letters[currentRow * ANSWER_LENGTH + i].classList.add(
                    "close"
                  );
                } else {
                  letters[currentRow * ANSWER_LENGTH + i].classList.add(
                    "wrong"
                  );
                  completed = false;
                }
              }

              if (completed) {
                alert("You Win");
              } else if (currentRow === ROUNDS) {
                alert(`you lose! The word was ${wordSplit.join("")}`);
              }
            }
          });
        currentGuess = "";
      } catch (error) {
        console.log(error);
      }
      currentRow += 1;
    } else {
      letterCount = 0;
      currentGuess = "";
      alert("Enter the first guess");
    }
  }

  // user hits backspace, if the the length of the string is 0 then do
  // nothing
  function backspace() {
    letterCount--;
    letters[currentRow * ANSWER_LENGTH + letterCount].innerText = "";
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
  }

  // let the user know that their guess wasn't a real word
  // skip this if you're not doing guess validation
  function markInvalidWord() {
    console.log("Word is invalid");
  }

  // listening for event keys and routing to the right function
  // we listen on keydown so we can catch Enter and Backspace

  document.addEventListener("keydown", function handleKeyPress(event) {
    if (event.key === "Enter") {
      commit();
    } else if (event.key === "Backspace") {
      backspace();
    } else {
      addLetter(isLetter(event.key));
    }
  });
}

// a little function to check to see if a character is alphabet letter
// this uses regex (the /[a-zA-Z]/ part) but don't worry about it
// you can learn that later and don't need it too frequently
function isLetter(letter) {
  const regex = new RegExp(/^[a-zA-Z]$/);
  if (regex.test(letter)) {
    return letter;
  } else {
    return "";
  }
}

// show the loading spinner when needed
function setLoading(isLoading) {
  if (isLoading) {
    loadingDiv.style.display("block");
  } else {
    loadingDiv.style.display("none");
  }
}

// takes an array of letters (like ['E', 'L', 'I', 'T', 'E']) and creates
// an object out of it (like {E: 2, L: 1, T: 1}) so we can use that to
// make sure we get the correct amount of letters marked close instead
// of just wrong or correct
function makeMap(array) {
  const positions = array.map((letter, i) => {});
}

init();
