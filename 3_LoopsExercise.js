
// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let between = 1;
let number5 = 5;
while(between < number5) {
  console.log(between);
  between += 1
  }
// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let integer1 = 1;
let number4 = 4;
 do {
    console.log(integer1);
    integer1 = integer1+1
 }while (integer1 <= number4);

 console.log(integer1)

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for(let i = 1; i<=5; i++){
    console.log(i)
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//do while
let start1 = 10;
let endNumber = 1;
do{
  console.log(i);
    start1 = start1-1
  }while(start1 > endNumber);

  //while
  let startCount = 10
  while(startCount > 1) {
    console.log(startCount);
    startCount = startCount -1;
  }
// for loop
  for(let i = 10; i>0; i=i-1 ) {
    console.log(i);
  }

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//for loop
for(let i = 7; i<27; i= i +7){
    console.log(i);
}
// while loop
  let i = 7;
  let n = 27;
while(i < n) {
   console.log(i);
    i= i + 7;
}
//do while

let startingSeven = 7
let finishNumber = 27;
do{
  console.log(startingSeven);
    startingSeven = i+7
}while(starting7< finishNumber);

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
for(let i = 10; i<=100; i= i +10){
    console.log(i);
  }
  // while loop
  let start10= 10;
  let end100 = 100;
  while(start10 < end100) {
   console.log(start10);
    start10 = start10 + 10;
  }
  //do while
  let tenToStart = 10;
  let ending = 100;
  do{
  console.log(tenToStart);
    tenToStart= tenToStart+10
  }while(tenToStart < ending);

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour < 2) {
  console.log("HELP ME!");
  counterFour--;
}
  
let counterfour = 1;
let negNumber = -98;
while(counterfour >=negNumber ) {
  console.log("HELP ME!");
  counterfour--;
}



// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
for(let n = 0; n <=50; i = n+1){
    console.log(n)
  }

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
for(let i = 0; i <=100; i = i+1){
    if(i === 4){
      console.log( `${i} my Favorite Number!`);
    }else {
      console.log( `${i} not my favorit Number`);
    }
  }

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3 ; outsideCounter++ ) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >0; insideCounter -- ) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// this one was a bit difficult with the nested loop and the infinite loop 

// Email your file to us or commit your file to GitHub and email us a link