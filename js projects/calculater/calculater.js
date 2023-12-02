let display =document.getElementById('display')
let buttons =document.getElementsByClassName('button')
let b0 =document.getElementById('b0')
let b1 =document.getElementById('b1')
let b2 =document.getElementById('b2')
let b3 =document.getElementById('b3')
let b4 =document.getElementById('b4')
let b5 =document.getElementById('b5')
let b6 =document.getElementById('b6')
let b7 =document.getElementById('b7')
let b8 =document.getElementById('b8')
let b9 =document.getElementById('b9')
let ac=document.getElementById('ac')
let plus=document.getElementById('plus')
let multi=document.getElementById('multi')
let mins=document.getElementById('mins')



b0.onclick=function(){
    display.value +='0'
}
b1.onclick=function(){
    display.value +='1'
}
b2.onclick=function(){
    display.value +='2'
}
b3.onclick=function(){
    display.value +='3'
}
b4.onclick=function(){
    display.value +='4'
}
b5.onclick=function(){
    display.value +='5'
}
b6.onclick=function(){
    display.value +='6'
}
b7.onclick=function(){
    display.value +='7'
}
b8.onclick=function(){
    display.value +='8'
}
b9.onclick=function(){
    display.value +='9'
}
dot.onclick=function(){
    display.value +='.'
}
def.onclick=function(){
    display.value +='/'
}
multi.onclick=function(){
    display.value +='*'
}
ac.onclick=function(){
    display.value =''
}

ko.onclick=function(){
    display.value +='('
}
kos.onclick=function(){
    display.value +=')'
}
plus.onclick=function(){
    display.value +='+'
}
mins.onclick=function(){
    display.value +='-'
}
multi.onclick=function(){
    display.value +='*'
}
equal.onclick=function(){
    display.value=eval(display.value)
}
de.onclick=function(){
    display.value =display.value.slice(0,-1)
}