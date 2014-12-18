
 
// function render() {
//     ctx.fillStyle = '#000';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = mySprite.color;
//     ctx.fillRect(mySprite.x, mySprite.y, mySprite.width, mySprite.height);
// }
 
// function run() {
//     update((Date.now() - time) / 1000);
//     render();
//     time = Date.now();
// }

// var squareMap = false;
// var sX = Math.floor(Math.random() * (1000-1) + 1);
// var sY = Math.floor(Math.random() * (600-1) + 1);

// function drawCanvas(){
//   ctx.clearRect(0, 0, w, h);
//   ctx.fillStyle = "black";
//   ctx.fillRect (0, 0, w, h);
  // snake.advance(food);
  // drawSnake();

  // if (checkCollision() === true) {
  //   // snake.retreat();
  //   // snake.draw(ctx);
  //   gameOver();
  // } else {
  //   timeout = setTimeout(gameLoop, frameLength);
  // }
// }

var canvas = document.getElementById("the_canvas");
var ctx = canvas.getContext('2d');
var mySnake = [];
var w = canvas.width;
var h = canvas.height;
var snakeBlock = 10;
var snake;
var userX = 500;
var userY = 300;
var leftwall = 0;
var rightwall = 1000;
var topwall = 0;
var bottomwall = 600;
var dir = 'right';

var food;
var foodX;
var foodY;

//you will put objects in these, and then references them
//snakeArr[0].x will get you the x value in the object of index zero
var snakeArr;

function fullSnake(){
  var length = 5;
  snakeArr = [];
  for (i = length-1; i>=0; i--){
    snakeArr.push({x: i, y:0});
  }
}

function handlingkeys(){
    var key = event.which;

    if (key === 37 && dir != 'right') {
      dir = 'left';
    } else if (key === 38 && dir != 'down') {
      dir = 'up';
    } else if (key === 39 && dir != 'left') {
      dir = 'right';
    } else if (key === 40 && dir != 'up') {
      dir = 'down';
    }
};

function newFood(){
  foodX = Math.round(Math.random()*(w - 1) + 1);
  foodY = Math.round(Math.random()*(h - 1) + 1);  
}

function makeFood(){
  ctx.fillStyle = 'white';
  ctx.fillRect (foodX, foodY, snakeBlock, snakeBlock);
};

window.addEventListener("keydown", handlingkeys, true);

function drawSnake(){
  // var prevPosArray;
  // var newPosArray = [];
  // newPosArray.push(snakeBlock);
  
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "black";
  ctx.fillRect (0, 0, w, h);

  ctx.fillStyle = "red";
  ctx.fillRect (userX, userY, snakeBlock, snakeBlock);

  if (dir === 'right') {
    userX+=2;
    if (userX >= rightwall - snakeBlock){
      userX = rightwall - snakeBlock;
    };
  } else if (dir === 'left') {
    userX-=2;
    if (userX <= leftwall) {
      userX = leftwall;
    };
  } else if (dir === 'up') {
    userY -=2;
    if (userY <= topwall) {
      userY = topwall;
    };
  } else if (dir === 'down') {
    userY +=2;
    if (userY >= bottomwall-snakeBlock){
      userY = bottomwall - snakeBlock;
    };
  }
}

// function paint()
//   {
//     //To avoid the snake trail we need to paint the BG on every frame
//     //Lets paint the canvas now
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, w, h);
//     ctx.strokeStyle = "black";
//     ctx.strokeRect(0, 0, w, h);
    
//     //The movement code for the snake to come here.
//     //The logic is simple
//     //Pop out the tail cell and place it infront of the head cell
//     var nx = snake_array[0].x;
//     var ny = snake_array[0].y;
//     //These were the position of the head cell.
//     //We will increment it to get the new head position
//     //Lets add proper direction based movement now
//     if(d == "right") nx++;
//     else if(d == "left") nx--;
//     else if(d == "up") ny--;
//     else if(d == "down") ny++;

newFood();

function all(){
  drawSnake();
  makeFood();
}



setInterval(all, 20);

// var draw = function() {
//     //clear background
//     ctx.fillStyle = "gray";
//     ctx.fillRect(0,0, canvas.width, canvas.height);
//     if (moveRight === true) {
//       //move the square to the right
//       x = x + 1;
//     } else {
//       //move the square to the left
//       x = x - 1;
//     }
//     //make sure it doesn't go off the screen though
//     if (x > canvas.width) {
//       x %= canvas.width;
//       x = 0;
//     }
//     //draw square in new position
//     ctx.fillStyle = "red";
//     ctx.fillRect (x, 300, 100, 50);
//   }


// window.addEventListener('keydown', function(e){
//     var dir = keydir[e.keycode];
      
// });

//     if (key > 46) {
//         return;
//     };

//     switch(key){
//         //left
//         case 37:
//             userX -= 15;
//                 var leftstop = (userX - snakeBlock);
//                 if (userX <= leftwall){
//                     userX = leftwall + snakeBlock;
//                 }
//             break;

//         //right
//         case 39:
//             userX += 15;
//                 var rightstop = (userX + snakeBlock);
//                 if (userX >= rightwall){
//                     userX = rightwall - snakeBlock;
//                 }
//             break;

//         //top
//         case 38:
//             userY -= 15;
//                 var topstop = (userY - snakeBlock);
//                 if (userY <= topwall){
//                     userY = topwall + snakeBlock;
//                 }
//             break;

//         //bottom
//         case 40:
//             userY += 15;
//                 var bottomstop = (userY + snakeBlock);
//                 if (userY >= bottomwall){
//                     userY = bottomwall - snakeBlock;
//                 }
//             break;
//     }
//     drawCanvas();
//     // drawSnake();
// }

function drawFood(){

}

function checkCollision(){

}





//REREAD THE BELOW TWO FUNCTIONS
// mySnake.equalCoordinates = function (coord1, coord2) {
//   return coord1[0] === coord2[0] && coord1[1] === coord2[1];
// }

// mySnake.checkCoordinateInArray = function (coord, arr) {
//   var isInArray = false;
//     $.each(arr, function (index, item) {
//     if (mySnake.equalCoordinates(coord, item)) {
//       isInArray = true;
//     }
//   });
//   return isInArray;
// }

// mySnake.game = (function(){
//     var canvas = document.getElementById("the_canvas");
//     var w = canvas.width;
//     var h = canvas.height;
//     var snake;
//     var food;
//     var ctx = canvas.getContext('2d');
//     mySnake.blockSize = 30;
//     mySnake.width = 200;
//     mySnake.height = 200;
//     var xPos = 0;
//     var yPos = 0;
//     var frameLength = 500; //new frame every .5 seconds

//     function init(){
//       snake = mySnake.snake();
//       food = mySnake.food();
//       bindEvents();
//       gameLoop();
//     }

//     // function gameLoop(){
//     //   ctx.clearRect(0,0,w,h);
//     //   // snake.advance(food);
//     //   draw();

//     //   if (snake.checkCollision()) {
//     //     snake.retreat();
//     //     snake.draw(ctx);
//     //     // gameOver();
//     //   } else {
//     //     timeout = setTimeout(gameLoop, frameLength);
//     //   }

//       // xPos += 2;
//       // yPos += 4;
//       // //clearing the canvas to update it over and over using
//       // //the setTimeout method
//       // ctx.clearRect(0,0, w, h);
//       // ctx.fillStyle = "black";
//       // ctx.fillRect (xPos, yPos, 30, 50);
      
//     }

//     function draw() {
//       // snake.draw(ctx);
//       // drawBorder();
//       food.draw(ctx);
//       // drawScore();
//     }

// mySnake.food = function() {
//   var position = [6, 6];
//   var foodx = Math.round(Math.random()*(w - 30) +30);
//   var foody = Math.round(Math.random()*(h - 30) +30);


//   function randomNum(x, y){
//     return Math.round(Math.random() * (y - x - 1) +1);
//   }

//   function draw(ctx) {
//     ctx.save();
//     ctx.fillStyle= "#f6ffff";
//     ctx.fillRect (foodx, foody, 30, 30);
//     ctx.restore();
//   }

//   return {
//     draw: draw,
//   };
// }


// mySnake.snake = function() {
//   var prevPosArray;
//   var posArray = [];
//   //why are we pushing these?
//   posArray.push([6, 4]);
//   posArray.push([5, 4]);
//   // posArray.push([4, 4]);
//   var dir = 'right';
//   var nextDirection = dir;

//   //this checks to see if the direction is valid
//   //you do not want your snake going in reverse
//   function setDirection(newDirection) {
//     //don't forget that you can declare a variable
//     //and not make it anything specific
//     var allowedDirections;

//     //use the switch statement. used to perform different
//     //based on different conditions
//     switch(dir){
//       case 'left':
//       case 'right':
//         allowedDirections = ['up', 'down'];
//         break;
//       case 'up':
//       case 'down':
//         allowedDirections = ['left', 'right'];
//         break;
//       default:
//         throw('invalid direction');
//     }
//     if (allowedDirections.indexOf(newDirection) > -1) {
//       nextDirection = newDirection;
//     }
//   }

//   function drawSection(ctx, position) {
//     var x = mySnake.blockSize * position[0];
//     var y = mySnake.blockSize * position[1];
//     ctx.fillRect(x, y, mySnake.blockSize, mySnake.blockSize);
//   }

//   function draw(ctx) {
//     ctx.save();
//     ctx.fillStyle = "#e9e4ff";
//     for(i=0; i < posArray.length; i++){
//       drawSection(ctx, posArray[i]);
//     }
//     ctx.restore();
//   }

// // THIS IS FOR COLLISION DETENTIONS
//   function checkCollision() {
//     var wallCollision = false;
//     var tailCollision = false;
//     var head = posArray[0];
//     var tail = posArray.slice(1);
//     var snakeX = head[0];
//     var snakeY = head[1];
//     var minX = 1;
//     var minY = 1;
//     var maxX = mySnake.width - 1;
//     var maxY = mysnake.height -1;
//     var horizontalHit = snakeX < minX || snakeX >= maxX;
//     var verticalHit = snakeY < minY || snakeY >= maxY;

//     if (horizontalHit || verticalHit) {
//       wallCollision = true;
//     }
//     tailCollision = mySnake.checkCoordinateInArray(head, tail);
//     return wallCollision || tailCollision;
//   }

//   function advance() {
//     //copy the snakes head
//     var nextPos = posArray[0].slice();
//     dir = nextDirection;
//     switch(dir) {
//       case 'left':
//         nextPos[0] -= 10;
//         break;
//       case 'up':
//         nextPos[1] -= 10;
//         break;
//       case 'right':
//         nextPos[0] += 10;
//         break;
//       case 'down':
//         nextPos[1] += 10;
//         break;
//         default:
//           throw('Invalid Direction');
//     }    

//     //add the new position to the beginning of the array
//     //remove the last position
//     prevPosArray = posArray.slice();
//     posArray.unshift(nextPos);
//     //did the snake eat the food? then run the eating food func
//     //else pop the tail out to the head to keep it moving
//     if (gotFood(posArray[0], food)) {
//       //trigger method triggers a specific event or function
//       $(mySnake).trigger('foodEaten', [posArray]);
//     } else {
//     posArray.pop();
//   }


//   function gotFood(head, food){
//     return mySnake.equalCoordinates(head,food.getPosition());
//   }

//   function retreat() {
//     posArray = prevPosArray;
//   }
//   return {
//     draw: draw,
//     advance: advance,
//     setDirection: setDirection,
//     checkCollision: checkCollision,
//     };
//   }
// }










// //This is in Jquery
//     var JS_SNAKE = {};


// JS_SNAKE.equalCoordinates = function (coord1, coord2) {
//   return coord1[0] === coord2[0] && coord1[1] === coord2[1];
// }

// JS_SNAKE.checkCoordinateInArray = function (coord, arr) {
//   var isInArray = false;
//   $.each(arr, function (index, item) {
//     if (JS_SNAKE.equalCoordinates(coord, item)) {
//       isInArray = true;
//     }
//   });
//   return isInArray;
// };

// JS_SNAKE.game = (function () {
//   var canvas, ctx;
//   var frameLength;
//   var snake;
//   var apple;
//   var score;
//   var timeout;
//   JS_SNAKE.width = 200;
//   JS_SNAKE.height = 200;
//   JS_SNAKE.blockSize = 10;
//   JS_SNAKE.widthInBlocks = JS_SNAKE.width / JS_SNAKE.blockSize;
//   JS_SNAKE.heightInBlocks = JS_SNAKE.height / JS_SNAKE.blockSize;

//   function init() {
//     var $canvas = $('#jsSnake');
//     if ($canvas.length === 0) {
//       $('body').append('<canvas id="jsSnake">');
//     }
//     $canvas = $('#jsSnake');
//     $canvas.attr('width', JS_SNAKE.width);
//     $canvas.attr('height', JS_SNAKE.height);
//     canvas = $canvas[0];
//     ctx = canvas.getContext('2d');
//     score = 0;
//     frameLength = 500;
//     snake = JS_SNAKE.snake();
//     apple = JS_SNAKE.apple();
//     bindEvents();
//     gameLoop();
//   }

//   function gameLoop() {
//     ctx.clearRect(0, 0, JS_SNAKE.width, JS_SNAKE.height);
//     snake.advance(apple);
//     draw();

//     if (snake.checkCollision()) {
//       snake.retreat(); //move snake back to previous position
//       snake.draw(ctx); //draw snake in its previous position
//       gameOver();
//     }
//     else {
//       timeout = setTimeout(gameLoop, frameLength);
//     }
//   }

//   function draw() {
//     snake.draw(ctx);
//     drawBorder();
//     apple.draw(ctx);
//     drawScore();
//   }

//   function drawScore() {
//     ctx.save();
//     ctx.font = 'bold 102px sans-serif';
//     ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//     var centreX = JS_SNAKE.width / 2;
//     var centreY = JS_SNAKE.width / 2;
//     ctx.fillText(score.toString(), centreX, centreY);
//     ctx.restore();
//   }

//   function gameOver() {
//     ctx.save();
//     ctx.font = 'bold 30px sans-serif';
//     ctx.fillStyle = '#000';
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//     ctx.strokeStyle = 'white';
//     ctx.lineWidth = 2;
//     var centreX = JS_SNAKE.width / 2;
//     var centreY = JS_SNAKE.width / 2;
//     ctx.strokeText('Game Over', centreX, centreY - 10);
//     ctx.fillText('Game Over', centreX, centreY - 10);
//     ctx.font = 'bold 15px sans-serif';
//     ctx.strokeText('Press space to restart', centreX, centreY + 15);
//     ctx.fillText('Press space to restart', centreX, centreY + 15);
//     ctx.restore();
//   }

//   function drawBorder() {
//     ctx.save();
//     ctx.strokeStyle = 'gray';
//     ctx.lineWidth = JS_SNAKE.blockSize;
//     ctx.lineCap = 'square';
//     var offset = ctx.lineWidth / 2;
//     var corners = [
//       [offset, offset],
//       [JS_SNAKE.width - offset, offset],
//       [JS_SNAKE.width - offset, JS_SNAKE.height - offset],
//       [offset, JS_SNAKE.height - offset]
//     ];
//     ctx.beginPath();
//     ctx.moveTo(corners[3][0], corners[3][1]);
//     $.each(corners, function (index, corner) {
//       ctx.lineTo(corner[0], corner[1]);
//     });
//     ctx.stroke();
//     ctx.restore();
//   }

//   function restart() {
//     clearTimeout(timeout);
//     $('body').unbind('keydown');
//     $(JS_SNAKE).unbind('appleEaten');
//     $(canvas).unbind('click');
//     JS_SNAKE.game.init();
//   }
  
//   function bindEvents() {
//     var keysToDirections = {
//       37: 'left',
//       38: 'up',
//       39: 'right',
//       40: 'down'
//     };

//     $(document).keydown(function (event) {
//       var key = event.which;
//       var direction = keysToDirections[key];

//       if (direction) {
//         snake.setDirection(direction);
//         event.preventDefault();
//       }
//       else if (key === 32) {
//         restart();
//       }
//     });

//     $(JS_SNAKE).bind('appleEaten', function (event, snakePositions) {
//       apple.setNewPosition(snakePositions);
//       score++;
//       frameLength *= 0.99; //subtle speed-up
//     });

//     $(canvas).click(restart);
//   }

//   return {
//     init: init
//   };
// })();

// JS_SNAKE.apple = function () {
//   var position = [6, 6];

//   function draw(ctx) {
//     ctx.save();
//     ctx.fillStyle = '#0a0'; //apple green
//     ctx.beginPath();
//     var radius = JS_SNAKE.blockSize / 2;
//     var x = position[0] * JS_SNAKE.blockSize + radius;
//     var y = position[1] * JS_SNAKE.blockSize + radius;
//     ctx.arc(x, y, radius, 0, Math.PI * 2, true);
//     ctx.fill();
//     ctx.restore();
//   }

//   function random(low, high) {
//     return Math.floor(Math.random() * (high - low + 1) + low);
//   }

//   //get a random position within the game bounds
//   function getRandomPosition() {
//     var x = random(1, JS_SNAKE.widthInBlocks - 2);
//     var y = random(1, JS_SNAKE.heightInBlocks - 2);
//     return [x, y];
//   }

//   function setNewPosition(snakeArray) {
//     var newPosition = getRandomPosition();
//     //if new position is already covered by the snake, try again
//     if (JS_SNAKE.checkCoordinateInArray(newPosition, snakeArray)) {
//       return setNewPosition(snakeArray);
//     }
//     //otherwise set position to the new position
//     else {
//       position = newPosition;
//     }
//   }

//   function getPosition() {
//     return position;
//   }

//   return {
//     draw: draw,
//     setNewPosition: setNewPosition,
//     getPosition: getPosition
//   };
// };

// JS_SNAKE.snake = function () {
//   var previousPosArray;
//   var posArray = [];
//   posArray.push([6, 4]);
//   posArray.push([5, 4]);
//   var direction = 'right';
//   var nextDirection = direction;

//   function setDirection(newDirection) {
//     var allowedDirections;

//     switch (direction) {
//     case 'left':
//     case 'right':
//       allowedDirections = ['up', 'down'];
//       break;
//     case 'up':
//     case 'down':
//       allowedDirections = ['left', 'right'];
//       break;
//     default:
//       throw('Invalid direction');
//     }
//     if (allowedDirections.indexOf(newDirection) > -1) {
//       nextDirection = newDirection;
//     }
//   }

//   function drawSection(ctx, position) {
//     var x = JS_SNAKE.blockSize * position[0];
//     var y = JS_SNAKE.blockSize * position[1];
//     ctx.fillRect(x, y, JS_SNAKE.blockSize, JS_SNAKE.blockSize);
//   }

//   function draw(ctx) {
//     ctx.save();
//     ctx.fillStyle = '#33a';
//     for(var i = 0; i < posArray.length; i++) {
//       drawSection(ctx, posArray[i]);
//     }
//     ctx.restore();
//   }

//   function checkCollision() {
//     var wallCollision = false;
//     var snakeCollision = false;
//     var head = posArray[0]; //just the head
//     var rest = posArray.slice(1); //the rest of the snake
//     var snakeX = head[0];
//     var snakeY = head[1];
//     var minX = 1;
//     var minY = 1;
//     var maxX = JS_SNAKE.widthInBlocks - 1;
//     var maxY = JS_SNAKE.heightInBlocks - 1;
//     var outsideHorizontalBounds = snakeX < minX || snakeX >= maxX;
//     var outsideVerticalBounds = snakeY < minY || snakeY >= maxY;

//     if (outsideHorizontalBounds || outsideVerticalBounds) {
//       wallCollision = true;
//     }
//     //check if the snake head coords overlap the rest of the snake
//     snakeCollision = JS_SNAKE.checkCoordinateInArray(head, rest);
//     return wallCollision || snakeCollision;
//   }

//   function advance(apple) {
//     //make a copy of the head of the snake otherwise
//     //the changes below would affect the head of the snake
//     var nextPosition = posArray[0].slice();
//     direction = nextDirection;
//     switch (direction) {
//     case 'left':
//       nextPosition[0] -= 1;
//       break;
//     case 'up':
//       nextPosition[1] -= 1;
//       break;
//     case 'right':
//       nextPosition[0] += 1;
//       break;
//     case 'down':
//       nextPosition[1] += 1;
//       break;
//     default:
//       throw('Invalid direction');
//     }

//     previousPosArray = posArray.slice(); //save previous array
//     posArray.unshift(nextPosition);
//     if (isEatingApple(posArray[0], apple)) {
//       $(JS_SNAKE).trigger('appleEaten', [posArray]);
//     }
//     else {
//       posArray.pop();
//     }
//   }

//   function isEatingApple(head, apple) {
//     return JS_SNAKE.equalCoordinates(head, apple.getPosition());
//   }

//   function retreat() {
//     posArray = previousPosArray;
//   }

//   return {
//     draw: draw,
//     advance: advance,
//     retreat: retreat,
//     setDirection: setDirection,
//     checkCollision: checkCollision
//   };
// };


// JS_SNAKE.game.init();