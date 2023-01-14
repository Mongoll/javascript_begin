/** 1. Write a function name greeting and console.log("Hello world!") */
function greeting() {
    return 'Hello World!';
};   

console.log(greeting());

/** 2. Write a function name greeting, which contains a parameter called name then console.log("Hi" + name) */    
function greetings(username) {
    return 'Hi ' + username;
};

console.log(greetings('Vitalii'));

/** 3. Write a function to calculate the sum of two numbers */
function sum (x, y) {
    return x+y;
};

console.log(sum(5, 4));
    
/** 4. Write a function to double value of number */
function doubleValue(z){
    return z*2;
};

console.log(doubleValue(6));

// array
let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// 5. Filter method
/** Return a new array that contains number bigger than 3 */
const larger = numberList.filter(number => number > 3);
console.log(larger);

/** Return a new array that contains number less than 7 */
let smaller = numberList.filter(number => number < 7);
console.log(smaller);

/** Return new array that contains even number */
function evenNumbers(inpArr){
    let even = inpArr.filter(number => {
        return number % 2 === 0;
    });
    return even;
};

console.log(evenNumbers(numberList));

/** Return new array that contains odd number */
function oddNumbers(inpArr){
    const oddnum = inpArr.filter(number => {
        return number % 2 === 1;
    });
    return oddnum;
};

console.log(oddNumbers(numberList));
    
// 6. forEach
/** Using forEach to console.log the element in the array */
function eachEll(inpArr){
    inpArr.forEach(element => console.log(element));
};

eachEll(numberList);
    
/** Using forEach to console.log the element with its index in the array */
function eachEllIndex(inpArr){
    inpArr.forEach((element, index) => console.log(element, index));
};

eachEllIndex(numberList);

// 7. Map method
/** Using map() to square each number in the array */
function squareEllArr(inpArr){
    let square = inpArr.map(value => {
	    return Math.pow(value,2);
    });
    return square;
};

console.log(squareEllArr(numberList));
    
/** Using map() to return a new array with double value of each element in the array */
function doubleEllArr(inpArr){
    let doubleEll = inpArr.map(value => {
        return value*2;
    });
    return doubleEll;
};

console.log(doubleEllArr(numberList));

// 8. Extra task
let vegetables = ["garlic", "carrot", "broccoli", "pumpkin"];
/** 1. Sort the array in alphabetically */
function sortArr(inpArr){
    inpArr.sort();
    return inpArr;
};

console.log(sortArr(vegetables));
    
/** 2. What is the length of the array */
    console.log(vegetables.length);

// 3. Write a function called myVeggieList to console.log() the length of the array
function myVeggieList (inpArr){
    let n = 0;
    inpArr.forEach(() => n++);
    return n;
};

console.log(myVeggieList(vegetables));

/** 4. Push one more item to the array called "onion" */
    vegetables.push('onion');
    console.log(vegetables);

/** 5. Write a function using if-else condition to check if the length of the array is bigger than 4. */
function cntLessMore(inpArr){
    if (inpArr.length > 4){
        return "Array length more then 4"
    }
    else if (inpArr.length < 4){
        return "Array length less than 4"
    }
    else{
        return "Array length is 4"
    }
};

console.log(cntLessMore(vegetables));

/** 6. Using forEach or map to loop and console.log() the item in the array */
    vegetables.forEach(element => console.log("Arr contains " + element));