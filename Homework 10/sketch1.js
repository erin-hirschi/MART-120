var pupils1X = 203;
var pupils1Y = 138;
var pupils1Direction = 1;

var pupils2X = 297;
var pupils2Y = 138;
var pupils2Direction = 1;

var eyebrowsY = 100;
var eyebrowsDirection = 0.25;

var heartX = 250;
var heartY = 360;
var heartDirection = 2;

var heart2x = 225;
var heart2Y = 350;
var heart2Direction = 2;

var heart3x = 275;
var heart3Y = 350;
var heart3Direction = 2;

var heart4x = 250;
var heart4Y = 400;
var heart4Direction = 2;

var size = 30;
var count = 0;
var sizeDirection =1;

function setup()
{
    createCanvas(500, 600);
 }

function draw()
{
                background(246,139,171);

                // head
                fill(249,193,178);
                circle(250,150,215);

                // body
                fill(36,140,9);
                triangle(500,600,250,257,0,600);

                // glasses
                fill(210, 230, 241);
                square(175,110,56);
                square(269,110,56);

                // eyes
                fill(255,255,255);
                circle(203,138,40);
                circle(297,138,40);

                // pupils
                fill(0,0,0);
                circle(pupils1X,pupils1Y,10);
                circle(pupils2X,pupils2Y,10);
                pupils1X+=pupils1Direction;
                if(pupils1X >= 213 || pupils1X <= 193)
                {
                    pupils1Direction *= -1;
                }
                pupils2X+=pupils2Direction;
                if(pupils2X >= 307 || pupils2X <= 287)
                {
                    pupils2Direction *= -1;
                }

                // glasses frames
                rect(231,125,38,10);
                rect(325,125,30,10);
                rect(145,125,30,10);

                // arms
                fill(55,113,31);
                rect(145,450,35,100);
                rect(320,450,35,100);

                // hands
                fill(249,193,178);
                square(145,550,35);
                square(320,550,35);

                // nose
                fill(249,186,170);
                quad(240,185,250,145,260,185,250,195);

                // hair
                fill(100,50,25);
                quad(245,43,145,125,125,350,100,70);
                quad(255,43,355,125,375,350,400,70);

                // lips
                fill(245,134,152);
                quad(203,210,250,205,297,210,250,210);
                quad(203,210,250,220,297,210,250,230);

                // teeth
                fill(255,255,255);
                quad(203,210,250,210,297,210,250,220)

                // eyebrows
                fill(100,50,25)
                rect(175,eyebrowsY,56,10)
                rect(269,eyebrowsY,56,10)
                eyebrowsY+=eyebrowsDirection;
                if(eyebrowsY >= 105 || eyebrowsY <= 90)
                {
                    eyebrowsDirection *= -1;
                }

                //heart
                fill(176, 28, 29)
                quad(heart2x,heart2Y,heartX,heartY,heart3x,heart3Y,heart4x,heart4Y)
                heartX+=heartDirection;
                if(heartX >= 270 || heartX <= 230)
                {
                    heartDirection *= -1;
                }
                heartY+=heartDirection;
                if(heartY >= 380 || heartY <= 340)
                {
                    heartDirection *= -1
                }

                fill(154, 102, 233)
                textSize(size);
                size+= sizeDirection;
                count++;
                if(count > 5)
                {
                    sizeDirection *= -1;
                    count = 0;
                }
                text("IT'S ME!!!", 250,500);


                //i am not too sure what happened and i am not really sure how to fix it but it does technically meet the requirement
            }