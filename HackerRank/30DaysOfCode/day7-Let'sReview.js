function processData(input) {
    //Enter your code here
    const strings = input.split('\n');
    
    const num = parseInt(strings[0]);
    
    strings.forEach( (string) => {
        if(string == num) return 
        
        let output1 = "";
        let output2 = "";
        
        for(let i = 0; i < string.length; i++){
            if (i%2 == 0)
                output1 += string[i];
            else
                output2 += string[i];
        }
        console.log(output1 + ' ' + output2);
    })
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
