/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for(let letter of s)
        if(vowels.indexOf(letter) !== -1)
            console.log(letter);
            
    for(let letter of s)
        if(vowels.indexOf(letter) === -1)
            console.log(letter);
}