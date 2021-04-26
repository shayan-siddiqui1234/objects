/* Chapter 26 to 30 */



// Question NUmber 1 
// var num = Number(prompt("Enter number"));
// var roundOfNumber = Math.round(num);
// var floorNumber = Math.floor(num);
// var ceilNumber = Math.ceil(num);
// document.write("<br>" + "Number: " + num);
// document.write("<br>" + "Round off value: " + roundOfNumber);
// document.write("<br>" + "Floor value: " + floorNumber);
// document.write("<br>" + "Ceil value: " + ceilNumber);


// Question NUmber 2
// var num = Number(prompt("Enter number"));
// var roundOfNumber = Math.round(num);
// var floorNumber = Math.floor(num);
// var ceilNumber = Math.ceil(num);
// document.write("<br>" + "Number: " + num);
// document.write("<br>" + "Round off value: " + roundOfNumber);
// document.write("<br>" + "Floor value: " + floorNumber);
// document.write("<br>" + "Ceil value: " + ceilNumber);


// Question NUmber 3
// var number = Number(prompt("Enter a number"));
// var abnum = Math.abs(number);
// document.write("<br>"+ "The absolute value of " + number +" is " + abnum);

// Question NUmber 4
// var number = Math.random();
// num = (number*6);
// num = Math.ceil(number);
// document.write("<br>" + "Random dice value: " + num);

// Question NUmber 5
// var coin = Math.random();
// coin = (coin*2);
// coin = Math.ceil(coin);
// if (coin === 2){
//     document.write("<br>"+ coin);
//     document.write("<br>"+ "Random coin value: Heads");
// }
// else{
//     document.write("<br>"+ coin);
//     document.write("<br>"+ "Random coin value: Tails");
// }

// Question NUmber 6
// var num = Math.random();
// number = (num * 99);
// number = Math.ceil(number);
// if (num === 1) {
//     document.write("<br>" + "Random number between 1 to 100: " + number + 1)
// }
// else {

//     document.write("<br>" + "Random number between 1 to 100: " + number)
// }

// Question NUmber 7
// var weight = prompt("Enter your weight");
// document.write("<br>" + "The weight of user is "+ weight);

// Question NUmber 8
// var secretNumber = Math.ceil(Math.random() * 10);
// var guesNumber = Number(prompt("Enter number between number 1 to 10"));
// if (secretNumber === guesNumber) {
//     document.write("<br>" + "Bro you are Genius");
// }
// else{
//     document.write("<br>" + "better luck next time");
// }


/* Chapter 31 to 34 */

// Question NUmber 1
// var date = new Date();
// document.write("<br>" + date);

// Question NUmber 2
// var date = new Date();
// var indexOf = date.getMonth();
// var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// document.write("<br>"+ "Current month: " + months[indexOf]);

// Question NUmber 3
// var date = new Date();
// var indexOf = date.getDay();
// var days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
// document.write("<br>"+ "Today is " + days[indexOf]);

// Question Number 4
//var days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
// var date = new Date();
// var indexOf = date.getDay();


// if(indexOf === 0 || indexOf === 6){
//     document.write("<br>" + "It's fun day");
// }
// else{

//     document.write("<br>"+ "Today is " + days[indexOf]);
// }

// Question Number 5
// var date = new Date();
// var today = date.getDate();
// if (today < 16){
//     document.write("<br>"+"First fifteen days of the month");
// }
// else{
//     document.write("<br>"+"Last days of the month");
// }

// Question Number 6
// var date = new Date();
// var unixTime = date.getTime();
// document.write("<br>" + "Current date: " + date);
// document.write("<br>" + "Elapsed milliseconds since January 1, 1970: " + unixTime);
// document.write("<br>" + "Elapsed Minutes since January 1, 1970: " + unixTime/(1000*60*60));

// Question Number 7
// var date = new Date();
// var time= date.getHours();
// if(time < 12) {
//     alert("It's AM")
// }
// else {
//     alert("It's PM")
// }

// Question Number 8
var laterDate = new Date();
document.write(laterDate);

// Question Number 9
// var firstRamdan = new Date("2020/4/24 0:0:0"); //first ramadan in 2020
// var currentDate = new Date();
// var diffrence = currentDate.getTime() - firstRamdan.getTime();
// var daysPassed = diffrence / (1000*60*60*24);
// daysPassed = Math.floor(daysPassed);
// document.write("<br>" + daysPassed + " days haved passed since 1st Ramadan, 2020");;

// Question Number 10
// var currentDate = new Date();
// var givenDate = new Date("2021/01/01 00:00:00");
// var diffrence = currentDate.getTime() - givenDate.getTime();
// diffrence /= (1000*60);
// document.write("<br>" + "On reference date " + currentDate + ", " + Math.round(diffrence) + " seconds had passed since begining of 2021");

// Question Number 11
// var date = new Date();
// document.write("<br>" + "Current Date: " + date);
// var hour = date.getHours();
// hour--;
// date.setHours(hour);
// document.write("<br>" + "1 hour ago, it was " + date);

// Question Number 12
// var date = new Date();
// document.write("<br>" + "Current Date: " + date);
// var year = date.getFullYear();
// year -= 100;
// date.setFullYear(year);
// document.write("<br>" + "100 year back, it   was " + date);

// Question Number 13
// var userAge = parseInt(prompt("Enter your age"));
// var date = new Date();
// var currentYear = date.getFullYear();
// var birthYear = currentYear - userAge;
// document.write("<br>"+ "Your age is " + userAge);
// document.write("<br>"+ "Your birth year is " + birthYear);


/* Chapter 35 to 38 */

// Question Number 1
// function date(){
//     var date = new Date();
//     document.write(date);
// }
// date();

// Question Number 2
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// function greeting(fname,lname){
//     let fullName = fname.concat(" ",lname);
//     document.write("<br>" + "your name is  " + fullName);
// }
// greeting(firstName,lastName);

// Question Number 3
// var num1 = Number(prompt("first Name"));
// var num2 = Number(prompt("Second number"));
// var  total = add(num1,num2);
// document.write("<br>" + "Sum of " + num1 + " and " + num2 + " is "+ total);
// function add(a,b){
//     return a+b;
// }

// Question Number 4
// var number1 = Number(prompt("Enter fist number"));
// var number2 = Number(prompt("Enter second number"));
// var operation = prompt("Enter operation");
// document.write("<br>" + "Resut of expression is " + result(number1,number2,operation));

// function result(num1,num2,operator){
//     if (operator==="+"){
//         return num1 + num2;
//     }
//     if (operator==="-"){
//         return num1 - num2;
//     }
//     if (operator==="*"){
//         return num1 * num2;
//     }
//     if (operator==="/"){
//         return num1 / num2;
//     }
// }

// Question Number 5
// var number = Number(prompt("Enter number of sqaure"));
// square(number);
// function square(num){
//     document.write("<br>" + "Square of " + num + " is " + (num**2));
// }

// Question Number 6
// var num = Number(prompt("Enter number for Factorial"));

// var result = factorial(num);
// document.write("<br>" + "Factorial of "+ num + " is " +result);
// function factorial(num) {
//     for (let i = num-1; i > 0; i--){
//         num *= i;
//     }
//     return num;
// }

// Question Number 7
// var sP = +prompt("start point");
// var eP = +prompt(" End point");
// counting(sP,eP);

// function counting(spoint,epoint){
//     for(var i = spoint; i<= epoint; i++){
//         document.write("<br>"+ i);
//     }
// }

// Question Number 8
// var perpendicular = Number(prompt("Enter perpendicular"));
// var base = Number(prompt("Enter base"));
// hypotenuse(perpendicular,base);

// function square(num){
//     return num**2;
// }

// function hypotenuse(per,bas){
//     var hyp = square(per) + square(bas);
//     document.write("<br>" + "Hypotenuse : " + square(hyp));
// }

// Question Number 9
// var width = Number(prompt("Enter width"));
// var height = Number(prompt("Enter height"));
// areaOfRectangle(width,height); 
// areaOfRectangle(5,8);

// function areaOfRectangle(a,b){
//     document.write("<br>" + "Area of rectangle is " + (a*b));
// }


// Question Number 10
// var string = prompt("Enter string");
// checkPalindrome(string);

// function checkPalindrome(str) {
//     var reverseString = "";

//     for (var i = (str.length - 1); i >= 0; i--) {
//         reverseString = reverseString.concat(str[i]);
//     }
//     if(str.toLowerCase() === reverseString.toLowerCase()){
//         document.write("<br>" + "The string is Palidrome");
//         document.write("<br>" + "User Input: " + str);
//         document.write("<br>" + "Reverse string: " + reverseString);
//     }
//     else{
//         document.write("<br>" + "The string is not Palidrome");
//     }
// }

// Question Number 11
// var string = prompt("Enter string");
// var afterConvertion = convertion(string);

// document.write("<br>" + "User input: " + string);
// document.write("<br>" + "After converstion: " + afterConvertion);

// function convertion(str){
//     copyStr = str[0].toUpperCase();
//     copyStr = copyStr.concat(str.slice(1));
//     return copyStr;
// }

// Question Number 12
// var string = "Live cricket match";
// findLongestWord(string);

// function findLongestWord(str) {
//     var splitString = str.match(/\w[a-z]{0,}/gi);
//     var longestWord = splitString[0];

//     for (var i = 0; i < splitString.length; i++) {

//         if(longestWord.length < splitString[i].length){
//             longestWord = splitString[i];
//         }
//     }
//     document.write("<br>" + "Longest Word : " + longestWord);
// }

// Question Number 13
// function numberOf(string, character) {
//     var count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i].toLowerCase() === "o"){
//             count++;
//         }
//     }
//     return count;
// }

// document.write("<br>" + "Number of changin of of 'o' is " + numberOf("JSResourceS.com","o"));

// Question Number 14
// function calcCircumference(rad){
//     document.write("<br>" + "The circumfrence of circle is " + (2*rad*3.142))
// }

// function calcArea(rad){
//     document.write("<br>" + "The area of the circle is " + (3.14 * rad**2));
// }

// var radius = Number(prompt("Enter radius"));
// calcCircumference(radius);
// calcArea(radius);

/* Chapter 38 to 42 */

// Question Number 1
// function calcPower(a,b){
//     return a**b;
// }

// var
 //base = Number(prompt("Enter base value"));
// var power = Number(prompt("Enter power value"));

// document.write("<br>" + "The value of " + base + " raised to " + power + " is " + calcPower(base,power));

// Question Number 2
// var year = Number(prompt("Enter year"));
// check(year);
// function check(y){
//     if (y%4 === 0){
//         document.write("<br>"+ y + " is a leap year")
//     }
//     else{
//         document.write("<br>"+ y + " is not a leap year")
//     }
// }

// Question Number 3
// var S = function(x,y,z){
//     return (x+y+z)/2;
// }

// function areaOfTriangle(a,b,c){
//     var s = S(a,b,c);
//     var area = s*(s-a)*(s-b)*(s-c);
//     document.write("<br>" + "Area of Triangle is " + area);
// }

// var s1 = Number(prompt("Enter first side of triangle"));
// var s2 = Number(prompt("Enter second side of triangle"));
// var s3 = Number(prompt("Enter third side of triangle"));
// areaOfTriangle(s1,s2,s3);

// Question Number 4
// var subject1 = Number(prompt("Enter marks of subject 1"));
// var subject2 = Number(prompt("Enter marks of subject 2"));
// var subject3 = Number(prompt("Enter marks of subject 3"));

// mainFunction(subject1,subject2,subject3);

// function mainFunction(sub_1, sub_2, sub_3) {
//     var marksObtain = sub_1 + sub_2 + sub_3;
//     document.write("<br>" + "Marks of 1st subject is " + sub_1);
//     document.write("<br>" + "Marks of 2nd subject is " + sub_2);
//     document.write("<br>" + "Marks of 3rd subject is " + sub_3);
//     document.write("<br>" + "Average: " + calcAverage(marksObtain).toFixed(2));
//     document.write("<br>" + "Percentage: " + calcPercentage(marksObtain,300).toFixed(2) +"%");
// }
// function calcAverage(total) {
//     return total / 3;
// }
// function calcPercentage(marksObtain, totalMarks) {
//     return (marksObtain / totalMarks) * 100;
// }

// Question Number 5
// var string = prompt("Enter string");
// var character = prompt("Enter character");

// if (indexOf(string, character) === -1) {
//     document.write("<br>" + "String: " + string);
//     document.write("<br>" + character + " is not in the string because indexOf function return " + indexOf(string, character));
// }
// else {
//     document.write("<br>" + "String: " + string);
//     document.write("<br>" + "Index of character \"" + character + "\" is " + indexOf(string, character));
// }

// function indexOf(str, char) {
//    var index = -1;
//     for (let i = 0; i < str.length; i++) {
//         if (char === str[i]) {
//             index = i;
//             break;
//         }
//     }
//     return index;
// }

// Question Number 6
// var string = prompt("Enter string");
// document.write("<br>" + "String before operation:" + string);
// document.write("<br>" + "String after operation: " + removingVowel(string));
// function removingVowel(str) {
//     newStr = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
//             continue;
//         }
//         newStr += str[i];
//     }
//     return newStr;
// }

// Question Number 7

// var  string = prompt("Enter string");
// document.write("<br>" + "String before operation: \"" + string + "\"");
// document.write("<br>" + "Occurrences of any two vowels in succession in a line of text : " + occuranceOfDoubleVowel(string));

// function occuranceOfDoubleVowel(str) {
//     var array = [];

//     for (var i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
//             if (str[i + 1].toLowerCase() === "a" || str[i + 1].toLowerCase() === "e" || str[i + 1].toLowerCase() === "i" || str[i + 1].toLowerCase() === "o" || str[i + 1].toLowerCase() === "u") {
//                 array.push(str.slice(i, i + 2));
//             }
//         }
//     }
//     return array;
// }

// Question Number 8
// var number = Number(prompt("Enter Distance ib-n kilometer"));
// inMeter(number);
// inFeet(number);
// inInch(number);
// inCentimeter(number);

// function inMeter(num) {
//     document.write("<br>" + " our Distance in meter is " + (num * 1000));
// }
// function inFeet(num) {
//     document.write("<br>" + " our Distance in feet is " + (num * 3281));
// }
// function inInch(num) { 
//     document.write("<br>" + " our Distance in inch is " + (num * 39370));
// }
// function inCentimeter(num) {
//     document.write("<br>" + " our Distance in centimeter is " + (num * 100000));
// }

// Question Number 9
// var overTime = Number(prompt("Enter overTime hours"));
// var TimePay = overTime * 12;

// document.write("<br>" + "Overtime salary of employ is " + overTime + " RS");
