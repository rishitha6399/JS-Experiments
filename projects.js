const timesToRepeat = 10;
const character = 'b';
let answer ="";

 for (let i=0; i < timesToRepeat; i++){
    answer  = answer + character;
 }
 console.log(answer);

 function greet(firstName, lastName, honorific, greeting) {
    return '${greeting} ${honorific} ${lastName}! Im extremely pleased you could you join us, ${firstName}! I hope you enjoy you stay, ${honorific} ${lastName}.';
 }
 console.log(greet("Brian", "Holt", "lord", "saluations"));
 console.log(greet("Jack", "Sparrow", "Captian", "A-hoy"));

 //Arrays
 const daysOfTheWeek = [
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thuursday",
   "Friday",
   "Saturday",
   "Sunday",
 ];
 console.log(daysOfTheWeek);
 console.log(daysOfTheWeek[0]);
 console.log(daysOfTheWeek[1]);
 console.log(daysOfTheWeek[6]);
 

 
