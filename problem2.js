//problem-02
// get a function named evenOdd
// in this function we input a string data. after that we count the length of the string.if the string length is even the function returned even and if odd the function returns odd
function evenOdd(string) {
    //error handling
    if (typeof string !== 'string') {
        return 'Please Enter String please';
    }
    else {
        let stringLength = string.length;
        if (stringLength % 2 == 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
}
//call function
// console.log(evenOdd('Phero'));
