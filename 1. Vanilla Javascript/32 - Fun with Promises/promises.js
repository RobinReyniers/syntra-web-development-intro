<<<<<<< HEAD
// /**
//  * What is the output of the code snippet?
//  */

// {
//   const promise = new Promise((resolve, reject) => {
//     resolve("success1");
//     reject("fail");
//     resolve("success2");
//   });

//   promise
//     .then((res) => {
//       console.log("then: ", res);
//     })
//     .catch((err) => {
//       console.log("catch: ", err);
//     });
// }

// /**
//  * What is the output of the code snippet?
//  */
// {
//   const promise = new Promise((resolve, reject) => {
//     reject("fail");
//     resolve("success2");
//   });
//   promise
//     .then((res) => {
//       console.log("then1: ", res);
//     })
//     .then((res) => {
//       console.log("then2: ", res);
//     })
//     .catch((err) => {
//       console.log("catch: ", err);
//     })
//     .then((res) => {
//       console.log("then3: ", res);
//     });
// }

// /**
//  * What is the output of this code snippet?
//  */
// {
//   Promise.resolve(1)
//     .then((res) => {
//       console.log(res);
//       return 2;
//     })
//     .catch((err) => {
//       return 3;
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .then((res) => {
//       console.log(res);
//     });
// }

// /**
//  * What is the output of this code snippet?
//  */
// {
//   Promise.reject(1)
//     .then((res) => {
//       console.log(res);
//       return 2;
//     })
//     .catch((err) => {
//       return 3;
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .then((res) => {
//       console.log(res);
//     });
// }

// /**
//  * What is the output of this code snippet?
//  */
// {
//   const promise = new Promise((resolve, reject) => {
//     resolve(1);
//   });

//   promise.then((res) => {
//     console.log("first then: ", res);
//     return 2;
//   });

//   promise.then((res) => {
//     console.log("second then: ", res);
//     return 3;
//   });

//   promise.then((res) => {
//     console.log("third then: ", res);
//   });
// }

// /**
//  * What is the output of this snippet?
//  */
// {
//   Promise.resolve()
//     .then(() => {
//       return new Error("error!!!");
//     })
//     .then((res) => {
//       console.log("then: ", res);
//     })
//     .catch((err) => {
//       console.log("catch: ", err);
//     });
// }

// /**
//  * What is the output of this snippet?
//  */
// {
//   Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
// }

// /**
//  * Promisify the following function
//  */
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));

//   document.head.append(script);
// }

// const waitForMove = (element, transform) => {
//   element.addEventListener("transitionend", () => console.log("done"), {
//     once: true,
//   });
//   element.style.transform = transform;
// };

// const ball = document.getElementById("ball");
// // await waitForMove(ball, "translate(10px)");

// /**
//  * Let's do some practice with a simple exercice. You must modify the code below based on the following rules:
//     1. The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
//     2. The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data
//  */

// // function job() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve("Hello World");
// //     });
// //   }, 2000);
// // }
// // job().then((blah) => console.log(blah));

// /**
//  * Let's do a harder exercise. In this code, your function receives a parameter data. You must modify the code below based on the following rules:

//     1. Your function must always return a promise
//     2. If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
//     3. If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
//     4. If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)
//  */

// // function job(data) {
// //   return new Promise((resolve, reject) => {
// //     if (isNaN(data)) {
// //       reject("error");
// //     } else if (data % 2 === 0) {
// //       setTimeout(() => {
// //         reject("even");
// //       }, 2000);
// //     } else {
// //       setTimeout(() => {
// //         resolve("odd");
// //       }, 1000);
// //     }
// //   });
// // }
// // job("poop")
// //   .then((v) => console.log(v))
// //   .catch((v) => console.log(v));
// /**
//  * Build a guessing game:
//  *  1. A user can enter a number
//     2. The system picks a random number from 1 to 6
//     3. If the user's number is equal to a random number, give the user 2 points
//     4. If the user's number is different than the random number by 1, give the user 1 point. Otherwise, give the user 0 points
//     5. The user can play the game as long as they want to
//  */

let userScore = 0;
const enterNumber = () => {
  return new Promise((resolve, reject) => {
    let userInput = prompt("Enter a number. (1 - 6)");
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    if (isNaN(userInput)) {
      reject(new Error("Not a number"));
    }
    if (parseInt(userInput) === randomNumber) {
      resolve("You get + 2 points");
      userScore + 2;
    }
    if (parseInt(userInput) === randomNumber + 1) {
      resolve("You get + 1 points");
      userScore++;
    }
    if (parseInt(userInput) === randomNumber - 1) {
      resolve("You get + 1 points");
      userScore++;
    }

    resolve("You get 0 points");
  });
};

const continueGame = () => {
  return new Promise((resolve) => {
    if (window.confirm("Do you want to play again?")) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

const handleGuess = () => {
  enterNumber()
    .then((v) => {
      alert(v);
    })
    .then(() => {
      alert(`You have ${userScore} points total!`);

      continueGame().then((result) => {
        if (result) {
          handleGuess();
        } else {
          alert("Thanks for playing!");
        }
      });
    })
    .catch((err) => {
      alert("error");
    });
};
=======
/**
 * Build a guessing game:
 *  1. A user can enter a number
    2. The system picks a random number from 1 to 6
    3. If the user's number is equal to a random number, give the user 2 points
    4. If the user's number is different than the random number by 1, give the user 1 point. Otherwise, give the user 0 points
    5. The user can play the game as long as they want to
 */

let userScore = 0;

const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userInput = parseInt(prompt("Enter a number (1 - 6)"));

    if (userInput > 6) {
      alert("Your number is too high.");
      return handleGuess();
    }

    const randomNumber = Math.floor(Math.random() * 6 + 1);
    if (userInput === randomNumber) {
      userScore = userScore + 2;
    }
    if (userInput + 1 === randomNumber || userInput - 1 === randomNumber) {
      userScore = userScore + 1;
    }
    resolve(userScore);
  });
};
const continueGame = () => {
  return new Promise((resolve, reject) => {
    const c = confirm(`Your score is ${userScore}. Do you want to continue?`);
    if (c) {
      resolve();
    } else {
      reject();
    }
  });
};
const handleGuess = () => {
  enterNumber()
    .then(() => continueGame())
    .then(() => handleGuess())
    .catch(() => alert("You are done."));
};

>>>>>>> d831ff21722a6ea259bad666befaf0481b9a8ca2
handleGuess();
