const texts = ["Hola", "Ciao", "Привет", "你好", "أهلاً", "Hai"];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const delayBetweenWords = 2000;

function type() {
  const typewriterElement = document.getElementById("typewriter");
  const currentText = texts[currentTextIndex];
  const displayedText = currentText.substring(0, currentCharIndex);

  typewriterElement.textContent = displayedText;

  if (!isDeleting && currentCharIndex < currentText.length) {
    currentCharIndex++;
    setTimeout(type, typeSpeed);
  } else if (isDeleting && currentCharIndex > 0) {
    currentCharIndex--;
    setTimeout(type, deleteSpeed);
  } else if (!isDeleting && currentCharIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, delayBetweenWords);
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    setTimeout(type, typeSpeed);
  }
}

function checkViewportAndRunTypewriter() {
  if (window.innerWidth >= 600) {
    // Adjust the width as needed for desktop view
    type();
  } else {
    // insert the word "Hello"

    const typewriterElement = document.getElementById("typewriter");
    typewriterElement.textContent = "Hi!";
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  checkViewportAndRunTypewriter();
  window.addEventListener("resize", checkViewportAndRunTypewriter);
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 750) {
    // Adjust the scroll position as needed
    navbar.classList.add("navbar-backdrop");
  } else {
    navbar.classList.remove("navbar-backdrop");
  }
});
