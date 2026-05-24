// Hire Me Button
function showMessage(){
    alert("Thanks for visiting my portfolio!");
}

// Typing Animation
const text = [
    "AI Developer",
    "Python Programmer",
    "Web Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type, 1000);

    }else{
        setTimeout(type, 120);
    }

})();

// Dark / Light Mode
const modeBtn = document.getElementById("mode-btn");

modeBtn.onclick = () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        modeBtn.textContent = "☀️";
    }else{
        modeBtn.textContent = "🌙";
    }
};