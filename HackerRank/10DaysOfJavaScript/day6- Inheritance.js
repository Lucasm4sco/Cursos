class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

Rectangle.prototype.area = function(){
    return this.w * this.h;
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
    constructor(sideLength){
        super(sideLength, sideLength);
    }
}

const rectangle = new Rectangle(12, 6);
const square = new Square(9);

console.log(rectangle.area());
console.log(square.area())