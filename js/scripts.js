$(document).ready(function() {
// input to collect user data  
$('#inputButton').click('submit', function(event) {
    event.preventDefault();
    var numberList = numberArray();
    console.log(numberList);
    numberConvert(numberList);
  });  
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
  //loop to prase array into new array == #'s into words
  function numberConvert(list_1) {
    var wordList = ""
    list_1.forEach(function(thing) {
      wordList = wordList.concat("kapow");
      console.log(wordList);
    });
    $('#numberWords').append(wordList);
  }
// let results = startThis();

//loop to prase array into new array == #'s into words
});
























