//start for character?
var characterX = 400;
var characterY = 30;
//how the character moves?
var w = 87;
var a = 83;
var d = 65;
var s = 68;

//AAAHHHHHHH
var circle1X = 400;
var circle2X = 250;
var circle3X = 200;
var circle4X = 150;
var circle5X = 0;
var circle6X = 450;
var circle7X = 550;
var circle8X = 700;
var circle9X = 800;
var circle10X = 200;
var circle11X = 425;
var circle12X = 500;
var circle13X = 600;
var circle14X = 800;
var circle15X = 0;
var circle16X = 300;
var circle17X = 525;
var circle18X = 600;
var circle19X = 750;
var circle20X = 150;
var circle21X = 100;
var circle22X = 350;
var circle23X = 500;
var circle24X = 650;
var circleDirection = 1;

//mouse click
var mouseShapeX = 100;
var mouseShapeY = 100;






    function setup()
    {
        createCanvas(800, 1000);
    }
function draw ()
{
    background(234,233,250);

    // exit
    fill(0);
    labelExit();

    //borders
    fill(31,184,240);

    createBorders();
    

    //character
    drawCharacter();
    characterMovement();
    
    

    //circle group 1
    fill (0,0,0);
    circle(circle1X,150,15);
    circle(circle2X,150,15);
    circle(circle3X,150,15);
    circle(circle4X,150,15);
    
    circle(circle6X,150,15);
    circle(circle7X,150,15);
    circle(circle8X,150,15);
    circle(circle9X,150,15);

    //circle group 2
    fill(86,11,107);
    circle(circle10X,300,25);
    circle(circle11X,300,25);
    circle(circle12X,300,25);
    circle(circle13X,300,25);
    circle(circle14X,300,25);
    circle(circle15X,300,25);

    //circle group 3
    fill(0);
    circle(circle16X,500,55);
    circle(circle17X,500,55);
    circle(circle18X,500,55);
    circle(circle19X,500,55);
    circle(circle20X,500,55);

    //circle group 4
    fill(86,11,107)
    circle(circle21X,750,70);
    circle(circle22X,750,70);
    
    circle(circle24X,750,70);

    circle1X+=circleDirection;
    if(circle1X > width)
    {
        circle1X = 0;
    }
    circle2X+=circleDirection;
    if(circle2X > width)
    {
        circle2X = 0;
    }
    circle3X+=circleDirection;
    if(circle3X > width)
    {
        circle3X = 0;
    }
    circle4X+=circleDirection;
    if(circle4X > width)
    {
        circle4X = 0;
    }
    
    circle6X+=circleDirection;
    if(circle6X > width)
    {
        circle6X = 0;
    }
    circle7X+=circleDirection;
    if(circle7X > width)
    {
        circle7X = 0;
    }
    circle8X+=circleDirection;
    if(circle8X > width)
    {
        circle8X = 0;
    }
    circle9X+=circleDirection;
    if(circle9X > width)
    {
        circle9X = 0;
    }
    circle10X+=circleDirection;
    if(circle10X > width)
    {
        circle10X = 0;
    }
    circle11X+=circleDirection;
    if(circle11X > width)
    {
        circle11X = 0;
    }
    circle12X+=circleDirection;
    if(circle12X > width)
    {
        circle12X = 0;
    }
    circle13X+=circleDirection;
    if(circle13X > width)
    {
        circle13X = 0;
    }
    circle14X+=circleDirection;
    if(circle14X > width)
    {
        circle14X = 0;
    }
    circle15X+=circleDirection;
    if(circle15X > width)
    {
        circle15X = 0;
    }
    circle16X+=circleDirection;
    if(circle16X > width)
    {
        circle16X = 0;
    }
    circle17X+=circleDirection;
    if(circle17X > width)
    {
        circle17X = 0;
    }
    circle18X+=circleDirection;
    if(circle18X > width)
    {
        circle18X = 0;
    }
    circle19X+=circleDirection;
    if(circle19X > width)
    {
        circle19X = 0;
    }
    circle20X+=circleDirection;
    if(circle20X > width)
    {
        circle20X = 0;
    }
    circle21X+=circleDirection;
    if(circle21X > width)
    {
        circle21X = 0;
    }
    circle22X+=circleDirection;
    if(circle22X > width)
    {
        circle22X = 0;
    }
    
    circle24X+=circleDirection;
    if(circle24X > width)
    {
        circle24X = 0;
    }

    movingCircles();
    

    // 



    //character wins
    characterWins();

    //mouse click
    fill(254.153,0);
    rect(mouseShapeX,mouseShapeY,50,50);
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;

   
}

function characterMovement()
{
    if(keyIsDown(w))
     {
            characterY -= 1;   
    }
    if(keyIsDown(a))
    {
            characterY += 1;   
    }
     if(keyIsDown(d))
    {
            characterX -= 1;   
            console.log("movement: " + characterX);
    }
    if(keyIsDown(s))
    {
            characterX += 1;
    }
}
    function createCharacter(x,y)
    {
    characterX = x;
    characterY = y;
    console.log(characterX);
    }

    function drawCharacter()
    {
    fill(243,140,156);
    circle(characterX,characterY,50);
    }

function createBorders()
{
    rect(0,0,width,15);
    rect(0,0,15,height);
    rect(0,height-15,width-480,15);
    rect(480,height-15,width,15);
    rect(width-15,0,15,height);
}

function labelExit()
{
    textSize(15);
    text("EXIT!", 380, 950);
}

function characterWins()
{
    if(characetrX = 400 && characterY > 999)
        {
            fill(118,21,22);
            stroke(5);
            textSize(30);
            text("You Win!", width/2-50, height/2-50);
        }
}

function movingCircles()
{
    circle(circle5X,150,15);
    circle(circle23X,750,70);
    circle5X+=circleDirection;
    if(circle5X > width)
    {
        circle5X = 0;
    }
    circle23X+=circleDirection;
    if(circle23X > width)
    {
        circle23X = 0;
    }
}

