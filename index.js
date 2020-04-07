let gameON = false;
let colors = [];
let steps = 0;
$("#green").click(function (e) {
    if(gameON){
    pressAnmie("#green");
    checkColor("green");
    }

});
$("#red").click(function (e) {
    if(gameON){
    pressAnmie("#red");
    checkColor("red");
    }
});
$("#yellow").click(function (e) {
    if(gameON){
    pressAnmie("#yellow");
    checkColor("yellow");
    }

});
$("#blue").click(function (e) {
    if(gameON){
    pressAnmie("#blue");
    checkColor("blue");
    }
});

function checkColor(color) {
if(colors[steps]==color){
    steps++;
}
else{
    gameOver();
}
if(steps==colors.length){
    steps=0;
    console.log(colors);
    setTimeout(function () {
        getNextColor(); 
    }, 500);
    

}
}

function gameOver(){
    $("#level-title").text("Game is over Press any key to start over");
    gameON=false;
    new Audio("sounds/wrong.mp3").play();   
    $(document.body).addClass("game-over");
    setTimeout(function () {
        $(document.body).removeClass("game-over");
    }, 100);
}



function pressAnmie(id) {
    $(id).addClass("pressed");
    setTimeout(function () {
        $(id).removeClass("pressed");
    }, 100);
}


$(document).keypress(function (e) {
    if (!gameON) {
        colors = [];
        steps = 0;
        gameON = true;
        setTimeout(function () {
            getNextColor(); 
        }, 100);
    }

});
function getNextColor() {
    $("#level-title").text(`Level ${colors.length + 1}`);
    let nextColor = Math.floor(Math.random() * 4);
    let newColor;
    switch (nextColor) {
        case 0:
            new Audio("sounds/green.mp3").play();
            newColor = "green";
            break;
        case 1:
            new Audio("sounds/red.mp3").play();
            newColor = "red";
            break;
        case 2:
            new Audio("sounds/yellow.mp3").play();
            newColor = "yellow";
            break;
        case 3:
            new Audio("sounds/blue.mp3").play();
            newColor = "blue";
            break;

    }
    $("#" + newColor).fadeOut(100).fadeIn(100);
    colors.push(newColor);

}

