function compute()
{
    //get all required elements
    let principle = document.getElementById("principal");
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let result = document.getElementById("result");
    
    //calculating interest
    let interest = principle.value * years * rate/100;

    let year = new Date().getFullYear()+parseInt(years);

    //user input validation
    if(principle.value <= 0 ) {
        alert("Enter a positive number")
        principle.focus();
        return false;
    } else {
        result.innerHTML = `If you deposite \<span class="highlight">${principle.value}</span>,<br>\ 
        at an interest rate of \<span class="highlight">${rate}%</span>.<br>\
        You will receive an amount of \<span class="highlight">${interest}</span>,<br>\
        in the year \<span class="highlight">${year}</span>\ `
        return true;
    } 
}
//function for updating range value on onchange event
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}