const myName = "Rishitha";
console.log(myName);

console.log("hello from experiments");

const skyIsBlue = true;
 if(skyIsBlue) {
    console.log('yay');
    console.log("The sky is blue");
 } else {
    console.log("The sky is_not blue?");
 }


 let friendsAtYourParty = 10;
 if (friendsAtYourParty === 0) {
    console.log("Cool,now I have a lot of nachos to myself");
 } else if (friendsAtYourParty <= 4){
    console.log("Perfect amount to play some Mario kart.");
 } else{
    console.log("we enjoyed the party");
 }


 let friendsAtMyParty = 0;
 while (friendsAtMyParty < 10){
    console.log('another friend joined');
    console.friendsAtMyParty= friendsAtMyParty + 1;
 }
 console.log(friendsAtMyParty);
 
 
 function addTwo(number){
    return number + 2;
 }
 const finalAnswer = addTwo(5);
 console.log(finalAnswer);
