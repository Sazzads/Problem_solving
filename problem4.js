//problem-04
// get a function named findingBadData
// here we input an array of age. if any element of an array is negative, it count and return the negative element of the array
function findingBadData(AgeArray) {
    //error handling
    if (Array.isArray(AgeArray) == false) {
        return ('Please Enter The array!!');
    }
    else {
        let negativeAgeCount = 0;
        for (let i = 0; i < AgeArray.length; i++) {
            //error handling
            if (typeof AgeArray[i] != 'number') {
                return 'Please enter all array element in number!!'
            }
            else if (AgeArray[i] < 0) {
                negativeAgeCount++;
            }
        }
        return negativeAgeCount;
    }
}
//call function
// console.log(findingBadData(array=[2, -5, -7, -13  ]));

