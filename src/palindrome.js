function palindrome1(str) {
    // Validate input
    try {
        str = str.toString();
    } catch(e){
        return new TypeError(`${str} is not a string.`);
    }
    
    // reverse the string
    let reversed = '';
    for (const char of str) {
        reversed = char + reversed;
    }

    // return
    return reversed === str;

}

function palindrome2(str) {
    // Validate input
    try {
        str = str.toString();
    } catch(e){
        return new TypeError(`${str} is not a string.`);
    }
    
    // reverse the string
    let reversed = '';
    for (const char of str) {
        reversed = char + reversed;
    }

    // return
    return reversed === str;

}

module.exports.palindrome1 = palindrome1;
module.exports.palindrome2 = palindrome2;
