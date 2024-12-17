var pupil1X = 215;
var pupil2X = 290;
var pupilsY = 224;
var pupils1Direction = 1;
var pupils2Direction = 1;



function setup()
    {
        createCanvas(1000,600);
    }
    

    function draw()

    {
        background(210,210,210);

        fill(0,0,0);
        textSize(15);
        text("I decided to make an artsitic piece for my final project. With that, I wanted to see if I could recreate a piece of art using code. Because I'm still new",15,20);
        text("to coding, I chose a piece of art that seems somewhat easy for me to recreate. Or at least get close to recreating. I chose a piece from Picasso", 15, 35);
        text("because of his cubism work. I chose his self-portrait from 1907. Unfortuntely there will be lines through his face.",15, 50);

        //background
        fill(157,118,76);
        rect(20,60,360,440);


        //shirts
        fill(193,176,157);
        quad(20,415, 200,425, 200,500, 20,500);
        quad(200,425, 380,395, 380,500, 220,500);
        quad(60,416, 106,360, 175,438, 120,498);
        quad(175,438, 250,500, 200,500, 120,500);
        triangle(106,360, 120,375, 125,345);

        //skin
        fill(217,128,101);
        quad(155,360, 177,300, 300,375, 250,450);

        //white shirt
        fill(233,222,210)
        quad(120,375, 137,345, 200,400, 175,438);
        quad(175,438, 200,400, 250,425, 235,486);
        quad(235,486, 250,425, 262,500, 250,500);
        quad(250,425, 262,500, 330,440, 302,375);
        quad(250,425, 300,350, 320,417, 280,465);
        quad(137,345, 147,325, 170,322, 155,360);

        //gray bit
        fill(182,176,170);
        quad(285,335, 298,330, 352,402, 330,440);

        fill(52,29,10);
        circle(195,192, 200);

        //face
        fill(221,147,123);
        ellipse(250,385,75,50);
        quad(220,400, 173,345, 333,260, 283,398);
        quad(173,345, 174,200, 334,200, 333,260);


        //ear
        fill(221,147,123);
        quad(174,220, 148,200, 125,220, 174,240);
        quad(125,220, 140,275, 174,295, 174,220);

        //forhead
        quad(334,200, 270,125, 200,150, 174,200);

        //hair
        fill(52,29,10);
        quad(270,125, 229,100, 174,200, 210,200);

        //eyebrows
        quad(211,196, 240,207, 239,210, 213,200);
        quad(265,207, 294,196, 294,198, 266,210);
        quad(294,196, 334,200, 333,203, 294,198);

        //eyes
        fill(255);
        triangle(227,215, 244,225, 227,235);
        triangle(200,216, 186,225, 201,234);
        triangle(275,216, 260,225, 275,234);
        triangle(300,214, 320,225, 300,236);
        ellipse(215,225, 40,25);
        ellipse(290,225, 40,25);

        fill(0);
        circle(pupil1X,pupilsY, 22);
        circle(pupil2X,pupilsY, 22);
        pupil1X+=pupils1Direction;
        if(pupil1X >=220 || pupil1X <= 210)
        {
            pupils1Direction *=-1;
        }

        pupil2X+=pupils2Direction;
        if(pupil2X >= 295 || pupil2X <= 285)
        {
            pupils2Direction*= -1;
        }



        quad(167,240, 166,242, 217,340, 219,337);
        line(243,216, 258,328);
        line(261,232, 276,320);
        line(276,320, 286,325);
        line(286,325, 284,332);
        line(284,332, 276,337);
        line(276,337, 237,337);
        line(237,337, 233,328);
        line(233,328, 238,320);

        line(233,328, 225,360);
        line(286,325, 290,350);

        //lips
        fill(250,183,207);
        quad(230,363, 258,359, 286,363);
        quad(230,363, 253,369, 265,369, 286,363);
       
        

        


    }    


