// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {

    if(num === 0){
        return 0; 
    }

    //used to determine if - or + 
    //returns either 1 or -1
    let sign = Math.sign(num) 

    let numAsText = num.toString();
    let newNum = ''
    
    for(let i = numAsText.length-1; i>=0; i--){
        newNum += numAsText[i]
        newNum = parseInt(newNum)
    }

    return newNum * sign 
     
}

module.exports = reverseInt;

    //case with negatives
    //previous solution; will not pass test for 'flipping positive number' 
    // if(newNum.includes('-')){
    //     let spread = [...newNum]; 
    //     spread.unshift('-');
    //     spread.pop(); 
    //     let text = spread.toString();
    //     text = text.replace (/,/g, "");
    //     return parseInt(text) //which now converts it back to a string
        
    // }

