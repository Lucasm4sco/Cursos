function main(number) {
    const n = parseInt(number);
    for(let i = 1; i<= 10; i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
}

main('5');