function clearErrors() {

    err = document.getElementsByClassName('formerror');

    for(let items of err) {
        items.innerHTML = "";
    }
}

function seterror(id, error) {

    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {

    let returnVal = true;
    clearErrors();

    let name = document.forms["myForm"]["fname"].value;

    if (name.length < 5) {
        seterror("name", "*The length of name is too short!");
        returnVal = false;
    }

    if(name.length == 0) {
        seterror('name', '*This section cannot be empty!');
        returnVal = false;
    }

    let email = document.forms["myForm"]["femail"].value;

    if (email.length > 25) {
        seterror("email", "*The length of your email is too long!");
        returnVal = false;
    }

    var phone = document.forms['myForm']['fphone'].value;

    if (phone.length != 10) {
        seterror("phone", "*Your phone number should be of 10 digits!");
        returnVal = false;
    }

    var password = document.forms['myForm']['fpass'].value;

    if (password.length < 8) {
        seterror("pass", "*Your password should be atleast 8 characters long!");
        returnVal = false;
    }

    let cpassword = document.forms['myForm']['fcpass'].value;

    if (cpassword != password) {
        seterror("cpass", "*Your password does not match the previous password!");
        returnVal = false;
    }

    return returnVal;
}