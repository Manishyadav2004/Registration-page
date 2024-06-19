function validation() {
    let firstName = document.querySelector("#firstName");
    let lastName = document.querySelector("#lastName");
    let PWD = document.querySelector("#pwd");
    let CPWD = document.querySelector("#cpwd");
    let Select = document.querySelector("#selectAny");
    let mobileNo = document.querySelector("#phno");
    let Email = document.querySelector("#email");
    if (firstName.value == "") {
        document.getElementById("fnmsg").innerHTML="Please provide your first name!";
        firstName.focus();
        return false;
    }
    if (lastName.value == "") {
        document.getElementById("lnmsg").innerHTML="Please provide your last name!";
        lastName.focus();
        return false;
    }
    if (PWD.value == "") {
        document.getElementById("pwdmsg").innerHTML="Please provide your password!";
        PWD.focus();
        return false;
    }
    if (PWD.value.length < 8) {
        document.getElementById("pwdmsg").innerHTML="Your password must be 8 digits long";
        PWD.focus();
        return false;
    }
    if (CPWD.value == "" || CPWD.value !== PWD.value) {
        document.getElementById("cpwdmsg").innerHTML="Your confirm password must be as same as password!";
        document.myForm.pwdd1.focus();
        return false;
    }
    if (Select.value == "-1") {
        document.getElementById("samsg").innerHTML="Please select your state!";
        Select.focus();
        return false;
    }
    if (mobileNo.value == "" || isNaN(mobileNo.value) || mobileNo.value.length != 10) {
        document.getElementById("phmsg").innerHTML="Please provide mobile number in this format ##########.";
        mobileNo.focus();
        return false;
    }
    return true;
    
}