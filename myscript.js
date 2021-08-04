
window.setInterval("refresh()",1000);
function refresh(){
    var d = new Date();
    var n = d.toLocaleTimeString();
    document.getElementById("time").innerHTML=n;
}