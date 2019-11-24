function anagram(strA, strB) {
    // Validate input
    try {
        strA = strA.toString();
    } catch(e){
        return new TypeError(`${strA} is not a string.`);
    }

    try {
        strB = strB.toString();
    } catch(e){
        return new TypeError(`${strB} is not a string.`);
    }

    // both the strings should be of the same length to be an anagram
    if(strA.length !== strB.length){
        return false;
    }
    
    let charMap = {}

    for (const char of strA) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (const char of strB) {
        if(!charMap[char]){
            return false;
        } else {
            charMap[char]--;
        }
    }
    
    return true;
}

module.exports = anagram;

