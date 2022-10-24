function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    let re = new RegExp(
            `^a.*a$|^e.*e$|^i.*i$|^i.*i$|^o.*o$|^u.*u$`
        , 'i');

    /*
     * Do not remove the return statement
     */
    return re;
}


function main() {
    
    const re = regexVar();
    const s = 'abcda';

    console.log(re.test(s));
}

main()

/*
Also resolved:

function regexVar() {
   
    return new RegExp(/^([aeiou]).*\1$/);
}

*/
