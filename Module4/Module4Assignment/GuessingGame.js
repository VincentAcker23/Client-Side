var enterButton = document.getElementById('enterButton');
var againButton = document.getElementById('againButton');
var output = document.getElementById('outputText');

var randomNumber = Math.ceil(Math.random() *100);

function checkNumber(){
    var input = document.getElementById('userInput').value;
    if(input == randomNumber){
        output.innerHTML="Congratulations! You guessed the correct number "+ ","+" it was"+ randomNumber;
        output.style.color="green";
    }
    else if(input>randomNumber && input<100){
        output.innnerHTML="You guessed too high";
    }
    else if (input<randomNumber && input>1){
        output.innerHTML="You guessed too low"
    }
    else if(input<1){
        output.innerHTML="Higher";
    }
    else if (isNaN(input)){
        output.innerHTML="That is not a number!";
    }
    else{
        output.innerHTML="Lower"
    }
}
enterButton.addEventListener('click', checkNumber);
againButton.addEventListener('click', function(){
    location.reload();
})
