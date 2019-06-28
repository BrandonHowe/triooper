// var board = [];

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
  };
  
Array.prototype.midpop = function (index) {
    this.splice(index, 1);
}

Array.prototype.clone = function () {
    let newArray = [];
    for (var i = 0; i < this.length; i++) {
        newArray[i] = this[i].slice();
    }
    return newArray;
}
  
  var board = [
    [1, null, null, null, null, null, null], [2, 3, 4, null, null, null, null], [5, 6, 7, 8, 9, null, null], [10, 11, 12, 13, 14, 15, 16]
  ];

var moveCount = 0;

var recordMoves = false;
  
function rotateArr1D (a, b, c) { //define function. a means the amount of spaces to cycle, b is the direction, either 0 (left) or 1 (right), c is the array
    for (let i = 0; i < a; i ++) { //for loop that runs as many times as the value of a
      if (b === 0) { //if b is 0, move left
        c.push(c.shift()); //takes the first one away and appends it to the end
      } else if (b === 1) { //if b is 1, move right
        c.unshift(c.pop()); //puts the last one onto the beginning and pops off the last one
      }
    }
    // console.log(c); //log the result
    return c;
  };
  
  function rotateArr2DHoriz (a, b, c) { //define function. a means which row, b means how much to rotate, c is the direction, either 0 (left) or 1 (right)
    if (a === 0) {
        console.log(displayify(board));
        return;
    }
    for (let i = 0; i < b; i ++) { //for loop that runs as many times as the value of a
      if (c === 0) { //if b is 0, move left
        // console.log(board[a]);
        for (let j = 0; j < board[a].length; j++) {
          // console.log(board[a][j]);
          if (board[a][j] == null) {
            var nullSpot = j - 1;
            break;
          }
        }
        if (!nullSpot) {
            var nullSpot = board[a].length - 1;
        }
        // console.log(nullSpot)
        board[a].insert(nullSpot, board[a].shift()); //takes the first one away and inserts it in
      } else if (c === 1) { //if b is 1, move right
        for (let j = 0; j < board[a].length; j++) {
          // console.log(board[a][j]);
          if (board[a][j] == null) {
            var nullSpot = j;
            break;
          }
        }
        if (!nullSpot) {
            var nullSpot = 0;
        }
        board[a].unshift(board[a][nullSpot - 1])
        board[a].midpop(nullSpot);
      }
    }
    // console.log(board);
    console.log(displayify(board)); //log the result
  };
  
  function rotateArr2DVerti (a, b, c) { //define function. a means which column, b means how much to rotate, c is the direction, either 0 (up) or 1 (down)
    let tempArr = [];
    // if (a === 0) {
    //   a = 0.5;
    // }
    for (let i = 0; i < board.length; i++) {
      if (board[i][a * 2] != null && board[i][a * 2 + 1] != null) {
        tempArr.push(board[i][a * 2]);
        tempArr.push(board[i][a * 2 + 1])
      } else if (board[i][a * 2] != null) {
        tempArr.push(board[i][a * 2])
      }
    }
    // console.log(tempArr)
    if (c === 0) {
      rotateArr1D(b * 2, 0, tempArr);
    } else if (c === 1) {
      rotateArr1D(b * 2, 1, tempArr);
    }
    // console.log(tempArr)
    let vnullSkipped = 0;
    let hnullSkipped = 0;
    for (let i = 0; i < board.length; i++) {
      // console.log("Testcase: " + board[i][a])
      if (board[i][a * 2] === null) {
        vnullSkipped++;
        continue;
      } else if (board[i][a * 2] != null){
        // console.log("Testcase: " + i + "|" + vnullSkipped)
        board[i][a * 2] = tempArr[(i - vnullSkipped) * 2 - hnullSkipped];
        // board[i][a * 2] = tempArr[i * 2 - nullSkipped];
        if (board[i][a * 2 + 1]) {
          board[i][a * 2 + 1] = tempArr[(i - vnullSkipped) * 2 + 1 - hnullSkipped]
        } else {
          hnullSkipped++;
        }
      }
    }
    // tempArr = [];
    // // if (a === 0) {
    // //   a = 0.5;
    // // }
    // for (let i = 0; i < board.length; i++) {
    //   if (board[i][a* 2 + 1] != null) {
    //     tempArr.push(board[i][a * 2 + 1])
    //   }
    // }
    // console.log(tempArr)
    // if (c === 0) {
    //   rotateArr1D(b, 0, tempArr);
    // } else if (c === 1) {
    //   rotateArr1D(b, 1, tempArr);
    // }
    // console.log(tempArr)
    // // let nullSkipped = 0;
    // for (let i = 0; i < board.length; i++) {
    //   // console.log("Testcase: " + board[i][a])
    //   if (board[i][a * 2 + 1] == null) {
    //     nullSkipped++;
    //     continue;
    //   } else if (board[i][a * 2 + 1] != null){
    //     // console.log("Testcase: " + board[i][a] + '|' + tempArr[i - nullSkipped])
    //     console.log("i: " + i + '|nullSkipped: ' + nullSkipped)
    //     board[i][a * 2 + 1] = tempArr[i - nullSkipped + a];
    //     if (board[i][a * 2 + 1]) {
    //       board[i][a * 2 + 1] = tempArr[i - nullSkipped + a];
    //     }
    //   }
    // }
    // console.log("Board: \n" + board);
    console.log(displayify(board));
  }
  
//MUCHO IMPORTANT
//LISTEN I DONT EVEN KNOW WHAT MOST OF THIS CODE DOES THATS WHY THERE ARE LIKE 0 COMMENTS
//END OF MUCHO IMPORTANT

function rotateArr2DDiag (a, b, c) { //define function. a means which column, b means how much to rotate, c is the direction, either 0 (left up) or 1 (right down)
  let tempArr = [];
  for (let i = 0; i < board.length - a; i++) {
    // console.log(board[i + a]);
    // console.log ("Test: " + (i + a) + '|' + board.length)
    if (!board[i + a]) {
      break;
    }
    if (board[i + a][i * 2] != null && board[i + a][i * 2 - 1] != null) {
      tempArr.push(board[i + a][i * 2 - 1]);
      tempArr.push(board[i + a][i * 2]);
    } else if (board[i + a][i] != null) {
      tempArr.push(board[i + a][i * 2])
    }
  }
//   console.log(tempArr)
  if (c === 0) {
    rotateArr1D(b * 2, 0, tempArr);
  } else if (c === 1) {
    rotateArr1D(b * 2, 1, tempArr);
  }
  // console.log(tempArr)
  let nullSkipped = 0;
  console.log("temparr: " + tempArr)
  for (let i = 0; i < board.length - a; i++) {
    console.log(board[i + a])
    // console.log("Testcase: " + board[i][a])
    if (board[i + a][(i * 2)] == null) {
      nullSkipped++;
      continue;
    } else if (board[i + a][(i * 2)] != null){
    //   console.log("Testcase: " + i + "|" + nullSkipped + '|' + board[i][a] + '|' + tempArr[i - nullSkipped])
      board[i + a][(i * 2)] = tempArr[i * 2- nullSkipped];
      if (board[i + a][i * 2 - 1]) {
        board[i + a][i * 2 - 1] = tempArr[i * 2 - 1 - nullSkipped]
      }
    }
  }
  console.log(displayify(board));
}
  
  // rotateArr2DDiag(2, 1, 1);
  
function move (a, b) { //0 is rup, 1 is ldown, 2 is left, 3 is right, 4 is uleft, 5 is dright, b is the depth
  switch (a) {
    case 0:
      rotateArr2DVerti(b, 1, 0);
      break;
    case 1:
      rotateArr2DVerti(b, 1, 1);
      break;
    case 2:
      rotateArr2DHoriz(b, 1, 0);
      break;
    case 3:
      rotateArr2DHoriz(b, 1, 1);
      break;
    case 4:
      rotateArr2DDiag(b, 1, 0);
      break;
    case 5:
      rotateArr2DDiag(b, 1, 1);
  }
}
  
  // function makeTriangle (a) { } // I will do this later.
  
function displayify (b) {
    let a = b.clone(); //try to move the variable to another variable
    let newboard = ''; //make new board
    for (let i = 0; i < a.length; i++) { //for every line
        for (let j = 0; j < a[i].length; j++) { //for every thing in the line
            // console.log("L:" + a[i][j].toString().length)
            if (a[i][j] === null) { //if it's null, remove it
                a[i].pop(); //remove it
                j--; //make the line 1 shorter so it doesnt skip 2 spaces
            } else if (a[i][j].toString().length === 1) { //if its 1 long
                // console.log("test")
                a[i][j] += " "; //add a space to make it spaced well
            }
        }
        let spaceInterval = ""; //add spaces to the beginning to make it a pyramid
        for (let k = 0; k < (4 * (3 - i) + i); k++) { //just calculates the amount of spaces
            spaceInterval += " "; //add spaces
        }
        newboard += "\n" + spaceInterval + a[i].join(" "); //put a new line, the spaces, then the array
    }
    if (recordMoves === true) { //if we are recording moves
        moveCount++;
        newboard += "\nCurrent moves:" + moveCount; //add current moves to the bottom
    }
    // console.log(board);
    console.log(newboard); //console log the board
}
    
  //   move(4, 0)
    
    // function makeTriangle (a) { } // I will do this later.

function scramble () {
    recordMoves = false;
    for (let i = 0; i < 100; i++) {
        let randA = Math.floor(Math.random() * 6);
        let randB = Math.floor(Math.random() * 4);
        // console.log("move(" + randA + ", " + randB + ");")
        move(randA, randB);
    }
    recordMoves = true;
    moveCount = 0;
}

  var stdin = process.openStdin();
  
  var currentInput = ''
  
  stdin.addListener("data", function(d) {
      // console.log("you entered: [" + 
      // d.toString().trim() + "]");
          if(d.toString().trim().length == 1) currentInput += d.toString().trim()
  
      console.log(currentInput)
  });
  
  stdin.addListener("keypress", function(d,x){
      switch (d) {
          case "q":
              move(0, 0);
              break;
          case "w":
              move(0, 1);
              break;
          case "e":
              move(0, 2);
              break;
          case "r":
              console.log(displayify(board));
              break;
          case "t":
              scramble();
              break;
          case "u":
              move(1, 0);
              break;
          case "i":
              move(1, 1);
              break;
          case "o":
              move(1, 2);
              break;
          case "p":
              console.log(displayify(board));
              break;
          case "a":
              console.log(displayify(board));
              break;
          case "s":
              move(2, 1);
              break;
          case "d":
              move(2, 2);
              break;
          case "f":
              move(2, 3);
              break;
          case "h":
              console.log(displayify(board));
              break;
          case "j":
              move(3, 1);
              break;
          case "k":
              move(3, 2);
              break;
          case "l":
              move(3, 3);
              break;
          case "z":
              move(4, 0);
              break;
          case "x":
              move(4, 1);
              break;
          case "c":
              move(4, 2);
              break;
          case "v":
              console.log(displayify(board));
              break;
          case "b":
              move(5, 0);
              break;
          case "n":
              move(5, 1);
              break;
          case "m":
              move(5, 2);
              break;
          case ",":
              console.log(displayify(board));
              break;
      }
  })
  
  console.log(displayify(board));