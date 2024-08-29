let a = +prompt("Birinchi raqamni kiriting");
let b = prompt("qiymat kiriting");
let c = +prompt("ikkinchi sonni kiriting");
if(b == "+"){
    alert(a + c);
}
if(b == "-"){
    alert(a - c);
}
if(b == "*"){
    alert(a * c);
}
if(b == "/"){
    alert(a / c);
}

if(b == "%"){
    alert(a * c / 100);
}

else{
    alert("Notogri qiymat kiritdingiz");
}
