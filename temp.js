
    let number1 = 22;
    let number2 = 43;
    let number3 = 55;
    if (typeof number1 !== 'number' || typeof number2 !== 'number' ||typeof number3 !== 'number') {
        return('Please enter the valid Number');
    }
    else {
        let friendOnePower = number1 * 21;
        let friendTwoPower = number2 * 32;
        let friendThreePower = number3 * 43;
        let friendTotalPower = friendOnePower + friendTwoPower + friendThreePower;
        console.log(friendTotalPower);

    }


