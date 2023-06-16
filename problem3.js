//problem-03
// get a function named isLGSeven
// this problem we input a number. if the number is less then 7. it returns the actual value and if it is gratter than 7, it returns the double of the result
function isLGSeven(number) {
    //error handling
    if (typeof number !== 'number') {
        return 'Please enter Number!!';
    }
    else {
        if (number < 7) {
            let output = number - 7;
            return output;
        }
        else {
            return number * 2;
        }
    }

}
//call function
// console.log(isLGSeven(6));
