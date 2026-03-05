/* ------homepage animation-------- */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));


document.querySelectorAll(".particles").forEach(container => {

for(let i=0;i<30;i++){

let dot = document.createElement("span");

let size = Math.random()*6 + 4;
dot.style.width = size + "px";
dot.style.height = size + "px";
dot.style.left = Math.random()*100 + "%";
dot.style.animationDuration = (5 + Math.random()*5) + "s";
dot.style.animationDelay = Math.random()*5 + "s";

container.appendChild(dot);

}


});

document.querySelector("#contact-form").addEventListener("submit", function(e){

e.preventDefault();

const name = document.querySelector("input[type='text']").value;
const email = document.querySelector("input[type='email']").value;
const message = document.querySelector("textarea").value;

console.log(name, email, message);

alert("Message sent! (Demo form)");
this.reset();

});

// MOBILE NAV MENU
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

const toggle = document.querySelector("#theme-toggle");

toggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
      toggle.textContent = "☀️";
  } else {
      toggle.textContent = "🌙";
  }

});
