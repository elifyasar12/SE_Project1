/* SCROLL ANIMATION */

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

dot.style.left = Math.random()*100 + "%";
dot.style.animationDuration = (5 + Math.random()*5) + "s";
dot.style.animationDelay = Math.random()*5 + "s";

container.appendChild(dot);

}

});