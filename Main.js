/**
 * Created by jeffreydorney on 8/9/16.
 */

// fizzbuzz javascript program

var start = 1;
var end = 100;
var fizz = "Fizz";
var buzz = "Buzz";

// doIt(start, end);

for(var currentNumber = start; currentNumber <= end; currentNumber++) {
    if( (currentNumber % 3 == 0) && (currentNumber % 5 == 0) ) {
        console.log(fizz + buzz);
    } else if(currentNumber % 3 == 0) {
        console.log(fizz);
    } else if(currentNumber % 5 == 0) {
        console.log(buzz);
    } else {
        console.log(currentNumber);
    }
}

