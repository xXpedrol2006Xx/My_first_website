const button1 = document.getElementById("Btn1");
const button2 = document.getElementById("Btn2");
const button3 = document.getElementById("Btn3");
const RestartBtn = document.getElementById("Btn4");
const changeLab = document.getElementById("Lab1");

RestartBtn.onclick = function(){
     changeLab.innerHTML = "_____"
}

button1.onclick = function(){
     changeLab.innerHTML = "Goodjob"

}

button2.onclick = function(){
     changeLab.innerHTML = "Hello"

}

button3.onclick = function(){
     changeLab.innerHTML = "Goodbye"

}
