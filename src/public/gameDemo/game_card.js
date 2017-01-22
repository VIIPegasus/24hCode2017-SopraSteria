var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, null, {
  preload: preload, create: create, update: update
});

var deck,
    selectedCard,
    debug = true,
    flippedDirty = true,
    cardImgPrefix = 'Carte',
	Largeur = window.innerWidth * window.devicePixelRatio,
	Hauteur = window.innerHeight * window.devicePixelRatio,
    cardPool = [
      {suit:'Distance', val:'25'},
      {suit:'Distance', val:'50'},
      {suit:'Distance', val:'75'},
      {suit:'Distance', val:'100'},
      {suit:'Distance', val:'200'},
	  
      {suit:'Obstacle', val:'Essence'},
      {suit:'Obstacle', val:'Roue'},
      {suit:'Obstacle', val:'Accident'},
      {suit:'Obstacle', val:'Vitesse'},
      {suit:'Obstacle', val:'Feu'},

      {suit:'Parade', val:'Essence'},
      {suit:'Parade', val:'Roue'},
      {suit:'Parade', val:'Accident'},
      {suit:'Parade', val:'Vitesse'},
      {suit:'Parade', val:'Feu'},
	  
      {suit:'Botte', val:'Feu&Vitesse'},
      {suit:'Botte', val:'Roue'},
      {suit:'Botte', val:'Essence'},
      {suit:'Botte', val:'Accident'},
    ],
	cardPositionText,
	cardLocations = [		{x:Largeur-100,y:100}, {x:Largeur-250,y:100}, {x:Largeur-100,y:260}, {x:Largeur-250,y:260}, {x:Largeur-100,y:420}, {x:Largeur-250,y:420}	];

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.stage.backgroundColor = '#255';

  //game.load.image('background', '../images/MilleBorne24.png');
  game.load.image('DosCarte', '../images/DosCarte.png');
  for(var i = 0; i < cardPool.length; i++) {
     var imgName = cardImgPrefix + cardPool[i].suit + cardPool[i].val;
     game.load.image(imgName, '../images/' + imgName + '.png');
  }
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  //game.add.sprite(0, 0, 'background');
  
  initDeck(); 
  
  if(debug) {
    cardPositionText = game.add.text(5, game.world.height-5, 'Card Position: ');
    cardPositionText.anchor.set(0, 1);
  }
  
  // prevent normal right click behavior (i.e. context menu)
  game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
  
}

function update() {
	if(game.input.mousePointer.isDown) {
		selectedCard.x = game.input.x;
		selectedCard.y = game.input.y;
		if(debug) {
			cardPositionText.setText('Card Position: ('+selectedCard.x+', '+selectedCard.y+')');
		}
	}
	
	    // release selected card
  game.input.onUp.add(function() {
    selectedCard = 0;
  });
}

function createCard(suit, value, cardX, cardY, flipped) {
  var imgName = cardImgPrefix + suit + value,
  newCard = game.add.sprite(cardX, cardY, imgName);

  // card attributes
  newCard.faceUp = !(typeof flipped !== 'undefined' && flipped === 1);
  newCard.imgName = imgName;

  // card physical properties
  newCard.scale.setTo(0.5);
  newCard.anchor.set(0.5);
  game.physics.enable(newCard, Phaser.Physics.ARCADE);
  newCard.body.immovable = true;
  newCard.body.collideWorldBounds = true;

  // handle card inputs
  newCard.inputEnabled = true;
  newCard.input.enableDrag = true;
  newCard.events.onInputDown.add(function() {
	deck.bringToTop(newCard);
    selectedCard = newCard;
	game.add.tween(newCard).to( { y: game.world.centerY }, 4000, Phaser.Easing.Bounce.Out, true);
  }, this);

  return newCard;
}

function initDeck(){	
	deck = game.add.group();
	
	for(var cIndex = 0; cIndex < cardLocations.length; cIndex++) {
		var info = cardLocations[cIndex],
			 card = cardPool[cIndex];
		deck.add(createCard(card.suit,card.val,info.x,info.y));
	}
};