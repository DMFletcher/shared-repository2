background(255, 255, 255);
var x1 = 150;
var x2 = 212;
var y = 200;
// tomato
noStroke();
fill(224, 90, 90);
ellipse(x1, 200, 150, 150);
ellipse(x2, 200, 150, 150);

// stem
fill(48, 130, 31);
rect(176, 103, 12, 32);

// take a bite out of the tomato!
draw = function () {
    mouseClicked = function () {
        //stroke(0,0,0);
        fill(255, 255, 255);

        ellipse(mouseX, mouseY, 25, 55);
        ellipse(mouseX, mouseY, 55, 25);
        ellipse(mouseX - 15, mouseY - 15, 15, 15);
        ellipse(mouseX + 15, mouseY - 15, 15, 15);
        ellipse(mouseX + 15, mouseY + 15, 15, 15);
        ellipse(mouseX - 15, mouseY + 15, 15, 15);
    };
};