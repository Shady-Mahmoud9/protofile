let arabic =document.getElementById("Arabic");
let English =document.getElementById("English");
let Maths =document.getElementById("Maths");
let Physics =document.getElementById("Physics");
let It =document.getElementById("It");
let result =document.getElementById("result");
let percentage =document.getElementById("percentage");
let appreciation ;

function total()
{
    result.value=+arabic.value + +English.value + +Maths.value + +Physics.value+ +It.value;
    percentage.value =(+arabic.value + +English.value + +Maths.value + +Physics.value+ +It.value)/500 * 100 ;
    
   if (percentage.value >= 85 && percentage.value <= 100) {
    appreciation = "Excellent";
} else if (percentage.value >= 70 && percentage.value < 85) {
    appreciation = "Good";
} else if (percentage.value >= 50 && percentage.value < 70) {
    appreciation = "Acceptable";
} else if (percentage.value < 50) {
    appreciation = "Failed";
} else {
    appreciation = "Enter True Degrees";
}
    percentage.innerHTML=`The result is ${result.value} and the percentage is ${percentage.value} and the appreciation is ${appreciation}`
}
// const balls = document.querySelectorAll('.ball');

//     balls.forEach((ball) => {
//       ball.style.setProperty('--x', Math.random());
//       ball.style.setProperty('--y', Math.random());
//     });