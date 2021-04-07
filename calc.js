num1=document.getElementById("num1");
num2=document.getElementById("num2");
num3=document.getElementById("num3");
num4=document.getElementById("num4");
num5=document.getElementById("num5");
num6=document.getElementById("num6");
num7=document.getElementById("num7");
num8=document.getElementById("num8");
num9=document.getElementById("num9");
num0=document.getElementById("num0");
plus=document.getElementById("plus");
minus=document.getElementById("minus");
multiPB=document.getElementById("multiPB");
over=document.getElementById("over");
percnt=document.getElementById("percnt");
equal=document.getElementById("equal");
calcBox=document.getElementById("calcBox");
resultEl=document.getElementById("result");
function addzero(){
calcBox.innerHTML=`${calcBox.innerHTML}0`;
}
function add1(){
calcBox.innerHTML=`${calcBox.innerHTML}1`
}
function add2(){
calcBox.innerHTML=`${calcBox.innerHTML}2`
}
function add3(){
calcBox.innerHTML=`${calcBox.innerHTML}3`
}
function add4(){
calcBox.innerHTML=`${calcBox.innerHTML}4`
}
function add5(){
calcBox.innerHTML=`${calcBox.innerHTML}5`
}
function add6(){
calcBox.innerHTML=`${calcBox.innerHTML}6`
}
function add7(){
calcBox.innerHTML=`${calcBox.innerHTML}7`
}
function add8(){
calcBox.innerHTML=`${calcBox.innerHTML}8`
}
function add9(){
calcBox.innerHTML=`${calcBox.innerHTML}9`
}
function plusF(){
  operation="+";
calcBox.innerHTML=`${calcBox.innerHTML}+`
}
function minusF(){
  operation="-";
calcBox.innerHTML=`${calcBox.innerHTML}-`
}
function multiPBF(){
  operation="*";
calcBox.innerHTML=`${calcBox.innerHTML}×`
}
function perF(){
calcBox.innerHTML=`${calcBox.innerHTML=""}`
}
function result(){
firstnum=parseInt(calcBox.innerHTML);
leng=firstnum.toString().length;
let secondN = calcBox.innerHTML.slice(leng+1, calcBox.innerHTML.length);
secondnum = parseInt(secondN);
oppp=firstnum+operation+secondnum;
resultEl.innerHTML= `${eval(oppp).toPrecision(3)}`;
}
function overF(){
operation="/";
calcBox.innerHTML=`${calcBox.innerHTML}÷`
}