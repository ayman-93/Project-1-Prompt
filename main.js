//tow arrayes for each player

let playerOne = {
  Name: "",
  wins: 0,
  stack: []
};
let playerTwo = {
  Name: "",
  wins: 0,
  stack: []
};

function checkWin(pStck) {
  //all the possible patterns to win
  let pattrenOfWin = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"]
  ];

  let caontMatches = 0;
  let win = false;
  for (var out of pattrenOfWin) {
    for (var i = 0; i < pStck.length; i++) {
      if (out.includes(pStck[i])) {
        caontMatches++;
        if (caontMatches === 3) {
          win = true;
          //   console.log(out);
          return true;
        }
      }
    }
    caontMatches = 0;
  }
}

let body = $("body");

let playerOneTurn = true;
let playerTwoTurn = false;

function playerOnePlay(event) {
  let item = event.target;
  let value = $(item).text();
  console.log(value);
  if (playerTwo.stack.includes(value) || playerOne.stack.includes(value)) {
    console.log("Play some thing else");
  } else {
    playerOne.stack.push(value);
    $(item).addClass("red");
    console.log(playerOne.stack);
    if (checkWin(playerOne.stack)) {
      console.log("Player One Win");
    }
    if (playerOne.stack.length === 5) {
      console.log("Draw");
    }
    playerOneTurn = false;
    playerTwoTurn = true;
  }
}

function playerTwoPlay(event) {
  let item = event.target;
  let value = $(item).text();
  console.log(value);
  if (playerTwo.stack.includes(value) || playerOne.stack.includes(value)) {
    console.log("Play some thing else");
  } else {
    playerTwo.stack.push(value);
    $(item).addClass("blue");
    console.log(playerTwo.stack);
    if (checkWin(playerTwo.stack)) {
      console.log("Player Two Win");
    }
    if (playerTwo.stack.length === 5) {
      console.log("Draw");
    }
    playerOneTurn = true;
    playerTwoTurn = false;
  }
}
function whoPlay(event) {
  if (playerOneTurn) {
    playerOnePlay(event);
  } else playerTwoPlay(event);
}
body.on("click", whoPlay);
