// console.log(musicNotes)

var newGame = new IronGame();

function IronGame() {
  // this.keysClicked = [];
  //          
  this.score = 0;
};

IronGame.prototype.gameLost = function () {
  if (newGame.score == -300) {
    return alert('I\'m gonna stop you right there. Maybe this game isn\'t right for you.');
  }
};
var myMusic;

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  }
  this.stop = function () {
    this.sound.pause();
  }
}

//setInterval = 325000 = 3.25 song duration

function startGame() {
  newGame = new IronGame();

  newGame.gameLost();
  myMusic = new sound("./Audio/Peggy Suave - Nobody Knows.mp3");
  myMusic.play();
  update();
};
var timeLeft = 4500;

var frames = 0;

function update() {
  setInterval(function () {
    if (timeLeft >= 0) {
      timeLeft--;
      ctx.clearRect(0, 0, 720, 645)
      // theMusicNotes = new MusicNote();
      newImg1();
      newImg2();
      newImg3();
      newImg4();

      dividers();

      pointZone();

      if (frames % 40 === 0) {
        newNote();
      }
      drawNotes();
      // note.moveNote()
      frames++;
    }
    // console.log(timeLeft)
  }, 50)
}

function updateScore() {
  console.log(newGame.score)
  document.getElementById("score-board").innerHTML = newGame.score;
  // }
  // function update score{
  //   span => newGame.score
}



document.onkeydown = function (e) {
  var p = false;
  var b = false;

  switch (e.keyCode) {
    case 65:
      musicNotes.forEach(function (oneNote) {
        if (0 < oneNote.startingY && oneNote.startingY < 24 && 0 < oneNote.startingX && oneNote.startingX < 180) {
          p = true;
        } else if (25 < oneNote.startingY && oneNote.startingY < 50 && 0 < oneNote.startingX && oneNote.startingX < 180) {
          b = true;
        }
      })
      break;
    case 83:
      musicNotes.forEach(function (oneNote) {
        if (0 < oneNote.startingY && oneNote.startingY < 24 && 181 < oneNote.startingX && oneNote.startingX < 360) {
          p = true;
        } else if (25 < oneNote.startingY && oneNote.startingY < 50 && 181 < oneNote.startingX && oneNote.startingX < 360) {
          b = true;
        }

      })
      break;
    case 68:
      musicNotes.forEach(function (oneNote) {
        if (0 < oneNote.startingY && oneNote.startingY < 24 && 361 < oneNote.startingX && oneNote.startingX < 540) {
          p = true;
        } else if (25 < oneNote.startingY && oneNote.startingY < 50 && 361 < oneNote.startingX && oneNote.startingX < 540) {
          b = true;
        }
      })
      break;
    case 70:
      musicNotes.forEach(function (oneNote) {
        if (0 < oneNote.startingY && oneNote.startingY < 100 && 541 < oneNote.startingX && oneNote.startingX < 720) {
          p = true;
          // IronGame.ctx.clearRect(this.x, this.y, this.width, this.height);
        } else if (25 < oneNote.startingY && oneNote.startingY < 50 && 541 < oneNote.startingX && oneNote.startingX < 720) {
          b = true;
        }
      })
      break;
  }

  if (p) {
    newGame.score += 100;
  } else if (b) {
    newGame.score += 40;
  } else {
    newGame.score -= 25;
  }
  updateScore();
  console.log('your score: ' + newGame.score);
}


var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}