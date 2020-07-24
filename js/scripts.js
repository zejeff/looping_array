$(document).ready(function() {
//  const userNumber = 10;
  $('#inputButton').click('submit', function(event) {
    event.preventDefault();
    var numberList = numberArray();
    console.log(numberList);
    numberConvert(numberList);
  });  
    // input to collect user data
  
    //loop to parse data into an array
  function numberArray() {
    var userNumber = $('#input1').val();
    let numberList = [];
    for (let index = 1; index <= userNumber; index += 1) {
      numberList.push(index);
      console.log(numberList);
    }
      return numberList;
    }
    
//    function numberConvert(list_1) {
//      //regex evaluation block
//      //1 or 2/21 or 3/13/32 - Patterns to evaluate 
//    //  const regex_1 = /\d1
//    //  const regex_2 = 
//    //  const regex_3 =
//
//      list_1.forEach(function(thing) {
//        if (thing = regex_1) {}
//    }
// let results = startThis();

//loop to prase array into new array == #'s into words
});





























