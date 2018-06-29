  var ctx = document.getElementById('IronGame').getContext('2d');
  var musicNotes = [];
  var startingPosition = [45, 255, 405, 585];
  var musicNoteImages = ['./images/purple_note.png', './images/green_note.png', './images/purple_note2.png', './images/green_note2.png'];
  var img = new Image;

/////////////////////////////////////////////////////////////

var MusicNote = function() {
  this.startingX = startingPosition[Math.floor(Math.random() *4)];
  this.startingY = 530;
  this.startingH = 90;
  this.startingW = 100;
  img.src = musicNoteImages[[Math.floor(Math.random() *4)]];
}

/////////////////////////////////////////////////////////////////////////////

MusicNote.prototype.moveNote = function(){
for(var i=0; i < musicNotes.length; i++){
  console.log("musicNotes[i]============== ", musicNotes[i].startingY)
  musicNotes[i].startingY -= 50;
   }
  };

  /////////////////////////////////////////////////////////////////////

  MusicNote.prototype.newNote = function() {
    that = this;
    var random = Math.floor(1+ Math.random()*2); 
    for(var i = 0; i < random; i++){  
      this.theNote = new MusicNote();
      musicNotes.push(this.theNote);
      
      theImage = new Image();
      theImage.src = musicNoteImages[[Math.floor(Math.random() *4)]];

        
          ctx.drawImage(theImage, this.theNote.startingX, that.startingY, that.startingW, that.startingH);
                }
    
      return musicNotes;
 }

///////////////////////////////////////////////////////////////////////

function dividers(){
  var ctx = document.getElementById('IronGame').getContext('2d');

  ctx.beginPath();
  ctx.moveTo(180, 0);
  ctx.lineTo(180, 720);
  ctx.lineWidth = 2;
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(360, 0);
  ctx.lineTo(360, 720);
  ctx.lineWidth = 2;
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(540, 0);
  ctx.lineTo(540, 720);
  ctx.lineWidth = 2;
  ctx.stroke();      
  
  ctx.beginPath();
  ctx.moveTo(720, 0);
  ctx.lineTo(720, 720);
  ctx.lineWidth = 2;
  ctx.stroke();
}
////////////////////////////////////////////////////////
function newImg1 () {

  var ctx = document.getElementById('IronGame').getContext('2d');

  var img = new Image();
  var startingX = 0;
  var startingY = 0;
  var startingW = 180;
  var startingH = 100;
  
  img.onload = function(){
  ctx.drawImage(img, startingX, startingY, startingW, startingH); 
};

img.src = './images/waves.png';
};
 
function newImg2 () {
  
  var ctx = document.getElementById('IronGame').getContext('2d');
  
  var img = new Image();
  var startingX = 0;
  var startingY = 0;
  var startingW = 180;
  var startingH = 100;
  
img.onload = function(){
  
  ctx.drawImage(img, startingX + 180, startingY, startingW, startingH);

};
img.src = './images/waves.png';
};

function newImg3 () {
  
  var ctx = document.getElementById('IronGame').getContext('2d');
  
  var img = new Image();
  var startingX = 0;
  var startingY = 0;
  var startingW = 180;
  var startingH = 100;
  
  img.onload = function(){
    
    ctx.drawImage(img, startingX + 360, startingY, startingW, startingH);
    
  }

img.src = './images/waves.png';
};

function newImg4 () {
  
  var ctx = document.getElementById('IronGame').getContext('2d');
  
  var img = new Image();
  var startingX = 0;
  var startingY = 0;
  var startingW = 180;
  var startingH = 100;
  
  img.onload = function(){
    
  ctx.drawImage(img, startingX + 540, startingY, startingW, startingH);
  
};
img.src = './images/waves.png';
};
//////////////////////////////////////////////////////////////////////
function pointZone () {
  var ctx = document.getElementById('IronGame').getContext('2d');
  
  ctx.beginPath();
  ctx.moveTo(0, 100);
  ctx.lineTo(720, 100);
  ctx.stroke();
}
  //////////////////////////////////////////////////////////////////////////////