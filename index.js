// detecting Button Presss
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){

      document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML =this.innerHTML;

        makeSound(buttonInnerHTML);

        

      
});

}

// detecting Keyboard Press

document.addEventListener("keypress", function(event){
    makeSound(event.key);
   
});

function makeSound(key){


    switch (key) {
        case "w":
        var tom1 = new Audio('tom-1.mp3');
        tom1.play(); 
        break;
       
        case "a":
        var tom2 = new Audio('tom-2.mp3');
        tom2.play(); 
        break;

        case "s":
        var tom3 = new Audio('tom-3.mp3');
        tom3.play(); 
        break;

        case "d":
        var tom4 = new Audio('tom-4.mp3');
        tom4.play(); 
        break;

        case "j":
        var audio = new Audio('snare.mp3');
        audio.play(); 
        break;

        case "k":
        var audio = new Audio('crash.mp3');
        audio.play(); 
        break;

        case "l":
        var audio = new Audio('kick-bass.mp3');
        audio.play(); 
        break;


        default: console.log(buttonInnerHTML);



      
           
    }
}

