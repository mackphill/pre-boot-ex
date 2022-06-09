// FUNCTION DEFINITION(S)
function square(n) {
    return n * n;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  function assertEqual(actual, expected, testName) {
      if(actual === expected) {
          console.log('passed')
      } else {
          console.log('FAILED ['+testName+'] Expected '+expected+', but got '+actual)
      }
  }
  
  // TESTS CASES
  var expected = 5*5;
  var actual = 25;
  assertEqual(actual, expected, 'square given number');
  
  var expected = 5*5;
  var actual = 10;
  assertEqual(actual, expected, 'square given number');
  
  var expected = 5*5;
  var actual = 0;
  assertEqual(actual, expected, 'square given number');
  
  var expected = 5*5;
  var actual = 1;
  assertEqual(actual, expected, 'square given number');