// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//slice, try to find letter after a space?, then use .toUpperCase() to capitalize the letter @ that position 

function capitalize(str) {
    let test = [] 
    for (let word of str.split(' ')){
        test.push(word[0].toUpperCase() + word.slice(1))
    }
        return test.join(' ');                
}

capitalize('a short sentence')

module.exports = capitalize;
