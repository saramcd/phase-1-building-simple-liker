// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const heartButtons = document.querySelectorAll(".like-glyph");

const handleLike = (e) => {
  const heart = e.target;
  mimicServerCall()
    .then(function () {
      if (heart.innerText == FULL_HEART) {
        heart.classList.remove("activated-heart");
        heart.innerText = EMPTY_HEART;
      } else {
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart");
      }
    })
    .catch(function (error) {
      const errorModal = document.getElementById("modal");
      errorModal.classList.remove("hidden");
      errorModal.innerText = error;
      setTimeout(function () {
        errorModal.classList.add("hidden");
      }, 3000);
    });
};

for (const heart of heartButtons) {
  heart.addEventListener("click", handleLike);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
