// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//regex - remove the whitespace and the punctuation 
//put the string in a map 
//{h:1, e:1, l:2, o:1}
//convert string to an object (both)
//make the string an array

function anagrams(stringA, stringB) {
    
    if (stringA.length !== stringB.length) {
        return false
    }
    
    let formattedAString = stringA.replace(/[\W_]/g,"").toLowerCase()
    let formattedBString = stringB.replace(/[\W_]/g,"").toLowerCase()
    
    let stringAObj = {}; 
    let stringBObj = {}; 

    for(let char of formattedAString){
        if(stringAObj[char] === undefined){
            stringAObj[char] = 1 
        } else {
            stringAObj[char]++
        }
    }
    
    for(let char of formattedBString){
        if(stringBObj[char] === undefined){
            stringBObj[char] = 1 
        } else {
            stringBObj[char]++
        }
    }
    
    //need to now check for the same chars AND the same quantity
    
    // console.log(stringAObj);
    // console.log(stringBObj);
    
    //check the values
    for(let value in stringAObj){
        if(stringAObj[value] !== stringBObj[value]){
            return false;
        }
        return true; 
    }   
}

anagrams('rail safety', 'fairy tales');
anagrams('Hi there', 'Bye there')





module.exports = anagrams;

