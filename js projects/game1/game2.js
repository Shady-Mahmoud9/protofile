let player =document.getElementById("player");
let rock  =document.getElementById("rock");
let score = 0;

 
function toleft(){
    const lefft =parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if(lefft <= 0) return ;
    const newleft = lefft - 150 ;
    player.style.left =newleft +"px";
 }


 function toright(){
    const lefft =parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if(lefft >= 200) return ;
    const newleft = lefft  + 150 ;
    player.style.left =newleft +"px";
 }
 
 document.addEventListener("keydown",(event) => {
    if(event.key =="ArrowLeft") toleft();
    else if(event.key =="ArrowRight") toright();

 })

 rock.addEventListener('animationiteration' , () => {
    const randomposition =Math.floor((Math.random()* 3)) *150 ;
    rock.style.left =randomposition + "px";
    score++;
    
 })


 setInterval(() => {
    let playerRect = player.getBoundingClientRect();
    let rockRect = rock.getBoundingClientRect();

    if (
        playerRect.left < rockRect.right &&
        playerRect.right > rockRect.left &&
        playerRect.top < rockRect.bottom &&
        playerRect.bottom > rockRect.top
    ) {
        alert(`Game over ^_^ \n score: ${score}`);
        rock.style.top = -100 + "px";
        score = 0;
    }
}, 1);
