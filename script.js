let pass1="";
let pass2="";
let firstContainer=document.getElementById("password1");
let secondContainer=document.getElementById("password2");


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
     "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]"
     ,",","|",":",";","<",">",".","?",
"/"];
function generatePassword(){
    let pass1="";
let pass2="";
    for(let i=0; i<15; i++){
        let firstIndex= Math.floor(Math.random()*characters.length);
        let secondIndex= Math.floor(Math.random()*characters.length);
      pass1+=characters[firstIndex];
      pass2+=characters[secondIndex];
    }
    firstContainer.textContent=pass1;
    secondContainer.textContent=pass2;
}
function copy1(){
    let text=firstContainer.textContent;
    navigator.clipboard.writeText( text );

}
function copy2(){
    let text=secondContainer.textContent;
    navigator.clipboard.writeText( text );

}
function turnDark() {
   let element = document.getElementById("div-el");
    element.classList.toggle("dark-mode");
 }