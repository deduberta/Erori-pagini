//Display date
const today = new Date()
const day = today.getDay()
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log("Today is:" + dayList[day])
let hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
let prepand = (hour >= 12) ? hour - 12 : hour;
hours = (hour >= 12) ? (hour - 12) : hour

if (hours === 0 && prepand === 'PM') {
    if (minutes === 0 && seconds === 0) {
        hours = 12;
        prepand = "Noon";
    } else {
        hours === 0 && prepand === 'PM'
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minutes === 0 && seconds === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}
console.log(`Current Time : ${hour}${prepand} : ${minutes} : ${seconds}`);


//print_current page
const print_current_page = () => {
    window.print();
}

//get the current date
let today1 = new Date();
let dd = today1.getDate();

let mm = today1.getMonth() + 1;
const yyyy = today1.getFullYear();
if (dd < 10) {
    dd = `0${dd}`;
}

if (mm < 10) {
    mm = `0${mm}`;
}
today1 = `${mm}-${dd}-${yyyy}`;
console.log(today1);
today1 = `${mm}/${dd}/${yyyy}`;
console.log(today1);
today1 = `${dd}-${mm}-${yyyy}`;
console.log(today1);
today1 = `${dd}/${mm}/${yyyy}`;
console.log(today1);


// the area of a triangle
const a = 5;
const b = 6;
const c = 7;
const s = (a + b + c) / 2
const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

console.log("Aria triunghiului cu laturile 5, 6, 7 este:" + area)

//rotate w3source

const animate_string = (id) => {
    let element = document.getElementById(id);
    let textNode = element.childNodes[0]; // assuming no other children
    let text = textNode.data;

    setInterval(() => {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}

//leap year
function leapyear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log('2016' + leapyear(2016));
console.log('2000' + leapyear(2000));
console.log('1700' + leapyear(1700));
console.log('1800' + leapyear(1800));
console.log('100' + leapyear(100));


//A Program to find 1st January is being a Sunday between 2014 and 2050.
for (let year = 2014; year <= 2050; year++) {
    let day = new Date(year, 0, 1)
    if (day.getDay() === 0)
        console.log("This is the day" + year)
}
//guess number and random number match

const random = Math.ceil(Math.random() * 10)
console.log(random)
const gnumber = parseInt(prompt('Guess the number between 1 and 10 inclusive'))
if (random === gnumber)
    console.log("Good Work");
else
    console.log("try again" + gnumber)

//Write a JavaScript program to calculate days left until next Christmas
const TodayDate = new Date()
const cday = new Date(today.getFullYear(), 11, 25)
if (today.getMonth() === 11 && today.getDay() == 25) {
    cday.setFullYear(cday.getFullYear() + 1)
}
const oneDay = 1000 * 60 * 60 * 24;
console.log(`${Math.ceil((cday.getTime() - today.getTime()) / (oneDay))} days left until Christmas!`);

//mul and div of two numbers

const multiply = () => {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2
}


const div = () => {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2
}

//  celsius and farenheit transform
const CelTemp = (celsius) => {
    const cTemp = celsius;
    const ctoFahr = cTemp * 9 / 5 + 32;
    const message = `${cTemp}\xB0C is ${ctoFahr} \xB0F.`;
    console.log(message);
}
const FarhTemp = (fahrenheit) => {
    const fTemp = fahrenheit;
    const ftoCel = (fTemp - 32) * 5 / 9;
    const message = `${fTemp}\xB0F is ${ftoCel}\xB0C.`;
    console.log(message);
}
console.log(FarhTemp(34))
console.log(CelTemp(34))

//Write a JavaScript program to get the website URL (loading page)
console.log(document.URL)

//Create a variable using a user-defined name
const var_name = 'avb';
const n = 120;
this[var_name]=n
console.log(this[var_name])

//The extension of a filename.
filename='system.php'
console.log(filename.split('.').pop())

//The difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
const dif = (x) => {
    if(x>13)
        return 2*(x-13)
    else
        return x-13;
}
console.log(dif(34));

//JavaScript program to compute the sum of the two given integers. If the two values are same, then return triple their sum
const compute = (x, y) => {
    if(x===y)
        return(3*(x+y))
    else
        return x+y;
}

console.log(compute(10,20))

//JavaScript program to compute the absolute difference between a specified number and 19.  Returns triple their absolute difference if the specified number is greater than 19.
 const compute2 = (x) => {
    if(x>19)
        return 3*(x-19);
     else
         return x-19;
 }
 compute2(3)

//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
const  check = (x,y) => {
    return(x==50||y==50||(y+x)===50)
}
console.log(check(45,60))

//JavaScript program to check whether a given integer is within 20 of 100 or 400
const testHundred = (x)=> {
    return((Math.abs(100-x)<=20)||
        (Math.abs(400-x)<=20))
}
console.log(testHundred(30))

//JavaScript program to  check from two given integers, whether one is positive and another one is negative.

const check2 = (x,y) =>{
    if((x<0&&y>0)||(x>0&&y<0))
         return true
    else
        return false
}

console.log(check2(4,-5))

//javaScript program to create a new string adding “Py” in front of a given string.  If the given string begins with “Py” then return the original string.
const checkstring = (str) => {
    if (str === null || str === undefined || str.substring(0, 2) === 'Py')
    {
        return str;
    }
    return "Py"+str;

}

console.log(checkstring('ana'))
console.log(checkstring('Pyana'))

//Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

const removeChar = (str, char_pos) => {
   let part1=str.substring(0,char_pos);
   let part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}

console.log(removeChar("anmasfdas"))
function exchangeChar (str){
    if(str.length>=1){
        let changeChar = str.replace(str[str.length-1], str[0]).replace(str[0], str[str.length-1]);
        return changeChar ;
    }
};
console.log(exchangeChar("Hello"));

//Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
  const newString = (str) => {
      let firstLet = str.substring(0,1)
       return (firstLet+str+firstLet)
  }

  console.log(newString('berta'))

//Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

const divisible = (x) => {
      while(x>0){
          if(x%3===0||x%7===0)
              return true
          else return false
      }
}

console.log(divisible(21))

//Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

const three_digit = (x) => {

}