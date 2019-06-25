// var board = [];

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
  };
  
  Array.prototype.midpop = function (index) {
    this.splice(index, 1);
  }
  
  var board = [
    [1, null, null, null, null, null, null], [2, 3, 4, null, null, null, null], [5, 6, 7, 8, 9, null, null], [10, 11, 12, 13, 14, 15, 16]
  ];
  
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
        console.log(nullSpot)
        board[a].insert(nullSpot, board[a].shift()); //takes the first one away and inserts it in
      } else if (c === 1) { //if b is 1, move right
        for (let j = 0; j < board[a].length; j++) {
          // console.log(board[a][j]);
          if (board[a][j] == null) {
            var nullSpot = j;
            break;
          }
        }
        board[a].unshift(board[a][nullSpot - 1])
        board[a].midpop(nullSpot);
      }
    }
    console.log(displayify(board)); //log the result
  };
  
  function rotateArr2DVerti (a, b, c) { //define function. a means which column, b means how much to rotate, c is the direction, either 0 (up) or 1 (down)
    let tempArr = [];
    // if (a === 0) {
    //   a = 0.5;
    // }
    for (let i = 0; i < board.length; i++) {
      if (board[i][a* 2] != null) {
        tempArr.push(board[i][a * 2])
      }
    }
    // console.log(tempArr)
    if (c === 0) {
      rotateArr1D(b, 0, tempArr);
    } else if (c === 1) {
      rotateArr1D(b, 1, tempArr);
    }
    // console.log(tempArr)
    let nullSkipped = 0;
    for (let i = 0; i < board.length; i++) {
      // console.log("Testcase: " + board[i][a])
      if (board[i][a * 2] == null) {
        nullSkipped++;
        continue;
      } else if (board[i][a * 2] != null){
        // console.log("Testcase: " + board[i][a] + '|' + tempArr[i - nullSkipped])
        board[i][a * 2] = tempArr[i - nullSkipped];
        if (board[i][a * 2]) {
          board[i][a * 2] = tempArr[i - nullSkipped];
        }
      }
    }
    tempArr = [];
    // if (a === 0) {
    //   a = 0.5;
    // }
    for (let i = 0; i < board.length; i++) {
      if (board[i][a* 2 + 1] != null) {
        tempArr.push(board[i][a * 2 + 1])
      }
    }
    console.log(tempArr)
    if (c === 0) {
      rotateArr1D(b, 0, tempArr);
    } else if (c === 1) {
      rotateArr1D(b, 1, tempArr);
    }
    console.log(tempArr)
    // let nullSkipped = 0;
    for (let i = 0; i < board.length; i++) {
      // console.log("Testcase: " + board[i][a])
      if (board[i][a * 2 + 1] == null) {
        nullSkipped++;
        continue;
      } else if (board[i][a * 2 + 1] != null){
        // console.log("Testcase: " + board[i][a] + '|' + tempArr[i - nullSkipped])
        console.log("i: " + i + '|nullSkipped: ' + nullSkipped)
        board[i][a * 2 + 1] = tempArr[i - nullSkipped + a];
        if (board[i][a * 2 + 1]) {
          board[i][a * 2 + 1] = tempArr[i - nullSkipped + a];
        }
      }
    }
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
        tempArr.push(board[i + a][i * 2]);
        tempArr.push(board[i + a][i * 2 - 1]);
      } else if (board[i + a][i] != null) {
        tempArr.push(board[i + a][i * 2])
      }
    }
    console.log(tempArr)
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
        console.log("Testcase: " + i + "|" + nullSkipped + '|' + board[i][a] + '|' + tempArr[i - nullSkipped])
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

function displayify (a) {
    let newboard = '';
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] === null) {
                a[i].pop();
                j--;
            }
        }
        newboard += a[i].join() + "\n";
    }
    console.log(newboard);
}
  
//   move(4, 0)
  
  // function makeTriangle (a) { } // I will do this later.
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
            move(0, 3);
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
            move(1, 3);
            break;
        case "a":
            move(2, 0);
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
            move(3, 0);
            break;
        case "j":
            move(3, 1);
            break;
        case "k":
            move(3, 2);
            break;
        case "l":
            move(3, 2);
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
            move(4, 3);
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
            move(5, 3);
            break;
    }
})