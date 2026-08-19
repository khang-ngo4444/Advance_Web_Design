function myFunction1() {
    var a = document.getElementById('text_1').value;
    a = parseInt(a);
    var b = document.getElementById('text_2').value;
    b = parseInt(b);
    var c = document.getElementById('select');
    var value = c.options[c.selectedIndex].value;
    value = parseInt(value);
    var k;
    switch (value){
        case 1:{
            k = (a+b)/2;
            k= parseFloat(k);
            document.getElementById('result').value = k;
        }
        case 2:{
            k = (a+(b*2))/3;
            k= parseFloat(k);
            document.getElementById('result').value = k;
        }
    }
    if(k>=9){
        document.getElementById('display').innerHTML = "Hoc sinh gioi";
        document.getElementById('display').style.color = "red";
    }
    if(k>=7 && k<9){
        document.getElementById('display').innerHTML = "Hoc sinh kha";
        document.getElementById('display').style.color = "blue";
    }
    if(k>=5 && k<7){
        document.getElementById('display').innerHTML = "Hoc sinh trung binh";
        document.getElementById('display').style.color = "yellow";
    }
    if(k<5){
        document.getElementById('display').innerHTML = "Hoc sinh yeu";
        document.getElementById('display').style.color = "green";
    }
}
function myFunction2(){
    document.getElementById('text_1').value = "";
    document.getElementById('text_2').value = "";
    document.getElementById('result').value = "";
    document.getElementById('display').innerHTML = "";
}