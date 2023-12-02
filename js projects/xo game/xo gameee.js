let turn ="x" ;
let title =document.querySelector(".title");
let squres =[];
function finish(num1,num2,num3){
    title.innerHTML=`${squres[num1]} winner`
    document.getElementById("item"+num1).style.background="#000";
    document.getElementById("item"+num2).style.background="#000";
    document.getElementById("item"+num3).style.background="#000";

    setInterval(function(){title.innerHTML += "."},1000);
    setTimeout(function(){location.reload()},4000);

}

function win(){
for(let i=1 ; i<10 ;i++){
    squres[i] =document.getElementById("item"+ i).innerHTML;
}
 if(squres[1] == squres[2] && squres[2] == squres[3] && squres[1]!= ""){
          finish(1,2,3)
 }
 else if(squres[4] == squres[5] && squres[5] == squres[6] && squres[4]!= ""){
      finish(4,5,6)
 
}
else if(squres[7] == squres[8] && squres[8] == squres[9] && squres[7]!= ""){
      finish(7,8,9)
}
else if(squres[1] == squres[4] && squres[4] == squres[7] && squres[1]!= ""){
      finish(1,4,7)
}
else if(squres[1] == squres[5] && squres[5] == squres[9] && squres[1]!= ""){
      finish(1,5,9)
}
else if(squres[2] == squres[5] && squres[5] == squres[8] && squres[2]!= ""){
      finish(2,5,8)
}
else if(squres[3] == squres[6] && squres[6] == squres[9] && squres[3]!= ""){
      finish(3,6,9)
}
else if(squres[3] == squres[5] && squres[5] == squres[7] && squres[3]!= ""){
      finish(3,5,7)
}




}



function game(id){
    let elem =document.getElementById(id);
    if(turn ==="x" && elem.innerHTML == ""){
        elem.innerHTML="X";
        turn = "o";
        title.innerHTML="O";
    }
    else if(turn === "o" && elem.innerHTML==""){
        elem.innerHTML="O";
        turn = "x";
        title.innerHTML="X";
    }
    win();
}

