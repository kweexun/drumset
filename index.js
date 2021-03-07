// for (var i=0; i< document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//        var keybuttons = this.innerHTML;
//         switch (keybuttons) {
//            case "w":
//                 var tom1 = new Audio('sounds/tom-1.mp3');
//                 tom1.play();
//             break;

//             case "a":
//                 var tom2 = new Audio('sounds/tom-2.mp3');
//                 tom2.play();
//             break;

//             case "s":
//                 var tom3 = new Audio('sounds/tom-3.mp3');
//                 tom3.play();
//             break;

//             case "d":
//                 var tom4 = new Audio('sounds/tom-4.mp3');
//                 tom4.play();
//             break;
            
//             case "j":
//                 var crash = new Audio('sounds/crash.mp3');
//                 crash.play();
//             break;

//             case "k":
//                 var kick = new Audio('sounds/kick-bass.mp3');
//                 kick.play();
//             break;

//             case "l":
//                 var snare = new Audio('sounds/snare.mp3');
//                 snare.play();
//             break;

//            default: console.log(this.innerHTML);
//        }

//     });
// }
for (var i=0; i< document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var keybuttons = this.innerHTML;
            sound(keybuttons);
            animatedButton(keybuttons);
    }
    
) }


//     document.addEventListener("keydown", function(event) {
//         for (var k=0; k< document.querySelectorAll(".drum").length; k++) {
//             var pressbuttons = document.querySelectorAll(".drum")[k].innerHTML;
//         if (pressbuttons === event.key) {
//             sound(pressbuttons);
// } }
// });

document.addEventListener("keydown", function(event) {
    sound(event.key);
    animatedButton(event.key);
})

function sound (soundbuttons) {    
    switch (soundbuttons) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
    break;

    case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
    break;

    case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
    break;

    case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
    break;
    
    case "j":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
    break;

    case "k":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
    break;

    case "l":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
    break;
 default: console.log(this.innerHTML); 
}} 

function animatedButton (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}