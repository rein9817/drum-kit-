document.addEventListener("DOMContentLoaded", function() {
    let len = document.querySelectorAll(".drum").length;
    for (let i = 0; i < len; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
            makesound(this.innerHTML);
            buttonAnimation(this.innerHTML);
        });
    }
});

document.addEventListener("keypress",function(e)
{
    makesound(e.key);
    buttonAnimation(e.key);
});

function makesound(key)
{
    switch (key) {
        case "w":
            let temp1 = new Audio("sounds/tom-1.mp3");
            temp1.play();
            break;
        case "a":
            let temp2 = new Audio("sounds/tom-2.mp3");
            temp2.play();
            break;
        case "s":
            let temp3 = new Audio("sounds/tom-3.mp3");
            temp3.play();
            break;
        case "d":
            let temp4 = new Audio("sounds/tom-4.mp3");
            temp4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currenKeys)
{
    let temp=document.querySelector("."+currenKeys);
    temp.classList.add("pressed");
    setTimeout(function()
    {
        temp.classList.remove("pressed");
    },100);
}