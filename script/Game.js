// console.log(musicNotes)

var newGame = new IronGame();
  
function IronGame(){
  this.keysClicked = [];
  //          
  this.score = 0; 
};

IronGame.prototype.gameLost = function() {
  if(score <= -100){
    return alert('I\'m gonna stop you right there. Maybe this game isn\'t right for you.' );
  }
};
//setInterval = 325000 = 3.25 song duration

 function startGame(){
  newGame = new IronGame();
  // this.ironCanvas = new IronCanvas();
  // theMusicNotes = new MusicNote();

  newImg1();
  newImg2();
  newImg3();
  newImg4();

  dividers();

  pointZone();
  update()
  // MusicNote();
  // theMusicNotes.newNote();
  // theMusicNotes.moveNote();
};
function update(){
  setInterval(function(){
    ctx.clearRect(0,0,720,645)
    theMusicNotes = new MusicNote();
theMusicNotes.newNote()
theMusicNotes.moveNote()
  }, 1000)
}




document.onkeydown = function(e){

  switch(e.keyCode){
    case 65:
    musicNotes.forEach(function(oneNote){
      if(0 < oneNote.startingY < 24 && 0 < oneNote.startingX < 180){
      newGame.score += 100;
      }
      else if(25 < oneNote.startingY < 50 && 0 < oneNote.startingX < 180){
        newGame.score += 30
      }
      else{
        newGame.score -= 15;
      }
    })
    break;
    case 87:
    musicNotes.forEach(function(oneNote){
      if(0 < oneNote.startingY < 24 && 181 < oneNote.startingX < 360){
        newGame.score += 100;
      }
      else if(25 < oneNote.startingY < 50 && 181 < oneNote.startingX < 360){
        newGame.score += 30
      }
      else{
        newGame.score -= 15;
      }
    })
    break;
    case 68:
    musicNotes.forEach(function(oneNote){
    if(0 < oneNote.startingY < 24 && 361 < oneNote.startingX < 540){
      newGame.score += 100;
    }
    else if(25 < oneNote.startingY < 50 && 361 < oneNote.startingX < 540){
      newGame.score += 30
    }
    else{
      newGame.score -= 15;
    }
  })
    break;
    case 83:
    musicNotes.forEach(function(oneNote){
      if(0 < oneNote.startingY < 100 && 541 < oneNote.startingX < 720){
        newGame.score += 100;
      // IronGame.ctx.clearRect(this.x, this.y, this.width, this.height);
    }
    else if(25 < oneNote.startingY < 50 && 541 < oneNote.startingX < 720){
      newGame.score += 30
    }
    else{
      newGame.score -= 15;
    }
  })
  break;
}
console.log( 'your score: '+ newGame.score);
}

