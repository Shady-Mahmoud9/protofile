const pianokeys =document.querySelectorAll(".piano-Keys .key"),
 volumeslider =document.querySelector(".vol-slid input"),
 keysckecbox =document.querySelector(".keys-box input");


let allkeys = [] ,
audio =new Audio("a.mp3");

const playvoice =(key) => {
    audio.src =`audios/${key}.mp3`
    audio.play();

    const clickedkey =document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    setTimeout(() => {
        clickedkey.classList.remove("active");

    },150)
    
}

pianokeys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click" ,() => playvoice(key.dataset.key));
    
});
const handlevolume =(e) => {
    audio.volume =e.target.value;
}
const showHidekeys =(e) => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

const pressedkey =(e) =>{
     if(allkeys.includes(e.key)) playvoice(e.key);
}
document.addEventListener("keydown", pressedkey);
volumeslider.addEventListener("input", handlevolume);
keysckecbox.addEventListener("click", showHidekeys);



