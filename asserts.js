function assertArraysEqual(actual, expected, testName) {
    //   are actual and expected arrays the same length
    //   do actual and expected arrays have the same values
    var areEqual = true
  
    if(actual.length !== expected.length) {
      areEqual = false
    }

    if(areEqual) {
      for(var i = 0 ; i < actual.length ; i++) {
        if(areEqual && actual[i] !== expected[i]) {
          areEqual = false
        } 
      }
    }
    
    // console.log(areEqual ? 'passed' : 'FAILED ['+testName+'] Expected "'+expected+'", but got "'+actual+'"')
    if(areEqual) {
      console.log('passed')
    } else {
      console.log('FAILED ['+testName+'] Expected "'+expected+'", but got "'+actual+'"')
    }
  }
    
    var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
    var actual = 'broken'.split('');
    assertArraysEqual(actual, expected, 'splits string into array of characters');
    // console output:
    // passed
    
    // var expected = [1, 1, 2, 3, 5, 8, 13];
    // var actual = generateFirstNFibonaccis(7);
    // assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
    // // console output:
    // // FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"