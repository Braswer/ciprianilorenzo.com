
const personal = document.querySelector(".personal")
const experience = document.querySelector(".experience")
const knowledge = document.querySelector(".knowledge")
const website = document.querySelector(".website")
const contacts = document.querySelector(".contacts")
const btnactive1 = document.querySelector(".button1")
const btnactive2 = document.querySelector(".button2")
const btnactive3 = document.querySelector(".button3")
const btnactive4 = document.querySelector(".button4")
const btnactive5 = document.querySelector(".button5")
const close1 = document.querySelector(".close1")
const close2 = document.querySelector(".close2")
const close3 = document.querySelector(".close3")
const close4 = document.querySelector(".close4")
document.getElementById("button1").onclick = popup
document.getElementById("button2").onclick = popup2
document.getElementById("button3").onclick = popup3
document.getElementById("button4").onclick = popup4
document.getElementById("button5").onclick = popup5

const ldbtn = document.querySelector(".ld");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

// Light/Dark Mode
ldbtn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
      document.body.classList.toggle("light-theme");
      var theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
      document.body.classList.toggle("dark-theme");
      var theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    }
    localStorage.setItem("theme", theme);
  });

// Apri e chiudi SEZIONI POPUP
function popup() {
    personal.style.display = "block";
    experience.style.display = "none";
    knowledge.style.display = "none";
    website.style.display = "none";
    contacts.style.display = "none";
    btnactive1.classList.add("current");
    btnactive2.classList.remove("current");
    btnactive3.classList.remove("current");
    btnactive4.classList.remove("current");
    btnactive5.classList.remove("current");
} 

function popup2() {
    experience.style.display = "block";
    personal.style.display = "none";
    knowledge.style.display = "none";
    website.style.display = "none";
    contacts.style.display = "none";
    btnactive1.classList.remove("current");
    btnactive2.classList.add("current");
    btnactive3.classList.remove("current");
    btnactive4.classList.remove("current");
    btnactive5.classList.remove("current");
} 

function popup3() {
    knowledge.style.display = "block";
    personal.style.display = "none";
    experience.style.display = "none";
    website.style.display = "none";
    contacts.style.display = "none";
    btnactive1.classList.remove("current");
    btnactive2.classList.remove("current");
    btnactive3.classList.add("current");
    btnactive4.classList.remove("current");
    btnactive5.classList.remove("current");
} 

function popup4() {
    website.style.display = "block";
    personal.style.display = "none";
    experience.style.display = "none";
    knowledge.style.display = "none";
    contacts.style.display = "none";
    btnactive1.classList.remove("current");
    btnactive2.classList.remove("current");
    btnactive3.classList.remove("current");
    btnactive4.classList.add("current");
    btnactive5.classList.remove("current");
} 

function popup5() {
  contacts.style.display = "block";
  personal.style.display = "none";
  experience.style.display = "none";
  knowledge.style.display = "none";
  website.style.display = "none";
  btnactive1.classList.remove("current");
  btnactive2.classList.remove("current");
  btnactive3.classList.remove("current");
  btnactive4.classList.remove("current");
  btnactive5.classList.add("current");
} 

function hamburger() {
  var x = document.getElementById("buttons");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

