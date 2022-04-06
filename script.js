


function compute()
{ 
    // store the values entered by the user

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);

    // That an amount is entered and is a positive number

    if (principal=="") {
        alert("Enter a quantity, a positive number");
        document.getElementById("principal").focus();
        return false;
    } else {
        if (principal<=0) {
            alert("The amount entered is incorrect, enter a positive number")
            document.getElementById("principal").focus();
            return false;
        }
    }
// store the values entered by the user

  var message= "If you deposit <mark>"+principal+"</mark>,<br>"
                                                    +"at an interest rate of <mark>"+rate+"</mark>%.<br>"+
                                                     "You will receive an amount of <mark>"+interest+"</mark>,<br> in the year <mark>"+year+"</mark>";
    
document.getElementById("result").innerHTML = message;
    
}
// update the cup when moving the range
function updaterate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}