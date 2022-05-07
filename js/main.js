


// Cleave JS

var cleave = new Cleave('#percent_input_amount', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});




// input not to allow letters 

function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }



  // variables

  var percent_input = document.getElementById("percent_input");
  var percent_input_amount = document.getElementById("percent_input_amount");
  var result = document.getElementById("result");  // display result
  var btn = document.getElementById("btn");  // button_Calculate
  var btn_reset = document.getElementById("btn_reset");  // button_reset




  document.getElementById("btn").addEventListener("click", calculate);


  // reset page 

  document.getElementById("btn_reset").addEventListener("click", reset);


  // function 

  function calculate(){

   

     var main_percentage = percent_input.value.replace(/,/g, '');
     var userinput_value = percent_input_amount.value.replace(/,/g, '');


     var equation = ((main_percentage/100)*userinput_value); // equation

     var numberFormatter = Intl.NumberFormat('en-US'); // number formatter
     var result_ = numberFormatter.format(equation);  // result with decimal value



     // result after click of calculate
     result.innerHTML = result_;
     btn.style.display = "none";  // change calculate button to not dispay
     btn_reset.style.display = "inline-block";  // dispaly reset button

     // input to read only after click
     percent_input.readOnly = true;
     percent_input_amount.readOnly = true;




  } // end of Calcul;ate function



    // function  to reload
  function reset(){
      location.reload();
  }