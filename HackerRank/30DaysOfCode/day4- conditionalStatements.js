function main(n) {
    const N = parseInt(n, 10);
    
    if(N%2) console.log('Weird');
    if(N%2 === 0 && N>=2 && N<=5) console.log('Not Weird');
    if(N%2 === 0 && N>=6 && N<=20) console.log('Weird');
    if(N%2 === 0 && N>20) console.log('Not Weird');
}

main(3);
main(32);