let wordsBox = document.querySelector("#wordsBox");
let typingBox = document.querySelector("#typingBox");

// words to be filled in typing Box
let words = [
  [
    "Off ",
    "Personal ",
    "home ",
    "work ",
    "school ",
    "family ",
    "friend ",
    "food ",
    "water ",
    "coffee ",
    "tea ",
    "breakfast ",
    "lunch ",
    "dinner ",
    "phone ",
    "computer ",
    "internet ",
    "email ",
    "car ",
    "bus ",
    "train ",
    "walk ",
    "run ",
    "exercise ",
    "book ",
    "newspaper ",
    "television ",
    "movie ",
    "music ",
    "song ",
    "game ",
    "play ",
    "study ",
    "read ",
    "write ",
    "note ",
    "paper ",
    "pen ",
    "pencil ",
    "desk ",
    "chair ",
    "bed ",
    "pillow ",
    "blanket ",
    "shower ",
    "bath ",
    "soap ",
    "shampoo ",
    "toothbrush ",
    "toothpaste ",
    "towel ",
    "clothes ",
    "shoes ",
    "socks ",
    "jacket ",
    "hat ",
    "gloves ",
    "keys ",
    "wallet ",
    "money ",
    "credit ",
    "card ",
    "shopping ",
    "store ",
    "market ",
    "restaurant ",
    "meal ",
    "cook ",
    "clean ",
    "wash ",
    "dishes ",
    "laundry ",
    "vacuum ",
    "dust ",
    "sweep ",
    "mop ",
    "garden ",
    "plant ",
    "flower ",
    "tree ",
    "grass ",
    "park ",
    "street ",
    "road ",
    "sidewalk ",
    "building ",
    "office ",
    "job ",
    "meeting ",
    "appointment ",
    "doctor ",
    "medicine ",
    "hospital ",
    "health ",
    "fitness ",
    "sleep ",
    "dream ",
    "alarm ",
    "wake ",
    "break ",
    "holiday ",
    "weekend ",
  ],
  [
    "alike ",
    "astronaut ",
    "accomplish ",
    "can ",
    "activity ",
    "affection ",
    "would ",
    "agreement ",
    "ambitious ",
    "announcement ",
    "anticipate ",
    "appointment ",
    "architecture ",
    "assessment ",
    "must ",
    "assistance ",
    "atmosphere ",
    "attention ",
    "balance ",
    "bicycle ",
    "briefcase ",
    "celebration ",
    "might ",
    "challenge ",
    "collaborate ",
    "should ",
    "commute ",
    "community ",
    "complicated ",
    "comprehend ",
    "could ",
    "concentration ",
    "conference ",
    "connection ",
    "construction ",
    "convenience ",
    "conversation ",
    "creativity ",
    "curiosity ",
    "decision ",
    "did ",
    "dedication ",
    "delicious ",
    "discussion ",
    "does ",
    "education ",
    "efficient ",
    "electricity ",
    "encourage ",
    "environment ",
    "equipment ",
    "essential ",
    "experience ",
    "fascinating ",
    "will ",
    "financial ",
    "frequency ",
    "frustration ",
    "generosity ",
    "gratitude ",
    "guidance ",
    "handwriting ",
    "happiness ",
    "healthy ",
    "hospitality ",
    "imagination ",
    "improvement ",
    "independent ",
    "influence ",
    "inspiration ",
    "intelligent ",
    "interview ",
    "investment ",
    "knowledge ",
    "landscape ",
    "lifestyle ",
    "management ",
    "material ",
    "meditation ",
    "motivation ",
    "nutrition ",
    "opportunity ",
    "organization ",
    "participate ",
    "perception ",
    "performance ",
    "permission ",
    "preparation ",
    "presentation ",
    "priority ",
    "productive ",
    "professional ",
    "project ",
    "recognition ",
    "recycling ",
    "reflection ",
    "relationship ",
    "relaxation ",
    "reliable ",
    "responsibility ",
    "routine ",
    "schedule ",
    "sensitive ",
    "significant ",
    "strategy ",
    "successful ",
    "technology ",
    "transportation ",
    "understanding ",
    "vegetarian ",
    "volunteer ",
  ],
  [
    "Sincere ",
    "Resume ",
    "algorithm ",
    "bacteria ",
    "capacity ",
    "deduction ",
    "engineering ",
    "fluid ",
    "gravity ",
    "hypothesis ",
    "implementation ",
    "junction ",
    "kinetic ",
    "laboratory ",
    "mechanism ",
    "network ",
    "optimization ",
    "parameter ",
    "quantum ",
    "resistance ",
    "simulation ",
    "turbine ",
    "variable ",
    "wavelength ",
    "xenon ",
    "yield ",
    "zoology ",
    "accomplish ",
    "balance ",
    "calculate ",
    "dedication ",
    "efficient ",
    "frequency ",
    "generate ",
    "hydration ",
    "innovation ",
    "junction ",
    "knowledge ",
    "lifestyle ",
    "management ",
    "nutrition ",
    "optimization ",
    "project ",
    "quality ",
    "reliable ",
    "schedule ",
    "technology ",
    "understanding ",
    "variable ",
    "waveform ",
    "youth ",
    "zebra ",
    "anticipate ",
    "bicycle ",
    "celebration ",
    "discussion ",
    "education ",
    "frequency ",
    "generate ",
    "hypothesis ",
    "intelligent ",
    "junction ",
    "knowledge ",
    "lifestyle ",
    "mechanism ",
    "nutrition ",
    "optimization ",
    "perspective ",
    "quality ",
    "resistance ",
    "strategy ",
    "technology ",
    "understanding ",
    "variable ",
    "waveform ",
    "yield ",
    "zoology ",
    "accomplish ",
    "bacteria ",
    "capacity ",
    "discussion ",
    "education ",
    "frequency ",
    "generate ",
    "hydration ",
    "innovation ",
    "junction ",
    "knowledge ",
    "lifestyle ",
    "management ",
    "nutrition ",
    "optimization ",
    "project ",
    "quality ",
    "reliable ",
    "strategy ",
    "technology ",
    "understanding ",
    "variable ",
    "waveform ",
    "yield ",
    "zoology ",
    "xenon ",
    "yield ",
    "accomplish ",
    "bacteria ",
    "capacity ",
    "dedication ",
    "engineering ",
    "fluid ",
    "gravity ",
    "hypothesis ",
    "implementation ",
    "junction ",
    "kinetic ",
    "laboratory ",
    "mechanism ",
    "network ",
    "optimization ",
    "parameter ",
    "quantum ",
    "resistance ",
    "simulation ",
    "turbine ",
    "variable ",
    "wavelength ",
    "xenon ",
    "yield ",
    "zoology ",
    "accomplish ",
    "balance ",
    "calculate ",
    "dedication ",
    "efficient ",
    "frequency ",
    "generate ",
    "hydration ",
    "innovation ",
    "junction ",
    "knowledge ",
    "lifestyle ",
    "management ",
    "nutrition ",
    "optimization ",
    "project ",
    "quality ",
    "reliable ",
    "schedule ",
    "technology ",
    "understanding ",
    "variable ",
    "waveform ",
    "yield ",
    "zebra ",
  ],
];

//_______________ toughness Level__________________________
let levels = document.querySelector("#levels");
let difficultyLevel = document.querySelector("#difficultyLevel");
let difficultyLevelArrow = document.querySelector("#arrow");
let difficultyLevelText = document.querySelector("#difficultyLevelText");
let i = 0;

// operations to perform on Clicking on **Arrow**
difficultyLevel.addEventListener("click", function () {
  if (i == 0) {
    difficultyLevelArrow.style.transform = "rotate(90deg)";
    difficultyLevelArrow.style.color = "green";
    levels.style.visibility = "visible";
    i = 1;
  } else {
    difficultyLevelArrow.style.transform = "rotate(0deg)";
    difficultyLevelArrow.style.color = "black";
    levels.style.visibility = "hidden";
    i = 0;
  }
});


let levelItems = document.querySelectorAll(".levelItem");
let touchNum = 0;
for (let a = 0; a < 3; a++) {
  levelItems[a].addEventListener("click", function () {
    touchNum = levelItems[a].getAttribute("id");
    difficultyLevelText.innerHTML = levelItems[a].innerHTML;

    sentenceGenerator();
    highlight();
  });
}





// *********** generates different sets of sentences **************************
let generatedSentenceWordsLocator; //with id
let generatedSentenceWordsLocatorNumber;
function sentenceGenerator() {
  generatedSentenceWordsLocator = [];
  generatedSentenceWordsLocatorNumber = [];
  let randomNumber = 0;

  wordsBox.innerHTML = "";

  for (let i = 0; i < words[touchNum].length; i++) {
    randomNumber = parseInt(Math.random() * 100);
    let span = document.createElement("p");
    span.setAttribute("id", `Id${randomNumber}`);
    span.innerHTML = words[touchNum][randomNumber];
    wordsBox.append(span);

    generatedSentenceWordsLocator.push("Id" + randomNumber);
    // updatetempWordSelection()
    generatedSentenceWordsLocatorNumber.push(randomNumber);
  }
  console.log(generatedSentenceWordsLocatorNumber) //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
}
sentenceGenerator();




// ******** variables to be used in RESULT SHOWN UP*************
// ---------------------------------------------------------------------
let no_Of_WrongWords = 0;
let no_Of_Correct_Words = 0;
let no_Of_Typed_Words = 0;
let tempWordSelection = null;

function highlight_And_Correctness_Check() {
  let i = 0; // i is for address in id book of words collection in word box
  let tempWordSelection = "";
  let x = 0;

  function updatetempWordSelection() {
    console.log(tempWordSelection)
    tempWordSelection = document.querySelector(`#${generatedSentenceWordsLocator[i]}`);
    tempWordSelection.classList.add("active");
    console.log(tempWordSelection)
  }
  updatetempWordSelection();

  no_Of_WrongWords = 0;
  no_Of_Correct_Words = 0;
  no_Of_Typed_Words = 0;
  let m = 0;
  let correctChar = 0;
  let charNum = 0;

  let wrongChar = 0;
  let charCount = 0;
  let val = 0;
  let typedVal = 0;

  console.log(generatedSentenceWordsLocator)// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  let goneInSpaceTerminate = 0;

  //  For ******** Space ********* Terminate *************
  typingBox.addEventListener("keypress", function (event) {
    if (typedVal < (words[touchNum][generatedSentenceWordsLocatorNumber[i]].length - 1)) {
      // console.log("Typed Value" + typedVal)


      if (event.key == ' ') {
        no_Of_Typed_Words++;
        no_Of_WrongWords++;
        charCount = 0;
        tempWordSelection.style.color = "red";
        tempWordSelection.classList.remove("active");
        let span2 = document.querySelector(`#${generatedSentenceWordsLocator[i]}`);
        span2.removeAttribute("id");
        i++;
        goneInSpaceTerminate++;
        typingBox.value = null;
        // typingBox.value = typingBox.value.replace(/\s/g, '');
        updatetempWordSelection(); // Update tempWordSelection after incrementing i

      }
    }
  });


  // For ************ General INPUT******************
  typingBox.addEventListener("input", function () {

    if (goneInSpaceTerminate > 0) {

      typingBox.value = typingBox.value.replace(/\s/g, '');
    }
    goneInSpaceTerminate = 0;
    typedVal = typingBox.value.length;




    if (
      typingBox.value.length ==
      words[touchNum][generatedSentenceWordsLocatorNumber[i]].length
    ) {
      no_Of_Typed_Words++;
      // alert(no_Of_Typed_Words)
      tempWordSelection = document.querySelector(`#${generatedSentenceWordsLocator[i]}`)

      // ****** TO REMOVE UNUSUAL BEHAVIOUR IN Repetition CASE******
      let span2 = document.querySelector(`#${generatedSentenceWordsLocator[i]}`);
      span2.removeAttribute("id");

      // console.log("Hi Boy1");
      console.log(tempWordSelection)

      //  **** if TYPED WORD Became CORRECT ****
      if (typingBox.value == words[touchNum][generatedSentenceWordsLocatorNumber[i]]) {
        console.log(words[touchNum][generatedSentenceWordsLocatorNumber[i]])
        no_Of_Correct_Words++;
        charCount = 0;
        tempWordSelection.style.color = "green";
        tempWordSelection.classList.remove("active");
        i++;
        updatetempWordSelection(); // Update tempWordSelection after incrementing i
        typingBox.value = "";
      }
      else {
        no_Of_WrongWords++;
        charCount = 0;
        tempWordSelection.style.color = "red";
        tempWordSelection.classList.remove("active");
        i++;
        updatetempWordSelection(); // Update tempWordSelection after incrementing i
        // no_Of_Typed_Words++;
        typingBox.value = "";
      }
    }


    // *** counting Characters for SCROLL the WORDSBOX *****
    if (words[touchNum][generatedSentenceWordsLocatorNumber[i]].charAt(charCount)) {
      // console.log( words[touchNum][generatedSentenceWordsLocatorNumber[i]].charAt(charCount));

      charCount++;
      charNum++;
      // console.log(charNum);
      var charLimiter = 89;
      if (charNum == charLimiter) {
        wordsBox.scrollBy({ left: 785, behavior: "smooth" });
        charNum = 0;
        charLimiter = charLimiter - 2;
      }
    }
  });
}
highlight_And_Correctness_Check();


// ********* Logic for Result Shown Up**************

function resultTamJham() {
  let wpm = document.querySelector("#wpm");
  wpm.innerHTML = `${no_Of_Correct_Words} ` + "WPM";

  let correctWords = document.querySelector("#correctWord");
  correctWords.innerHTML = `<p class="resultCont">Correct Words <p class="resultData resultDataCorrectWord"> ${no_Of_Correct_Words}</p></p>`;


  let accuracyCont = document.querySelector("#accuracy");
  accuracyCont.innerHTML = `<p class="resultCont">Accuracy <p class="resultData"> ${(
    (no_Of_Correct_Words / no_Of_Typed_Words) *
    100
  ).toFixed(2)}%</p></p>`;

  let wrongWords = document.querySelector("#wrongWord");
  wrongWords.innerHTML = `<p class="resultCont">Wrong Words <p class="resultData resultDataWrongWord"> ${no_Of_WrongWords}</p></p>`;
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
      if (count >= 10) {

        seconds.innerHTML = `00:` + count;
      }
      else {
        seconds.innerHTML = `00:0` + count;
      }

      if (count == 0) {
        typingBox.setAttribute("disabled", "true");
        timer.innerHTML = ` <span id="iTimer">1:00</span>`;
        clearInterval(timerInterval);
        // count = 60;
        let resCont = document.querySelector(".resCont");
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
let resultContainer = document.querySelector("#resultContainer");
reset.addEventListener("click", function () {
  wordsBox.innerHTML = "";
  wordsBox.scrollBy({ left: 0, behavior: "smooth" });
  typingBox.value = "";
  resultContainer.style.visibility = "hidden";
  generatedSentenceWordsLocatorNumber = [];
  typingBox.removeAttribute("disabled", "true");
  // typingBox.removeAttribute("disabled","true");
  generatedSentenceWordsLocator = [];
  sentenceGenerator();
  i = 0;
  tempWordSelection = "";
  highlight_And_Correctness_Check();
  timerTamJham();
});

// Login Container Code


let loginBtn = document.querySelector("#login");
let main = document.querySelector("#main")
let loginContainer = document.querySelector("#loginContainer");
let loginContainerInput = document.querySelectorAll(".loginContainerInputs");

var contWar = 0;
var janeman = 0;

loginBtn.addEventListener("click", function () {
  if (contWar == 0) {
    loginContainer.style.visibility = "visible";
    loginContainer.classList.toggle("animate")
    main.style.filter = "blur(0.8px)"
    contWar = 1;

    // alert("hi")
  }
  else {
    for (let i = 0; i < 4; i++) {

      loginContainerInput[i].value = ""
    }
    loginContainer.style.visibility = "hidden";
    main.style.filter = "none"
    contWar = 0;
  }
})

document.addEventListener("click",(event)=>{
  if((!loginContainer.contains(event.target)) && (loginContainer.style.visibility=="visible") && event.target!=loginBtn){
   loginContainer.style.visibility = "hidden"
   for (let i = 0; i < 4; i++) {

    loginContainerInput[i].value = ""
  }
  loginContainer.style.visibility = "hidden";
  main.style.filter = "none"
  }
})


let loginContainerSubmit = document.querySelector("#createYourAccount");
let isInputFilled = 0;
for(let i = 0;i<4;i++){
  loginContainerInput[i].addEventListener("input",()=>{
    localStorage.setItem(`${loginContainerInput[i].name}`,`${loginContainerInput[i].value}`)
    isInputFilled = 1;
  })
}



let loginContainerHeader = document.querySelector("#loginContainerHeader");
  loginContainerSubmit.addEventListener("click",function(){
   for(let i=0;i<4;i++){
    loginContainerInput[i].style.display = "none"
   }
   loginContainerSubmit.style.display = " none"
   loginContainerHeader.innerText = "Your Account has been Succesfully Created"
   loginContainerHeader.style.textAlign = "center"
   loginContainerHeader.style.color = "Green"

   loginBtn.innerText = `${localStorage.getItem("Nick Name")}`

  })

  
  
  if(localStorage.getItem("Nick Name")==null){
    
    loginBtn.innerText = "Login";
  }
  else{
  loginBtn.innerText = `${localStorage.getItem("Nick Name")}`;

}




















