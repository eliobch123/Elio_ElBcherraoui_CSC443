var left = 0;
var speed = 0;

const start = () => {
    var w = document.getElementById("width").value;
    var h = document.getElementById("height").value;
    speed = document.getElementById("speed").value;
    document.body.innerHTML = "<div id=\"rect\" style=\"width:" + w + "px; height:" + h + "px\"></div>";
    move();

}


const move = () => {
    left = parseInt(left) + parseInt(speed);
    document.getElementById("rect").style.left = left + "px";
    setTimeout(move, 50);
}
