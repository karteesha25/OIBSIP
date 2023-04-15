function fahr(){
        var c=document.my_form.temp.value;
        var f= (c*1.8)+32;
        alert("The converted temperature is" +f+ "F");
    }
function cel(){
    var f=document.my_form.temp.value;
    var c = (f-32)*1.8;
    alert("The converted temperature is" +c+ "C");
}