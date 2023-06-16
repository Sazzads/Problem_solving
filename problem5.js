//problem-05
// get a function named gemsToDiamond
// in this funtion we input 3 number values and here first value is multiply by 21 , 2nd value is multiply with 32 and 3rd value is multiply with 43. the sum of 1st,2nd and 3rd value is gratter then 1000*2 it subtract by 2000 and iff it is less then 1000*2 it returns the acutal value 
function gemsToDiamond(friend1, friend2, friend3) {
    //error handling
    if (typeof friend1 !== 'number' || typeof friend2 !== 'number' || typeof friend3 !== 'number') {
        return ('Please enter the valid Number');
    }
    else {
        let friendOnePower = friend1 * 21;
        let friendTwoPower = friend2 * 32;
        let friendThreePower = friend3 * 43;
        let friendTotalPower = friendOnePower + friendTwoPower + friendThreePower;
        if (friendTotalPower > (1000 * 2)) {

            return friendTotalPower - 2000;
        }
        else {
            return friendTotalPower;
        }
    }

}
//call function
// console.log(gemsToDiamond(1, 1, 1));