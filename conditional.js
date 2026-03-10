/// JavaScript uses conditional statements to perform different actions based on whether a condition is true or false.
// if statements..................
let age=13;
if(age<=18){
    console.log("he/she will drive");
}
else {
    console.log("cannnot drive");
}
//The JavaScript switch statement is a control flow mechanism used to perform different actions based on the value of a single expression.
//swirch statements
let marks=100;
switch(marks){
    case'A':result="First division";
    break;
    case'B':result="seccond divison";
    break;
    case'C':result="THird division";
    break;
    default:result="fail";

}
console.log(result);
// elseif else if cinditions
let mark=100;
if (mark>80)
    console.log("First division");
    
else if(mark>60)
    console.log("seccond divison");
    else if(mark>40)
        console.log("THird division");
   else{console.log("fail")}
