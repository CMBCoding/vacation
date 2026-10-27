document.getElementById("vacation-form").onsubmit = () => {

    let isValid = true;

    clearErrors();

    let travelers = document.getElementById("travelers").value;
    let destination = document.getElementById("destination").value;

    if (travelers == 0) {
        isValid = false;
        document.getElementById("trvl-error").style.display = "block";
    }

    if (destination === "none") {
        isValid = false;
        document.getElementById("dest-error").style.display = "block";
    }

    return isValid;

}

function clearErrors() {
    let errors = document.getElementsByClassName("error-msg");

    for(let i =0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}