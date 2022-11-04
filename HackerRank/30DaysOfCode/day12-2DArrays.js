'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    
    let sums = [];
    
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 6; j++){
            if(i <=3 && j <= 3) {
                let sum = 0;
                    
                sum += arr[i][j];
                sum += arr[i][j+1];
                sum += arr[i][j+2];
                sum += arr[i+1][j+1];
                sum += arr[i+2][j];
                sum += arr[i+2][j+1];
                sum += arr[i+2][j+2];
                    
                sums.push(sum); 
            }
            
        }
    }
    
    const sorted = sums.sort((a, b) => a - b);
    
    console.log(sorted[sorted.length-1])
}
