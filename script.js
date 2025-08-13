const urlWidget = new URL(window.location.origin+window.location.pathname+"/basicCalendar/index.html");
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function copyAreaBtn() {
    // Get the text field
    var copyText = document.getElementById("urlArea");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

function setColor(id, color){
    switch(id){
        case "color1":
            document.getElementById("monthArea").style.backgroundColor = color;
            urlWidget.searchParams.set("color1", color);
            document.getElementById("urlArea").innerHTML = urlWidget;
            break;
        case "color2":  
            document.getElementById("calendarArea").style.backgroundColor = color;
            urlWidget.searchParams.set("color2", color);
            document.getElementById("urlArea").innerHTML = urlWidget;
            break;
        case "colorText":
            document.getElementById("Calendar").style.color = color;
            urlWidget.searchParams.set("text", color);
            document.getElementById("urlArea").innerHTML = urlWidget;
            break;
        default:
            console.error("Invalid color selector ID");
            break;
    }
}

function onLoad(){
    document.getElementById("urlArea").innerHTML = urlWidget;
    setCalendar();
}

function setCalendar(){
    aux = new Date();
    var year = aux.getFullYear();
    document.getElementById("monthArea").innerHTML = aux.toLocaleString('default', { month: 'long' }).toUpperCase();
    document.getElementById("dayNumArea").innerHTML = aux.toLocaleString('default', { day: 'numeric' }).toUpperCase();
    document.getElementById("dayArea").innerHTML = aux.toLocaleString('default', { weekday: 'long' }).toUpperCase();
}

function toggleMode(){
    var element = document.getElementById("preview");
    element.classList.toggle("dark-mode");
 }
