'use strict'
function displayClock(){
let x = new Date()
let hours = x.getHours( ) % 12;
hours = hours ? hours : 12;
let month=x.getMonth() + 1;
let x1=x.getFullYear()+ "-" +month+"-" + x.getDate()  ; 
x1 = x1 + " " +  hours + ":" +  x.getMinutes() + ":" +  x.getSeconds();
document.getElementById('clock').innerHTML = x1;
refresh();
 }

 function refresh(){
var refresh=1000; // Refresh rate in milli seconds
setTimeout('displayClock()',refresh)
}
