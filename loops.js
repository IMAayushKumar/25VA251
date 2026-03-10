//Loops in JavaScript are used to repeatedly run a block of code until a specific condition is met
/// for loop

let fruits=["apple","Banana","Oranges","kiwi","papaya"]
for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    console.log(element);
}
//while loops
let i=0;
while (i<fruits.length) {
    console.log(fruits)
    i++;
}
//The for...of loop in JavaScript provides a concise and readable way to iterate over the values of iterable objects such as Arrays, Strings, Maps, Sets, and more
for (const element of fruits) {
    console.log(element);  
}

