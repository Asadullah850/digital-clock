

function displyTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    let amPm = document.getElementById('amPm');
    
    // ternary operator
        min = (dateTime.getMinutes() <10 ) ? "0" + dateTime.getMinutes() : dateTime.getMinutes();
        sec = (dateTime.getSeconds() < 10 ) ? "0" + dateTime.getSeconds() : dateTime.getSeconds();
        amPm.innerHTML = ( dateTime.getHours >= 12 ) ? ("AM") : "PM";
   
    if (hrs > 12) {
        hrs = hrs - 12;
    }else if (hrs == 12) {
        hrs = 12;
    }
    else{
        hrs = hrs;
    }
    
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('secounds').innerHTML = sec;
    
}
// console.log(displyTime())
setInterval(displyTime, 10);