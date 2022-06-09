// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
    var doesEveryElementMatch = true;

    for (var i = 0; i < array.length; i++) {
      doesEveryElementMatch = callbackFunction(array[i]);
    }
  
    return doesEveryElementMatch;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  function isTwo(number) {
      return number===2
  }

  var arr1 = [2,3,4]
  var arr2 = [2,2,2]
  var arr3 = [1,2,2]
  var arr0 = [0,0,0]
  var arr4 = [-2,-2,-2]

  function assertEqual(actual,expected,testName) {
    if(actual === expected) {

    }
  }
  
  // TESTS CASES
  var actual
  var expected 
  assertEqual()