function assertObjectsEqual(actual, expected, testName) {
actual = JSON.stringify(actual)
expected = JSON.stringify(expected)
var areEqual = true
    
    if( actual.length !== expected.length) {
        areEqual = false
    }
if(areEqual) {
  for(var i = 0 ; i < actual.length ; i++) {
    if(areEqual && actual[i] !== expected[i]) {
      areEqual = false
    }
  }
}

    if(areEqual) {
        console.log('passed')
    } else {
        console.log('FAILED ['+testName+'] Expected '+expected+', but got '+actual)
    }
    
  }