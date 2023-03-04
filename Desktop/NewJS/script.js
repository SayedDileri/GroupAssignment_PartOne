//  data types: 
//  - numbers (decimals and integers)
//  - strings (texts - always include 'xyz')
//  - boolean (true or false)
//  - undefined (empty value - let childern;)
//  - NULL is also another version
//  - Symbol is a unique value that cannot be changed.
//  - BigInt can store more integers than the numbers data type can hold. 


// what is dynamic typing:
// unlike c++, you don't have to declare the data type when initialing a variable. 

//let my_value = 0; 
// let message = "hello world";

// for (let i = my_value; i < 5; i++) 
// {
//     console.log(message);
// }


// console.log(typeof message); //prints out the data type of 'message'
// console.log('Ekram'); //when printing out a string - make sure to nest it inside of single quotes...or double quotes. Both are the same. 


// To make an immutable variable -  declare it as 'let' then later, you'll have access to change it's value. 

// message = "Hello Ekram!";
// console.log(message); //to print the newly modified variable.
// console.long(typeof message) //to print out the datatype of the newly modifed variable. 

// let age; //undefined. 

//first output statement outputs the definition.
//second output statement outputs the datatype used to declare variable. 


// console.log(age); //prints the variable as undefined because it's not defined.
// console.log(typeof age); //prints the data type of this variable which is undefined. 

/*

///STACKS//

//push:
//pop:
//peek:
//length:


// ---- STACK EXAMPLE (FREECODECAMP - JAVASCRIPT DSA) ----

var array_letters = [];
var word = "racecar";
var reverse_word = "";

// put 'array_letters' of 'word' into the stack:
// each letter is push into the stack in-order. 
for (let i = 0; i < word.length; i++) {
        array_letters.push(word[i]);
}

// pop off each 'array_letter' of word in REVERSE order:
for (let j = 0; j < word.length; j++){
    reverse_word += array_letters.pop();
}
//  check if the newly combined letters of our reverserd string mathes the original word,  
if (reverse_word === word){
    console.log(word + " is a palindrome.");
}
// if it doesn't, show this message: 
else {
    console.log(word + " is not a palindrome");
}

*/

/*
//object prototype and definition. 
const person1 = {
    first_name: "Ekram",
    last_name: "Dileri",
    occupation: "Programmer",
    job_id: 5001,
    summary : function() {
        return this.first_nasme + " " + last_name;
    } 
};

console.log(person1);



//basic math operators 

const year = 2022; 
const ekram_birth_year = year - 2003;
const date_started_programming = year - 2021;
console.log (ekram_birth_year, date_started_programming); //print out both statements. 

console.log(ekram_birth_year * 2, date_started_programming / 10);
//we can perform basic math operations inside of our print statement. 

console.log(2**3); // 2**3 = 2 x 2 x 2 (sqaure)
console.log("\n", "\n"); //just like C++, we can print new line blocks. lol!


//we can also join or concatenate two strings with our addition operator (+)
console.log(ekram_birth_year + date_started_programming); //19 + 1 = 20

const myFName = "Ekram ";
const myLName = "Dileri";

console.log(myFName + myLName);

//assignment operator: x = ...
let x = 10 + 5; // = 15
console.log("x = 10 + 5 = ", x);

x = x + 10; // + 10
console.log("x = x + 10 = ", x);

x = x * 10;
console.log("x = x * 10 = ", x);

x = x / 10;
console.log("x = x / 10 = ", x);

x++;
console.log("x++ = ",x);

x--;
console.log("x-- = ", x);

--x;
console.log("--x = ", x);

++x;
console.log("++x = ", x);

console.log("Note that: (x = x + y) === (x operator = y)")


//comparison operator
console.log(ekram_birth_year > date_started_programming); //is 'ekram_birth_year" greater than 'date_started_programming'. Booleans are invovled. 

//simple program:
console.log(ekram_birth_year > 18); //true - older than 18.

*/



// const mark_weight = 95;
// const mark_height = 1.88;

// const john_weight = 85;
// const john_height = 1.76;

// const mark_BMI = mark_weight / mark_height ** 2;
// const john_BMI = john_weight / (john_height * john_height);

// let markHigherBMI = mark_BMI > john_BMI; //second method to know if Mark's BMI is higher than John's.

// console.log("Mark's BMI: ", mark_BMI);
// console.log("John's BMI: ", john_BMI);
// console.log("Is Mark's BMI greater compared to John's? :", markHigherBMI);

//first method of determining if Mark's BMI is higher than John's.
/*

let markHigherBMI = boolean;

if (mark_BMI > john_BMI)
    {console.log(markHigherBMI== true);}
    
    else
        {console.log(markHigherBMI == false);}
*/



//String Literals 
// const name = "Sayed Dileri";
// const study = "computer science";
// const job = "Business Man";

// const together = "My name is " + name + ", and I want to study " + study + ". My goal is to be a " + job + "."; 
// console.log(together);


// ES6 feature: template literals.
// This feature allows you to embed multiple expressions within a string. 
// Let's see how it works:

// const New_together = `My name is ${name}, and I want to study ${study}. My goal is to be a ${job}.`;
// console.log(New_together);

//  Template Literals (string literals) are very handy 
//  since it can easily assmebly together any string literals 
//  with variables. 

//  It can be very useful to implement it with newline characters. 

// const Newline_together = `My name is ${name}.
// And I want to study ${study}.
// I eventually want to become a ${job}.`

// console.log(Newline_together);

//we can also use backticks with a normal strings. 
//many developers used to use backticks when logging stirngs. 

// console.log(`Writing with strings + backticks`);

//2nd way - MULTILINE TEMPLATE LITERALS:

// console.log(`hello
// world`)


//Type conversion and coercion:

/*
Type Conversion:
When we convert one data type to another.
This can be done explicitly (by me) or implicitly (by JS).
Let's see how it works:
*/

/*
const thisYear = "2022"; //declaring a integer inside of a string var. 
console.log(Number(thisYear), (thisYear)); //using the number function() we explicitly convert the string number as a integer. 

console.log(Number(thisYear) + 5)

let x = 5;
x = x + "5"; //we are concatinating a string converted number with our x integer. 
console.log(x);


let y = 10 + "1"; //concatinate one converted string-number & integer.
y = y - "1"; // 101 = 101 - 1
console.log(y); // 100


console.log("5" - "10" - "2"); //right to left
console.log("5" + "4" - 3);
console.log("15" - "2");
*/

/***********************/
// Falsy & Truthy values
/*
Following Falsy Values in JS:

#   false
#   0
#   -0
#   ""
#   null
#   undefined
#   NaN

*/
/*
const name = "Ekram";
const age = 18; 
const isMyBirthday = true; //bool = true

if (isMyBirthday) // since our variable is a true boolean, execute the first statement.
    console.log("Happy Birthday You Twat");

    else 
        console.log("It's not your birthday dummy");


const language = "dari";
const second_language = "English";
let canSpeakThird_language; //since this is undefined, it's considered as false statement.

    if (canSpeakThird_language) 
        console.log(canSpeakThird_language)
    
        else 
            console.log("Nope");

*/


//  Equality & Comparison operators

/*
const age =  20; //switch this variable with strings and integers

if (age === 19) //strict equlity operator (doesn't do type coercion)
    console.log("'===' (strict) - without type coercion.");

    else if (age == 19) //loose eqality operator (performs type coercion).
        console.log("'==' (loose) - with type coercion.")

        else if(age !== 20)
            console.log("'!==' (strict) - inequality operator")

            else if(age != 19)
                console.log("'!=' (loose) - inequality operator")

*/
//  BEST PRACTICE: use '===' equality because it's prone weird behaviours. 
//  If you need type coercion, do it manually instead of using JS features. 

/*
const fave_number = Number(prompt("What is your faverite number?")); //'prompt' function is how you can take an input from the user (console style.)
console.log(fave_number); 
console.log(typeof fave_number);

for (let i = 0; i > fave_number; i++){
        console.log("Cool Choice King!");
    }

*/
/*
// a quiz;
const Dol_score1 = 96;
const Dol_score2 = 108;
const Dol_score3 = 89;
const dolphins_ave = Dol_score1+Dol_score2+Dol_score3;

    console.log("Dolphins Average Score:", dolphins_ave/3);


    const koa_score1 = 88;
    const koa_score2 = 91;
    const koa_score3 = 110;
    const koala_ave = koa_score1+koa_score2+koa_score3;

        console.log("Koala's Average Score: ", koala_ave/3)
*/




// if(dolphins_ave >= koala_ave)
//     console.log("dolphine wins");
// else if (dolphins_ave === koala_ave)
//     console.log("It's a draw");
// else
//     console.log("koala wins");

/*
// switch case statements
// it cycles like a loop but manages conditions in a much neater format.
const supporter = "Morocco";

switch (supporter) {
    case 'France':
        console.log("Bro...what?");
    break; 
    
    case 'Brazil':
        console.log("PARIMOOO");
    break;

    case 'Morocco':
        console.log("My Man");
    break;

    default: 
        console.log("No Respect bro ");
    }
*/


// ternary operator

// const age = 19;
// age >= 18 ? console.log("You can enter boy") : console.log("Nah boy");
/*
//quick quiz with ternary operators
const bill = 430;

const total_tip_fifteen = 0.15 * bill;
const total_tip_twenty = 0.20 * bill; 


console.log("Test - 15% tip:" ,total_tip_fifteen);
console.log("Test - 20% tip:" ,total_tip_twenty);

bill >= 50 && 300 ? console.log(`Your total bill was ${bill}. The total tip is ${total_tip_fifteen}`) : 
                        console.log(`Your total bill was ${bill}. The total tip is ${total_tip_twenty}`);

*/

'use strict';
/*
Strict mode makes several changes to normal JavaScript semantics:

- Eliminates some JavaScript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
- Prohibits some syntax likely to be defined in future versions of ECMAScript.
*/



// let driverslicense = false; 
// const passed = true;

// if(passed) driverslicense = true;
// if (driverslicense) console.log("Suiiiii");

// const interface = "Audio"; // you cannot use future reserved literals in strict mode. 




// function logger(){
//     console.log("My name is Ekram");
// }

// logger(); // calling/running/invoking the function.

// function splitFruitPieces(fruit){
//     return fruit * 4;
// }


// function fruitProccessor(apples,oranges){
//     const applePieces = splitFruitPieces (apples);
//     const orangePieces = splitFruitPieces (oranges);

//         const juice = `${applePieces} apples piece and ${orangePieces} oranges were used to make our juice.`
//     return juice;
// }

// #1 - printing function directly. 
// console.log(fruitProccessor(2,4));

// #2 - capturing inside of a variable.
// const newJuice = fruitProccessor(2,4);
// console.log(newJuice);









//generic function.
/*
function calculateAge(birthYear){ 
    return 2022 - birthYear;
}

const myBirthDay = calculateAge(2003);
console.log(myBirthDay);


// function expression. 
const birthday = function (birthYear){
    return 2022 - birthYear;
}

const calcAge2 = birthday; 
console.log(calcAge2(2003));
*/

/*Anonymous Function (Function Expression)*/
// let increment = function (input){return input += 1;}

// const userInput = increment(5);
// console.log(userInput);


/*Arrow Functions*/
// const increment2 = (input2) => {
//     return `${input2} + 1 = ${input2 += 1}`
// } 

//     const userInput2 = increment2(6)
//     console.log(userInput2);


/* REMEMBER: */
//function declarations
//function expressions
//arrow functions


/*
const my_Age = function(birthYear) {return 2022 - birthYear};
const years_Left_To_Retire = function (age) {return 37 - age};

const years_Until_Retirement = function(birthYear, fullName)
{
    const age = my_Age(birthYear);
    const retirement = years_Left_To_Retire(age);
    
    return `${fullName}, you will be retired in ${retirement} years.`;
}

console.log(years_Until_Retirement(2003,"Ekram"));
*/

/*

const calcAve = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let aveKoalas = calcAve(44,23,71);
let aveDolphins = calcAve(65,54,49);

console.log(aveKoalas, aveDolphins);

const checkWinner = function(aveKoalas, aveDolphins) {
    if (aveKoalas >= 2* aveDolphins) {
        console.log(`koalas win (${aveKoalas} vs. ${aveDolphins})`);
    }
 
    else if (aveDolphins >= 2 * aveKoalas) {
        console.log(`dolphins win (${aveDolphins} vs ${aveKoalas})`);
    }

    else {
        console.log("No Winners :(");
    }
}

checkWinner(aveKoalas, aveDolphins);

aveKoalas = calcAve(23,34,27);
aveDolphins = calcAve(85,54,41);

checkWinner(aveKoalas, aveDolphins);
*/



// const greetings = ['Hello', 'Bye', 'Tah']
// console.log(greetings)

// console.log(greetings[0], greetings[1]) //get an element of an array

// console.log(greetings.length); // grabs the nunber of elements in our array.
// console.log(greetings[0].length); // logs the number of letter the first element in our array. 
// console.log(greetings[greetings.length-1]); // logs the last index of our our array. 
// console.log(greetings[greetings.length-2]); // logs the middle index of our array. 
// console.log(greetings[greetings.length-3]); // logs the first index of our array. 

// greetings[1] = 'See Ya'; // replacing an array index. perfectly legal. 
// console.log(greetings);

//however, this spits out an error.
// greetings = ['hi', 'gday','laters']; 
// console.log(greetings);
// we cannot reassign a new array to our variables...read more about this. 

// function calculateAge(birthYear){ 
//     return 2022 - birthYear;
// }

// const years = [2000, 2001, 2002, 2003, 2004];

//  lets invoke the function with our array.
//  the following indexes I will invoke our function are 1,3,5.


//#1: storing our output in a variable;

// const age1 = calculateAge(years[0]);
// const age2 = calculateAge(years[2]);
// const age3 = calculateAge(years[years.length -1]);
// console.log(age1, age2, age3); 

//#2: storing all result in an array to then log to our console.
// const age = [calculateAge(years[0]), calculateAge(years[2]), calculateAge(years[years.length -1])];
// console.log(age);

// const greetings = ['hi', 'bye', 'cheers'];
// console.log("Original: ", greetings);

// greetings.unshift('Cheerio'); //add an element at the START of an array
// console.log(greetings);

// greetings.push('gday'); //add an element at the END of an array.
// console.log(greetings);

// greetings.pop('bye'); // remove the element 'bye' from array. 
// console.log(greetings);

// greetings.pop(); //remove last element of the array. 
// console.log("Pop(): ",greetings);

// greetings.shift('hi'); //remove first element of the array. 
// console.log("Shift()", greetings);


// console.log(greetings.indexOf('bye'));
// console.log(greetings.indexOf('hi'));
// console.log(greetings.indexOf('cheers'));
// console.log(greetings.indexOf('tah'));



//  checks to see if an existing element is present in our array. 
//  it return a boolean value - TRUE/FALSE.

// console.log(greetings.includes('hi'));
// console.log(greetings.includes('bye'));
// console.log(greetings.includes('cheers'));

// greetings.push(10); // what happens if we use 'includes' (ES6) function to look through our array?
// console.log(greetings.includes('10')); 
//  this returns false because of strict type coersion. 
//  to fix this, set the parameter as an integer instead of a string:
// console.log(greetings.includes(10));
// this returns true. 

//arrays quiz: 
// 
// const calcTip = (bill) =>
// {
// return bill >= 50 && bill <= 300 ? 0.15 * bill :
//  0.20 * bill;
// }
// 
// const billArray = [125,555,44];
// const tip = [calcTip(billArray[0]), calcTip(billArray[1]), calcTip(billArray[2])];
// console.log(billArray, tip);
// 
// const totalArray = [billArray[0] + billArray[1] + billArray[2], tip[0] + tip[1] + tip[2]];
// console.log(totalArray);

// bill >= 50 && 300 ? console.log(`Your total bill was ${bill}. The total tip is ${tip15}`) : 
//                         console.log(`Your total bill was ${bill}. The total tip is ${tip20}`);

//---------------------------------------------------------------------------------------------------
// dot vs. brackets notations.

// const ekramArray = [
//     'Ekram',
//     'Dileri',
//     2035 - 2022,
//     'programmer'
// ];


// //objects (many ways to write an object but this method is literal obj syntax.)
// const ekramObj = {
//     firstName: 'Ekram',
//     lastName: 'Dileri',
//     job: 'Programmer',
//     friends: ['Mark', 'Tes', 'Hassan']
// };

// console.log(ekramObj);

// console.log(ekramObj.job); //calling our object property (dot method)
// console.log(ekramObj['job']); // calling our object property (using the brackets methods)
// // What is the difference between the dot notation vs. brackets notation methods?



// const nameKey = 'Name';
// console.log(ekramObj['first' + nameKey]);
// console.log(ekramObj['last' + nameKey]);

// // prompt('What do you wanna know bro? Name, Job, Friends?')


//Obj syntax. 
// const merry = {
//     firstName: 'Merry',
//     lastName: 'Doe',
//     job: 'Doctor',
//     Married: true,
//     'Likes to hike' : true,
//     friends: ["Jane", "Holly", "Catherine"]
// }


/* Dot notation demo*/
/*
console.log(merry); //log - whole obj:
console.log(merry.firstName); //obj + property:
console.log(merry.firstName, merry.lastName); // obj & (property1 & property2)
console.log(merry.firstName + merry.lastName); // obj + (property1 + property2) CONCAT.
console.log(`My first name is ${merry.firstName} and my last name is ${merry.lastName}`) // String Literals.
merry.Married === true ? console.log("Yes I am married") : console.log("No I am not married"); // Ternary Operator - cool!
*/

//IF we try accessing our 'Likes to hike' property from merry obj - the dot notation will not work. Let's try it:
// console.log(merry.'Likes to hike'); // the interpreter will throw an error!!. 
//cool vscode trick: if you try to access that property, it will automatically correct it with bracket notation.
// console.log(merry["Likes to hike"]);


// /* Brackets notation demo */
// console.log(merry['firstName']); // accessing obj + property.
// console.log(merry['firstName'], merry['lastName']); // obj & (property1 & property2)
// console.log(merry['firstName'] + merry['lastName']); // obj + (property1 + property2) CONCAT.
// console.log(`My first name is ${merry['firstName']} and my last name is ${merry['lastName']}`); // String Literal. 
// merry['Married'] === true ? console.log("Yes I am married") : console.log("No I am not married"); // Ternary Operator - cool!

// const nameKey = "Name";
// console.log(merry['first' + nameKey]); // a cool way to output object properties without guessing the property literal. 

// const learnAboutMerry = prompt("What do you want to learn about me? Name, Job, Marriage Status, hobbies?")
// console.log(merry[learnAboutMerry]);



// /* ADD PROPERTIES TO OUR OBJECT*/
// merry.location = "Australia";
// merry.instagram = "dileri_co";
// console.log(merry.location)
// console.log(merry.instagram);
// console.log(merry);

// const friendsList = merry.friends;
// console.log(friendsList.length)

// console.log(`${merry.firstName} has ${friendsList.length} friends, and her best friends is ${merry.friends[0]}`)



/* Object Methods*/
// const merry = {
//     firstName: 'Merry',
//     lastName: 'Doe',
//     birth: 1994,
//     job: 'Doctor',
//     Married: true,
//     'Likes to hike' : true,
//     friends: ["Jane", "Holly", "Catherine"],
//     calcAge: function() //using expressions inside of an object to create methods.
//     {
//         console.log(this)
//         return 2023 - this.birth;
//     }
// }

//  see methods as propeties that contain a value.
//  the object's behaviour is defined by the method which we can declare inside/outside our object.

// console.log(merry.calcAge());//dot method
// console.log(merry['calcAge']());//brackets method




// write two functions. The first function initialises with a variable that contains the value 0. The value consistently adds one each second. The second function is used to print "Hello World" in between the seconds intervals



// const merry = {
//     firstName: 'Merry',
//     lastName: 'Doe',
//     birth: 1994,
//     job: 'Doctor',
//     Married: true,
//     'Likes to hike' : true,
//     friends: ["Jane", "Holly", "Catherine"],
    
//     calcAge: function() {
//         this.age = 2023-this.birth;
//         return this.age;
//     }
        // calcAge: function(){ //using an expression as an alias to a normal function lets the object know that it's a property that holds a function value. 
    //     // console.log(this); //the method takes the object as the param.
    //     return 2023-this.birth;
    //  }
// };

// console.log(merry.calcAge()) //why does this return a valid value but when I remove, '777' returns undefid???
// console.log(merry['age']);
// console.log(merry['calcAge']()); //objName [propertyName] (functionParam)


// function makeUser()
// {
//     return {
//         name: "Ekram",
//         ref(){
//             return this;
//         }
//     };
// }

// let user = makeUser();
// alert(user.ref().name);



//challenge

// const patreon1 = {
//     fullname: "Mark Mileer",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function()  {    
//         this.bmi = this.mass / (this.height * this.height);
//         console.log(this);
//         return this.bmi;
//     }
// };


// const patreon2 = {
//     fullname: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function()  {    
//     this.bmi = this.mass / (this.height * this.height);
//     console.log(this);
//     return this.bmi;
// }
// };
// console.log(patreon1['calcBMI']())

// console.log(patreon2['calcBMI']());
// // console.log(patreon1['bmi'])


// console.log(`Mark weighs ${patreon1['bmi']} kilos, and is ${patreon1.height} tall.`);
// console.log(`John weighs ${patreon2['bmi']} kilos and is ${patreon2.height} tall.`);

// if (patreon1.bmi > patreon2.bmi ) {
//     console.log("Mark has a higher BMI than John");
// }
// else
// {
//     console.log("John has a higher BMI than Mark's.")
// }



//LOOps


// const ekramArray = [
//     'Ekram',
//     'Dileri',
//     2035 - 2022,
//     'programmer',
//     ['mark', 'tes', 'hassan'],
//     true
// ];


// for (let i = 0; i < ekramArray.length;i++){
//     console.log(ekramArray[i], typeof ekramArray[i]);
//     console.log(i)
// }


//mini exercise - push the age values into the age array using loops.

// const years = [2000,2001,2003,2004];
// const ages = [];

// for (let i = 0; i < years.length; i++)
// {
//     ages.push(2023 - years[i]);
// }
// console.log(ages);

//continue statement

/*
console.log("** ONLY STRINGS **")
for (let j = 0; j < ekramArray.length; j++)
{
    if (typeof ekramArray[j] !== 'boolean') continue;
    console.log(ekramArray[j], `{${typeof ekramArray[j]}}`);
}


const myObj = [{id: 0, name: "Helo"},{}] //can change
const myObj3 = [{},{id: 0, name: "Helo"}] //can change


    myObj[0].id = 7;
    console.log(myObj[0].id);


function myObject (id,name)
{
    this.id = id;
    this.name = name;
}

const objectInstance = new myObject(7,"Hello");
console.log(objectInstance);

*/


// const ekramArray = [
//     'Ekram Dileri',
//     2035 - 2022,
//     'programmer',
//     ['mark', 'tes', 'hassan'],
//     true
// ];

//looping backwards

// const totalObj = 5;

// for (let i = totalObj - 1; i >= 0; i--)
// {
//     // console.log([i]); //prints the descending order number.
//     console.log(i,ekramArray[i]); //prints the descending properties + 916.
//     // console.log(ekramArray); //prints the object 5 times through the loop.
// }

// (FOR LOOP) sets & reps mini program (backwards);

// for(let i = 5; i >= 1; i--){
    // for(let j = 12; j >= 1; j--)
    // {
        // console.log(`Sets: [${i}] Reps: [${j}]`)
    // }
// }


// (WHILE LOOP) sets & reps mini program (backwards);
// let sets = 5;
// let reps = 12;

// while (sets >= 1){
//     console.log(`Sets: [${sets}]`)
//     sets--;
        
//     while(reps >= 0){
//         console.log(`Reps: [${reps}]`)
//         reps--;
//     }
// }



//sets & resps mini program (forwards)
// for (let set = 1; set <= 5; set++){
    // for(let rep = 1; rep <= 12; rep++){
        // console.log(`$Sets: [${set}] Reps: [${rep}]`)
    // }
// }
// 

// //anon function
// () => {
    
    // } 
    
//     const calcTip = (bills) =>
//     {
//         return bills >= 50 && bills <= 300 ? 0.15 * bills :
//         0.20 * bills;
//     }

// const  bills = [22,295,176,440,37,105,10,1100,86,52];
// let tips = [];
// let totals = [];



//     for (let i = 0; i < bills.length; i++ ){
//         const tip = calcTip(bills[i]);
//         tips.push(tip);//adds the values of tip into tips[]
//         totals.push(tip + bills[i]); //adds tip + bills[i] to totals[]
//     }

// console.log(bills, tips, totals);

//const months = [["Jan", "Feb", "Mar"], ["Apr", "May", "Jun"], ["Jul", "Aug", "Sep"], ["Oct", "Nov", "Dec"]];
//const qaurters = ["Q1", "Q2", "Q3", "Q4"];
//console.log(months[0][0]);
//const quarterOf = (month) =>{

//}
const months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul","Aug", "Sep","Oct","Nov","Dec"]
const quarterOf = (month) =>{
    let quarter = "";
    if (month >= 1 && month <=3){quarter = "Q1"}
    else if (month >= 4 && month <=6){quarter = "Q2"}
    else if (month >= 7 && month <=9){quarter = "Q3"}
    else if (month >= 10 && month <=12){quarter = "Q4"};
    console.log("Month: ", months[month-1]);
    console.log("Quarter: ", quarter);
}
let count = 1
while (count < 13){
    quarterOf(count);
    count = count + 1;
}

/* 
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.*/