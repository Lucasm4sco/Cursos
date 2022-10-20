/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    const tip_percent_converted = tip_percent / 100;
    const tax_percent_converted = tax_percent / 100;
    
    let results = meal_cost + (tip_percent_converted * meal_cost) + (tax_percent_converted * meal_cost);
    console.log(Math.round(results));
}

solve(25, 17, 5);