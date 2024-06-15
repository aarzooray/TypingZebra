let wordsBox = document.querySelector("#wordsBox");
let typingBox = document.querySelector("#typingBox");

let words = [
  "A ",
  "Beautiful ",
  "woman ",
  "is ",
  "dancing ",
  "on ",
  "the ",
  "floor ",
  "Articulation ",
  "of ",
  "words ",
  "are ",
  "extremely ",
  "vital ",
  "in ",
  "communication ",
  "You ",
  "can ",
  "be ",
  "extraordinary ",
  "By ",
  "doing ",
  "tons ",
  "of ",
  "practice ",
  "India ",
  "is ",
  "largest ",
  "democratic ",
  "country ",
  "in ",
  "the ",
  "world ",
  "umbrella ",
  "violin ",
  "whale ",
  "xylophone ",
  "yacht ",
  "zebra ",
  "happy ",
  "jump ",
  "kick ",
  "laugh ",
  "move ",
  "nap ",
  "open ",
  "play ",
  "quiet ",
  "run ",
  "sing ",
  "talk ",
  "understand ",
  "visit ",
  "write ",
  "yell ",
  "zoom ",
  "quickly ",
  "slowly ",
  "bright ",
  "dark ",
  "fast ",
  "giant ",
  "small ",
  "technology ",
  "engineering ",
  "innovation ",
  "software ",
  "hardware ",
  "robotics ",
  "automation ",
  "coding ",
  "algorithm ",
  "networking ",
  "electronics ",
  "mechanics ",
  "cybersecurity ",
  "programming ",
  "artificial ",
  "intelligence ",
  "data science ",
  "machine ",
  "learning ",
  "biotechnology ",
  "nanotechnology ",
  "telecommunications ",
  "3D printing ",
  "virtual ",
  "rehab ",
  "augmented ",
  "reality ",
  "cloud ",
  "computing ",
  "internet ",
   "of ", 
   "things ",
  "sustainability ",
  "energy ",
  "efficiency ",
  "biometrics ",
  "autonomous ",
  "vehicle ",
  "drones ",
  "genetic ",
  "engineering ",
  "blockchain ",
  "cryptocurrency ",
  "bioinformatics ",
  "computer ",
  "vision ",
  "quantum ",
  "computing ",
  "wearable ",
  " technology ",
  "smart ",
  "cities ",
  "Renewable ",
  "energy ",
  "big ",
  "data ",
];

let generatedSentenceWordsLocator;
let generatedSentenceWordsLocatorNumber;

function sentenceGenerator() {
  generatedSentenceWordsLocator = [];
  generatedSentenceWordsLocatorNumber = [];
  let randomNumber;
  for (let i = 0; i < words.length; i++) {
    randomNumber = parseInt(Math.random() * 100);
    let word = words[randomNumber];
    let span = document.createElement("p");
    span.setAttribute("id", `Id${randomNumber}`);
    span.innerHTML = words[randomNumber];
    wordsBox.append(span);
    generatedSentenceWordsLocator.push("Id" + randomNumber);
    generatedSentenceWordsLocatorNumber.push(randomNumber);
  }
}

sentenceGenerator();
let wrongWord = 0;
let correctWord = 0;
function highlight() {
  let i = 0;
  let k = 0;
  let temp = "";

  function updateTemp() {
    if (i < generatedSentenceWordsLocator.length) {
      temp = document.querySelector(`#${generatedSentenceWordsLocator[i]}`);
      temp.classList.add("active");

      if (k == 6) {
        wordsBox.scrollBy({ left: 500, behavior: "smooth" });
        k = 0;
      }
    }
  }

  updateTemp(); // Initialize temp with the initial value of i

  wrongWord = 0;
  let m = 0;
  let correctChar = 0;
  let wrongChar = 0;
  typingBox.addEventListener("input", function () {
    console.log(typingBox.value, words[generatedSentenceWordsLocatorNumber[i]]);

    if (
      typingBox.value.length ==
      words[generatedSentenceWordsLocatorNumber[i]].length
    ) {
      console.log("Hi Boy1");

      if (typingBox.value == words[generatedSentenceWordsLocatorNumber[i]]) {
        correctWord++;
        temp.style.color = "green";
        temp.classList.remove("active");
        i++;
        k++;
        updateTemp(); // Update temp after incrementing i
        typingBox.value = "";
      } else {
        wrongWord++;
        temp.style.color = "red";
        temp.classList.remove("active");
        i++;
        k++;
        updateTemp(); // Update temp after incrementing i
        typingBox.value = "";
      }
      console.log(wrongWord);
    } 
  });
}
highlight();

function resultTamJham() {
  let wpm = document.querySelector("#wpm");
  wpm.innerHTML = `${correctWord} ` + "WPM";

  let correctWordCont = document.querySelector("#correctWord");
  correctWordCont.innerHTML = "Correct Word: " + `${correctWord} `;

  let accuracyCont = document.querySelector("#accuracy");

  let wrongWordCont = document.querySelector("#wrongWord");
  wrongWordCont.innerHTML = "Wrong Word: " + `${wrongWord} `;
}

// timer

function timerTamJham() {
  typingBox.removeAttribute("disabled", "true");
  typingBox.addEventListener("keypress", timerFun);

  //   alert("Timer Tam Jham");
  function timerFun() {
    typingBox.removeEventListener("keypress", timerFun);
    let count = 60;

    let iTimer = document.querySelector("#iTimer");
    iTimer.remove();
    let timer = document.querySelector("#timer");

    let seconds = document.createElement("div");

    let timerInterval = setInterval(function () {
      if (count > 0) {
        // typingBox.removeAttribute("disabled", "true");
        count--;
      }
      seconds.innerHTML = count + ` ${'"'}`;
      if (count == 0) {
        typingBox.setAttribute("disabled", "true");
        timer.innerHTML = `<i class="ri-timer-line" id="iTimer"></i>`;
        clearInterval(timerInterval);
        // count = 60;
        let resCont = document.querySelector(".resCont");
        console.log(resCont);
        resultTamJham();
        resCont.classList.add("resContVisibility");
      }
    }, 1000);

    seconds.setAttribute("id", "seconds");

    timer.append(seconds);
  }
}

timerTamJham();

//reseting the sentence
let reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
  wordsBox.innerHTML = "";
  wordsBox.scrollBy({ left: 0, behavior: "smooth" });
  typingBox.value = "";
  generatedSentenceWordsLocator = [];
  // typingBox.removeAttribute("disabled","true");
  sentenceGenerator();
  highlight();
  timerTamJham();
});
