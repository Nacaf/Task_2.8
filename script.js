//Tasks 2.8

/*function calc (num_1, num_2, mathSign){
    if (mathSign == "+"){
        return num_1 + num_2;
    } else if (mathSign == "-"){
        return num_1 - num_2
    } else if (mathSign == "*"){
        return num_1 * num_2
    } else if (mathSign == "/") {
        return num_1 / num_2  
    }
    
}
console.log(calc(23,27, "+"));*/

/*let isLucky =  (sixDigitNumber) =>  {
  let nums = sixDigitNumber.split("");
  console.log(nums);
  if(+nums[0] + +nums[1] + +nums[2] == +nums[3] + +nums[4] + +nums[5]) {
    return true;
  } else {
    return false;
  }

}
console.log(isLucky('333207'));*/


//Task 2.8 BONUS 3!
/*function capitalizeWords  (text) {
  let splitted = text.split(" ");
  for (let i = 0; i < splitted.length; i++){
    splitted[i] = splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1); 
    }
    
    let str = splitted.join(" ");
    return  str;
  }
console.log(capitalizeWords ("my name is najaf"));*/

//Task 2.8 Bonus 4 

/*function isEven (x) {
if (x % 2 == 0) {
    return true
} else {
    return false
}
}
console.log(isEven(24));*/

//Task 2.8 Bonus 5

/*function fourth (x) {
return x ** 4;
}

console.log(fourth(3));*/

//Task 2.8 Bonus 6

/*function isValidNumber (num){


if(num.charAt(0) == "+" && num.length == 11) {
    return true;
} else {
    return false;
}

}
console.log(isValidNumber('+7012345678'));*/


//Task 2.8 Bonus 7

/*function numCounter (text) {
   let splitted = text.split("");
    
   return splitted.length;
}
console.log(numCounter("My name is Najaf"));*/

