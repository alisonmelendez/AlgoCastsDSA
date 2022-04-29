// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let newObj = {}; //setting our str to this new obj
    let maxCharacter = "";
    let max = 0;
    // newObj[char] = 1 ex) newObj[h] = 1 (set the key h to have a value of 1)
    for(let char of str){
        if(newObj[char] === undefined){
            newObj[char] = 1
        } else {
            newObj[char]++
        }
    } 
    for(let i in newObj){
        // console.log(key) //the keys of the obj (letters)
        // console.log(newObj[key]) //the values of the obj
        if(newObj[i] > max){
            max = newObj[i] //the max value 
            maxCharacter = i //the key of that max value 
        }
    } return maxCharacter
}

module.exports = maxChar;
