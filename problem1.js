//problem-01
// get a function named mindGame
//here we input a number and then the number multiply by 3 and add by 10. after that we divide by 2 and then we subtract by 5
function mindGame(number) {
    //error handling
    if (typeof number !== 'number') {
        return 'Please enter Number!!';
    }
    else {
        let output = (number * 3 + 10) / 2 - 5;
        return output;
    }
}
//call function
// console.log(mindGame(50));