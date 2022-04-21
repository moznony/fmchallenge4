//variables

const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const adviceNew = document.querySelector(".icon-dice");
const loadScreen = document.querySelector(".load");

//functions

const getAdvice = async () => {
  try {
    loadScreen.classList.add("show");
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    });
    const adviceJSON = await response.json();

    adviceId.innerHTML = adviceJSON.slip.id;
    adviceText.innerHTML = adviceJSON.slip.advice;
    loadScreen.classList.remove("show");
  } catch (error) {
    console.log(error);
    loadScreen.classList.remove("show");
  }
};

//event listeners

getAdvice();
adviceNew.addEventListener("click", getAdvice);