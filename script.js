function Celcius() {
    var s=document.getElementById("w").value;
    var fahr=(s*1.8)+32;
    fah=fahr.toFixed(1);
    var res=document.getElementById("result").innerHTML="RESULT(FARENHEIT): "+fah;
}
function Faren() {
    var u=document.getElementById("w").value;
    var Cel=(u-32)/1.8;
    Ce=Cel.toFixed(1);
    var res=document.getElementById("result").innerHTML="RESULT(CELCIUS) : "+Ce;
}
function Re() {
    document.getElementById("w").value='';
    document.getElementById("result").innerHTML=" ";
}