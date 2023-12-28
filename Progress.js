let prevButton = document.querySelector(".prev")
let nextButton = document.querySelector(".next")


// Next button --->
nextButton.addEventListener("click", IncreaseProgress)

let counting = document.querySelectorAll(".counting")
let counter = 1;

function IncreaseProgress() {

  counting.forEach((count, i) => {
    if (counter == i) {
      count.classList.add("borderChanged")
    }
  }
  )


  if (counter < 4) {
    counter++
  }
}

// Prev Button ---->
prevButton.addEventListener("click", DecreaseProgress)
function DecreaseProgress() {

  counting.forEach((count, i) => {
    if (counter == i) {
      count.classList.remove("borderChanged")
    }
  }
  )


  if (counter > 1) {
    counter--;
  }
}
