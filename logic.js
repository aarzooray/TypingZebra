let wordsBox = document.querySelector("#wordsBox");
let typingBox = document.querySelector("#typingBox");

console.log(typingBox.clientWidth)

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


function resetFun() {
  typingBox.removeAttribute("disabled", "true");
  // document.querySelector("#resultContainer").style.visibility = "hidden";
  let resetBtn = document.querySelector("#reset");
  resetBtn.addEventListener("click", function () {

    // location.reload();
    wordsBox.innerHTML = "";
    // dateAndTime();
    typingBox.value = ""
    wordsBox.scrollBy({ left: 0, behavior: "smooth" });
    sentenceGenerator();
    highlight_And_Correctness_Check();
    timerTamJham();

  })

}

resetFun();
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
    typingBox.removeAttribute("disabled", "true")
    sentenceGenerator();
    highlight_And_Correctness_Check();
    timerTamJham()
    dateAndTime();
    resultTamJham()
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
  console.log(generatedSentenceWordsLocator) //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
}
sentenceGenerator();




// ******** variables to be used in RESULT SHOWN UP*************
// ---------------------------------------------------------------------
let no_Of_WrongWords = 0;
let no_Of_Correct_Words = 0;
let no_Of_Typed_Words = 0;

function highlight_And_Correctness_Check() {
  let i = 0;
  let tempWordSelection = "";
  let x = 0;

  function updatetempWordSelection() {
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
  let goneInSpaceTerminate = 0;

  function handleSpaceTerminate(event) {
    if (typedVal < (words[touchNum][generatedSentenceWordsLocatorNumber[i]].length - 1)) {
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
        updatetempWordSelection();
      }
    }
  }

  function handleInput() {
    if (goneInSpaceTerminate > 0) {
      typingBox.value = typingBox.value.replace(/\s/g, '');
    }
    goneInSpaceTerminate = 0;
    typedVal = typingBox.value.length;

    if (typingBox.value.length == words[touchNum][generatedSentenceWordsLocatorNumber[i]].length) {
      no_Of_Typed_Words++;
      tempWordSelection = document.querySelector(`#${generatedSentenceWordsLocator[i]}`);
      let span2 = document.querySelector(`#${generatedSentenceWordsLocator[i]}`);
      span2.removeAttribute("id");

      if (typingBox.value == words[touchNum][generatedSentenceWordsLocatorNumber[i]]) {
        no_Of_Correct_Words++;
        charCount = 0;
        tempWordSelection.style.color = "green";
        console.log(tempWordSelection.getAttribute("style"))
        tempWordSelection.classList.remove("active");
        i++;
        console.log(`Value of i${i}`)
        tempWordSelection = "";
        updatetempWordSelection();
        typingBox.value = "";
      } else {
        no_Of_WrongWords++;
        charCount = 0;
        tempWordSelection.style.color = "red";
        tempWordSelection.classList.remove("active");
        i++;
        updatetempWordSelection();
        typingBox.value = "";
      }
    }

    if (words[touchNum][generatedSentenceWordsLocatorNumber[i]].charAt(charCount)) {
      charCount++;
      charNum++;
      if(typingBox.clientWidth==235)
        {
          var charLimiter = 44;
          if (charNum == charLimiter) {
            wordsBox.scrollBy({ left: 385, behavior: "smooth" });
            charNum = 0;
            charLimiter = charLimiter - 2;
          }
        }
        // charNum = 0;
        else{

          // var charLimiter = 89;
          // if (charNum == charLimiter) {
          //   wordsBox.scrollBy({ left: 785, behavior: "smooth" });
          //   charNum = 0;
          //   charLimiter = charLimiter - 2;
          }
        }
     
    }
  

  typingBox.removeEventListener("keypress", handleSpaceTerminate);
  typingBox.removeEventListener("input", handleInput);
  typingBox.addEventListener("keypress", handleSpaceTerminate);
  typingBox.addEventListener("input", handleInput);
}
highlight_And_Correctness_Check();



var dateAndTimeArray = [];
function dateAndTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();

  var monthInWords;
  switch (month) {
    case 1:
      monthInWords = "January";
      break;
    case 2:
      monthInWords = "February";
      break;
    case 3:
      monthInWords = "March";
      break;
    case 4:
      monthInWords = "April";
      break;
    case 5:
      monthInWords = "May";
      break;
    case 6:
      monthInWords = "June";
      break;
    case 7:
      monthInWords = "July";
      break;
    case 8:
      monthInWords = "August";
      break;
    case 9:
      monthInWords = "September";
      break;
    case 10:
      monthInWords = "October";
      break;
    case 11:
      monthInWords = "November";
      break;
    case 12:
      monthInWords = "December";
      break;
  }
  let newDate = [[year], [monthInWords], [day], [hour], [minute]];
  dateAndTimeArray.push(newDate);
  

}

let wpmArray;
let accuracyArray;
let wrongWordsArray;
// ********* Logic for Result Shown Up**************
let previousRecordsCont = document.querySelector("#previousRecords");

// previousRecordsCont.style.border = "3px solid red"


function resultTamJham() {
  let accuracyValue = ((no_Of_Correct_Words / no_Of_Typed_Words) *
    100).toFixed(3);
  dashBoard.appendChild(previousRecordsCont);
  dateAndTime();


  // ***************************************************
  let array;
  // Function to append an element to the array in local storage
  function appendToLocalStorageArray(key, element) {
    // Retrieve the array from local storage
    let array = localStorage.getItem(key);

    // If the array doesn't exist, create a new one
    if (array === null) {
      array = [];
    } else {
      // Parse the JSON string back into an array
      array = JSON.parse(array);
    }

    // Append the new element
    array.push(element);

    // Convert the array back into a JSON string
    const arrayString = JSON.stringify(array);

    // Save the updated array back to local storage
    localStorage.setItem(key, arrayString);
  }


  const key1 = 'wpmArray';
  const key2 = 'accuracyArray';
  const key3 = 'correctWordsArray';
  const key4 = 'wrongWordsArray';
  const newElement = no_Of_Correct_Words;



  appendToLocalStorageArray(key1, newElement);
  appendToLocalStorageArray(key2, accuracyValue);
  appendToLocalStorageArray(key3, no_Of_Correct_Words);
  appendToLocalStorageArray(key4, no_Of_WrongWords);

  wpmArray = JSON.parse(localStorage.getItem(key1));
  accuracyArray = JSON.parse(localStorage.getItem(key2));

  // ***************************************************



  wpm.innerHTML = `${no_Of_Correct_Words} ` + "WPM";

  let correctWords = document.querySelector("#correctWord");
  correctWords.innerHTML = `<p class="resultCont">Correct Words <p class="resultData resultDataCorrectWord"> ${no_Of_Correct_Words}</p></p>`;


  let accuracyCont = document.querySelector("#accuracy");

  accuracyCont.innerHTML = `<p class="resultCont">Accuracy <p class="resultData"> ${(
    (no_Of_Correct_Words / no_Of_Typed_Words) *
    100
  ).toFixed(2)}%</p></p>`;
  accuracyArray.push(accuracyValue)


  let wrongWords = document.querySelector("#wrongWord");
  wrongWords.innerHTML = `<p class="resultCont">Wrong Words <p class="resultData resultDataWrongWord"> ${no_Of_WrongWords}</p></p>`;
}


// ********* Logic for Timer**************
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
        typingBox.removeAttribute("disabled", "true");
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
        resCont.classList.add("resContVisibility");
        resultTamJham();
        previousRecordsShown();
      }
    }, 1000);

    seconds.setAttribute("id", "seconds");

    timer.append(seconds);
  }
}
timerTamJham();







//*******************************************************************************************
//                                   Login Container Code
//*******************************************************************************************
let loginBtn = document.querySelector("#login");
let main = document.querySelector("#main")
let loginContainer = document.querySelector("#loginContainer");
let loginContainerInput = document.querySelectorAll(".loginContainerInputs");

var contWar = 0;
var janeman = 0;

function loginBtnClickHand() {
  if (contWar == 0) {
    loginContainer.style.visibility = "visible";
    loginContainer.classList.toggle("animate")
    main.style.filter = "blur(0.8px)"
    // alert("hi")
    contWar = 0;

  }

}

loginBtn.addEventListener("click", loginBtnClickHand);
//removing the event listner on loginBtn

// loginBtn.removeEventListener("click",loginBtnClickHand);



let loginContainerSubmit = document.querySelector("#createYourAccount");
let isInputFilled = 0;
for (let i = 0; i < 4; i++) {
  loginContainerInput[i].addEventListener("input", () => {
    localStorage.setItem(`${loginContainerInput[i].name}`, `${loginContainerInput[i].value}`)
    isInputFilled = 1;
  })
}



let loginContainerHeader = document.querySelector("#loginContainerHeader");
loginContainerSubmit.addEventListener("click", function () {
  for (let i = 0; i < 4; i++) {
    loginContainerInput[i].style.display = "none"
  }
  loginContainerSubmit.style.display = " none"
  loginContainerHeader.innerText = "Your Account has been Succesfully Created"
  loginContainerHeader.style.textAlign = "center"
  loginContainerHeader.style.color = "Green"

  loginBtn.innerText = `${localStorage.getItem("Nick Name")}`

})
let dashBoard = document.querySelector("#dashBoard");
let formLogin = document.querySelector("#form");

if (localStorage.getItem("Nick Name") == null || localStorage.getItem("Nick Name") == "") {

  loginBtn.innerText = "Login";
  dashBoard.style.display = "none"
}
else {
  loginBtn.innerText = `${localStorage.getItem("Nick Name")}`;
  formLogin.style.display = "none";


}



//dashboard logic
let nickName = document.querySelector("#nickName");

nickName.innerHTML = ` <span id="hey">Welcome Back👋</span> ${localStorage.getItem("Nick Name")}`
let dashBoardCont = document.querySelector("#dashBoard");
let previousRecords = document.querySelector("#previousRecords");
let cnt = 0;
function previousRecordsShown() {

  let bigContainer = document.createElement('div');
  bigContainer.setAttribute("id", "bigContainer")
  // let tam =;
  let amPM;
  let zeroCont;
  if (dateAndTimeArray[cnt][3] >= 12) {
    amPM = "PM";
  }
  else {
    amPM = "AM"
  }
  if (dateAndTimeArray[cnt][4] < 10) {
    zeroCont = 0;
  }
  else {
    zeroCont = ""
  }

  bigContainer.innerHTML = `
<div id="recordDate"> 

${no_Of_Correct_Words} WPM</div>

<div id="recordWpm">${dateAndTimeArray[cnt][3]}:${zeroCont}${dateAndTimeArray[cnt][4]} ${amPM} </div>



<div id="recordDate"> 

${dateAndTimeArray[cnt][1]} ${dateAndTimeArray[cnt][2]}</div> 

<div id="downArrow"><i id="downArrowOpenUp"   class="ri-arrow-drop-down-line harryArrow"></i></div>`;

  previousRecords.appendChild(bigContainer);

  let smallContainer = document.createElement("div");
  smallContainer.setAttribute("id", "smallContainer");

  smallContainer.innerHTML = `
<div id="wrapper">
<p class="resultContRecords">Accuracy <p class="resultDataRecords"> ${(
      (no_Of_Correct_Words / no_Of_Typed_Words) *
      100
    ).toFixed(2)}%</p></p>
  </div>
 
<div id="wrapper">
<p class="resultContRecords">Correct Words 
<p class="resultDataRecords resultDataCorrectWordRecords"> ${no_Of_Correct_Words}
</p>
</p>
</div>

<div id="wrapper">
<p class="resultContRecords">Wrong Words <p class="resultDataRecords resultDataWrongWordRecords"> ${no_Of_WrongWords}</p></p>
</div>
`;

  previousRecords.appendChild(smallContainer)
  dashBoardCont.appendChild(previousRecords)
  let downArrowOpenUp = document.querySelectorAll(".harryArrow");
  let smallContainerId = document.querySelectorAll("#smallContainer");
  let downArrowOpenUpCounter = 0;
  for (let i = 0; i <= cnt; i++) {
    downArrowOpenUp[i].addEventListener("click", function () {
      if (downArrowOpenUpCounter == 0) {
        downArrowOpenUp[i].style.transform = "rotate(0deg)"
        smallContainerId[i].style.visibility = "visible";
        downArrowOpenUpCounter = 1;
      }
      else {
        smallContainerId[i].style.visibility = "hidden";
        downArrowOpenUp[i].style.transform = "rotate(180deg)"
        downArrowOpenUpCounter = 0;
      }
    })

  }

  cnt++;
  // alert(cnt)
}




let smallContainer = document.querySelector("#smallContainer");
document.addEventListener("click", (event) => {
  if ((!loginContainer.contains(event.target)) && (loginContainer.style.visibility == "visible") && event.target != loginBtn) {
    // smallContainer.style.visibility = "hidden";
    loginContainer.style.visibility = "hidden"

    for (let i = 0; i < 4; i++) {

      loginContainerInput[i].value = ""
    }
    loginContainer.style.visibility = "hidden";
    main.style.filter = "none"
  }
})










