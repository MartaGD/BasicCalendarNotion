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
    setCalendar();
}

function setCalendar(){
    aux = new Date();
    var year = aux.getFullYear();
    document.getElementById("monthArea").innerHTML = aux.toLocaleString('default', { month: 'long' }).toUpperCase();
    document.getElementById("dayNumArea").innerHTML = aux.toLocaleString('default', { day: 'numeric' }).toUpperCase();
    document.getElementById("dayArea").innerHTML = aux.toLocaleString('default', { weekday: 'long' }).toUpperCase();
}

function setGreeting(name,hours){
    if(name==""){
        name = "Cutie";
    }
    let greeting = "Have a nice day, ";
    if(hours>=5&&hours<=11){ //morning
        greeting = "Good Morning, ";
    }else if(hours>=12&&hours<=14){ //afternoon
        greeting = "Good Afternoon, ";
    }
    else if(hours>=15&&hours<=18){ //evening
        greeting = "Good Evening, ";
    }else { //night
        greeting = "Good Night, ";
    }
    document.getElementById("greeting").innerHTML = greeting + name+"!";
    urlWidget.searchParams.set("name",name);
    document.getElementById("urlArea").innerHTML = urlWidget;
}

function setDate(date,format){
    const now = date;
    let day = now.getDate()<=9 ? "0"+now.getDate() : now.getDate();
    let month = (now.getMonth()+1)<=9 ? "0"+(now.getMonth()+1) : (now.getMonth()+1);
    let year = now.getFullYear();
    let literalDate = "";
    switch(format){
         case "dd-mm-yyyy":
            literalDate = day+"-"+month+"-"+year;
            break;
        case "mm/dd/yyyy":
            literalDate = month+"/"+day+"/"+year;
            break;
        case "mm-dd-yyyy":
            literalDate = month+"-"+day+"-"+year;
            break;  
        default: //dd/mm/yyyy
            literalDate = day+"/"+month+"/"+year;
            break;
    }
    document.getElementById("calendar").innerHTML = literalDate;
    urlWidget.searchParams.set("format",format);
    document.getElementById("urlArea").innerHTML = urlWidget;
}

function getlabel(name){
    const now = new Date();
    setGreeting(name,now.getHours());
    urlWidget.searchParams.set("name",name);
    document.getElementById("urlArea").innerHTML = urlWidget;

}

function getColor(val){
    setColor(val);

}

function toggleMode(){
    var element = document.getElementById("preview");
    element.classList.toggle("dark-mode");
 }
