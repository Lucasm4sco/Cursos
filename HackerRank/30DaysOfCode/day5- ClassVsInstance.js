class Person {
    
    constructor(initialAge){
        this.age = initialAge > 0 ? initialAge : 0;
        initialAge < 0 && console.log('Age is not valid, setting age to 0.');
    }
    
    amIOld(){
        if(this.age < 13) return console.log('You are young.');
        if(this.age >= 13 && this.age < 18) return console.log('You are a teenager.');
        console.log('You are old.');
    }
    
    yearPasses(){
        ++this.age;
    }
}

const p = new Person(18);
p.amIOld();