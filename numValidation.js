// To ensure that the user enters a numeric values for the number of burritos ordered

// https://www.w3schools.com/jsref/jsref_isnan.asp
// https://api.jquery.com/jquery.isnumeric/

function numValidation(element)
{
     var textBox = document.getElementById("phonenumber");
         if(typeof (textBox) === 'number')
         {
          alert('Please enter a number');
          return false;
         }

}
