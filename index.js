// function validateEmail() {
//     var emailText = document.querySelector('.email').value;
//     var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
//     if (emailText === pattern.test(emailText)) {
//         return true;
//     } else {
//         // alert('Please provide a valid email: ' + emailText);
//         document.querySelector(".email-error").innerHTML = "Looks likes this is not email";
//         document.querySelector(".email").style.border = "1px solid hsl(0, 100%, 74%)";
//         // document.querySelector(".icon-error").style.display = "block";
//         return false;
//     }
// }

  
  if (x == "") {
      document.querySelector(".fNameError").innerHTML = "First Name cannot be empty";
      document.querySelector(".fName").style.border = "1px solid hsl(0, 100%, 74%)";
  } else if(y == ""){
      document.querySelector(".lNameError").innerHTML = "Last Name cannot be empty";
      document.querySelector(".lName").style.border = "1px solid hsl(0, 100%, 74%)";
  } else if(z == ""){
      document.querySelector(".pWordError").innerHTML = "Password cannot be empty";
      document.querySelector(".pWord").style.border = "1px solid hsl(0, 100%, 74%)";
  } else if( e === ""){
    document.querySelector(".email-error").innerHTML = "Looks likes this is not an email";
    document.querySelector(".email").style.border = "1px solid hsl(0, 100%, 74%)";
  }


window.onload = function() {
    document.querySelector('form').onsubmit = validateForm;
}


// document.querySelector('form').onsubmit = validateEmail;



