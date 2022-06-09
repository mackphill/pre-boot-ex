function assertWithinRange(low, high, actual, testName) {
    // low: number value lower bound range
    // high: number value upper bound range
    // actual: number value result of function being tested
// the actual needs to be compared to --- being fit inside the low and high
// so check to see if it falls within the range 

    var areEqual = true
    // var range = high-low
//  if actual is greater than low AND less than high

    if(actual < low || actual > high) {
      areEqual = false
    }

    if(areEqual) {
      console.log('passed')
    } else {
      console.log('FAILED ['+testName+'] "'+actual+'" not within range '+low+' to '+high)
    }
  }

assertWithinRange(1, 6, dieRoll, 'die roll should be between 1 and 6');
// console output:
// passed

var price = 101;
assertWithinRange(1, 100, price, 'price should be between 1 and 100');
// console output:
// FAILED [price should be between 1 and 100] "101" not within range 1 to 100