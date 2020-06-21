function formvalidation () {
    var uemail = document.loginform.username;
    var passid = document.loginform.password;
    /**Invoking functions with arguments */
    if (emailvalidation(uemail)) {
      if (passid_validation(passid, 6, 12)) {
        alert("Form Submitted Succesfully");
        // window.location.reload(Get);
      }
    }
    return false;
  };
  
 //Defining method emailvalidatation with parameter
 function emailvalidation(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
      return true;
    } else {
      alert("You must enter a valid email address!");
      uemail.focus();
      return false;
    }
  }
  

  //Defining method passid_valiadtion with parameters
  function passid_validation(passid, mx, my) {
    //Accessing form element
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
      alert("Password characters should be between " + mx + " to " + my);
      
      passid.focus();
      return false;
    }

    return true;
  }
  