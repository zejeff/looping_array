$(document).ready(function() {
  const userNumber = 10;

  
  $('#inputButton').click('submit', function(event) {
    event.preventDefault();
    var numberList = numberArray();
    numberConvert(numberList);

    return 
  });  
    // input to collect user data
  //  const userNumber = parseInt($('#input1').val());
    //loop to parse data into an array
    function numberArray() {
      let numberList = [];
      for (let index = 1; index <= userNumber; index += 1) {
        numberList.push(index);
        console.log(numberList);
      }
      return numberList;
    }
    
    
    
    
    
    
    

    
    
    
// let results = startThis();

//loop to prase array into new array == #'s into words
});

