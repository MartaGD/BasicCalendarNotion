const urlWidget = new URL(window.location.href);

function setCalendar(){
aux = new Date();
var year = aux.getFullYear();
document.getElementById("monthArea").innerHTML = aux.toLocaleString('default', { month: 'long' }).toUpperCase();
document.getElementById("dayNumArea").innerHTML = aux.toLocaleString('default', { day: 'numeric' }).toUpperCase();
document.getElementById("dayArea").innerHTML = aux.toLocaleString('default', { weekday: 'long' }).toUpperCase();

if(urlWidget.searchParams.get("color1") !== ""){
    document.getElementById("monthArea").style.backgroundColor = urlWidget.searchParams.get("color1");
};
if(urlWidget.searchParams.get("color2") !== ""){
    document.getElementById("calendarArea").style.backgroundColor = urlWidget.searchParams.get("color2");
};
if(urlWidget.searchParams.get("text") !== ""){
    document.getElementById("Calendar").style.color = urlWidget.searchParams.get("text");  
};

}