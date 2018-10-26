// set global variables

//word bank
var bank = ["cat", "dog", "mouse", "hoooman"];
// store used letters
var used = [];
//tries
var tries = 7; 
//wins
var win = 0;
//losses
var loss = 0; 
//hold picked word
var magicWord = " ";
var underscore = [];


// create random word pick
function wordPull (){
    magicWord = bank[(Math.floor(Math.random() * bank.length)
    )];
    console.log(magicWord);
}

//create display for random word
function mystify (){
    var underscore = []; 

    for(i = 0; i < magicWord.length; i++){
        underscore.push("_");
    }
    document.getElementById("display").innerHTML = underscore.join(" ");
    

}

//create way to listen for keyboard click
document.addEventListener("keyup", function(letter){
   used.push(letter.key);
   for(i = 0; i < magicWord.length; i++){
    // charAt[i]; letter.key
    
   }
});



//if else to increase wins, increase losses, decrease guess remaining





// modify html to show how you want it to look. 
