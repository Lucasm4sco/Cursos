function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2*a+2*b;
    this.area = a * b;
}

const rectangle = new Rectangle(2, 8);
console.log(rectangle);