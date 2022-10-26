function processData(input) {
    //Enter your code here
    const inputs = input.split('\n');
    const numberOfPhoneNumber = inputs[0];
    const listOfNumbers = {};
    let i = 1
    
    for(i; i <= numberOfPhoneNumber; i++){
        const [name, numberPhone] = inputs[i].split(' ');
        listOfNumbers[name] = numberPhone;
    }
    
    for(i ; i < inputs.length; i++){
        const name = inputs[i];
        if(listOfNumbers[name])
            console.log(`${name}=${listOfNumbers[name]}`);
        else
            console.log('Not found');
    }
} 

// example

let input = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`

processData(input);