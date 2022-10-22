/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    const equalsObj = objects.filter( a => a.x === a.y );
    return equalsObj.length;
}

let x;
let y = 10;
let objects = [];

for(x = 1; x <= 10; x++)
    objects.push({x, y: --y});

console.log(getCount(objects));