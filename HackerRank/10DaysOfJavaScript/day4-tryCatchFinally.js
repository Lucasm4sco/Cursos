/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        const lettersString = s.split('');
        const reverse = lettersString.reverse();
        s = reverse.join('');
    } catch (e){
        console.log(e.message);
    } finally {
        console.log(s);
    }
}   

reverseString('abcdef');
reverseString(1234);