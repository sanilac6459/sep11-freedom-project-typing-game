           // intro page background

           // text
            var textY = [];
            var textX = [];

            function setup() {
                createCanvas(2100, 1000);



               // SET text width and height to random
              for (let i = 0; i < 100; i++) {

                textY[i] = random(0,height);
                textX[i] = random(410,600);
              }
            }

            function draw() {
              // background(176, 224, 230);

              // TEXT
              stroke(0)
              textAlign(LEFT);
              textSize(20);
              // stroke(0)
              // strokeWeight(1);


            // text's height increases
              for (let i = 0; i < textY.length; i++) {

               noStroke()
                fill(15, 174, 189)
                text("keysanity", textX[i] - 400, textY[i]);
                text("keysanity", textX[i] - 200 , textY[i]);
                text("keysanity", textX[i] - 50, textY[i]);
                text("keysanity", textX[i] + 50, textY[i]);
                text("keysanity", textX[i] + 200, textY[i]);
                text("keysanity", textX[i] + 300, textY[i]);
                text("keysanity", textX[i] + 500, textY[i]);
                text("keysanity", textX[i] + 600, textY[i]);
                text("keysanity", textX[i] + 800, textY[i]);
                text("keysanity", textX[i] + 1000, textY[i]);
                text("keysanity", textX[i] + 1200, textY[i]);
                text("keysanity", textX[i] + 1360, textY[i]);


                textY[i]++; // text height increases by 1

                // if text is greater than the canvas height
                if (textY[i] > height) {

                  textY[i] = 0; // set text height to 0, reset height
                }
              }


             // welcoming message

              textSize(50);
              fill(255);
              stroke(0)
              strokeWeight(3);
              text("Welcome to KEYSANITY!", 750, 300)


              textSize(20);
              fill(255);
              text("Instructions: Type word exactly as shown then press enter/return to proceed", 690, 380)

              textSize(20);
              fill(255);
              text("Press spacebar, then click the start button", 840, 450)

            }



           // when user press key
              function keyPressed() {
                if(keyCode == 32) { // when the user clicks their spacebar
                  location.replace("https://sanilac6459.github.io/sep11-freedom-project-typing-game/main/index.html") // directs them to main page where they start the game
                }
              }

