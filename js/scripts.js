//Business Logic

function roboger(userInput) {
  const numArray = [];
  numInput = parseInt(userInput);
  for (let i = 0; i <= numInput; i++) {
    numArray.push(i)
  }

  const inputArray = numArray.map(function(num) {
    return num;
  });

  const 

}







//User Interface Logic
$(document).ready(function() {  
  $("userInput").submit(function(event) {
    event.preventDefault();

    const numInput = $("input#input1").val();

  })
})