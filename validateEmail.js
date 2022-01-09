// To ensure that a correct email format is entered
// Source: https://www.w3resource.com/javascript/form/email-validation.php
// I amended the DOM mapping, amended the messages and removed the need for a confirmation that it's a valid email which might annoy a user


function validateEmail()
{
var textBox = document.getElementById("email");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(textBox.value.match(mailformat))
{
return true;   //No pop up alert needed if valid
}
else
{
alert("You have entered an invalid email address, please try again");    //The pop up alert for an invalid email address
document.form1.email.focus();
return false;
}
}