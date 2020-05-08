const back = document.querySelector("body");

function random(num)
{
    return Math.floor(Math.random() * (num + 1));
}

function ChangeColor(event)
{
    var ran = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    const key = document.querySelector(`div[data-key="${event.key}"]`);
    const audio = document.querySelector(`audio[data-key="${event.key}"]`);
    
    key.style.backgroundColor = ran;
    audio.play();
}


window.addEventListener('keypress', ChangeColor);