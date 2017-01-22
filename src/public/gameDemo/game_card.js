var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, null, {
  preload: preload, create: create, update: update
});

var deck,
    selectedCard,
    debug = true,
	button1,
	button2,
	button3,
	button4,
	text1,
	text2,
	text3,
	text4,
	backgroundSprites,
	CarteDistanceHauteur = 0,
	CarteBotteHauteur =0,
    flippedDirty = true,
    cardImgPrefix = 'Carte',
	Largeur = window.innerWidth * window.devicePixelRatio,
	Hauteur = window.innerHeight * window.devicePixelRatio,
	LargeurCartes,
	DebutCarte,	
	DistanceParcourue = 0,
    cardPool = [
      {suit:'Distance', val:'25'},
      {suit:'Obstacle', val:'Essence'},
	  {suit:'Parade', val:'Essence'},
	  {suit:'Botte', val:'Roue'},
	  {suit:'Obstacle', val:'Feu'},
	  {suit:'Distance', val:'100'},
      {suit:'Distance', val:'75'},
      {suit:'Distance', val:'50'},
      {suit:'Distance', val:'200'},
	  
      {suit:'Obstacle', val:'Roue'},
      {suit:'Obstacle', val:'Accident'},
      {suit:'Obstacle', val:'Vitesse'},

      {suit:'Parade', val:'Roue'},
      {suit:'Parade', val:'Accident'},
      {suit:'Parade', val:'Vitesse'},
      {suit:'Parade', val:'Feu'},
	  
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
  
  game.load.image('backMagasin','../images/backMagasin.png');
  game.load.image('backMappy','../images/backMappy.png');  
  game.load.image('backDeck','../images/backDeck.png');  
  game.load.image('backCartes','../images/backCartes.png');
  game.load.image('backMenu','../images/DosCarte.png');
  
  game.load.spritesheet('button', '../images/Button.png', 125, 40);
  
  //game.load.image('background', '../images/MilleBorne24.png');
  game.load.image('DosCarte', '../images/DosCarte.png');
  for(var i = 0; i < cardPool.length; i++) {
     var imgName = cardImgPrefix + cardPool[i].suit + cardPool[i].val;
     game.load.image(imgName, '../images/' + imgName + '.png');
  }
}

function create() {

	game.add.tileSprite(0,0, 2.5*Largeur/10, Hauteur, 'backMagasin');
	game.add.tileSprite(2.5*Largeur/10,0, 5.5*Largeur/10, 5*Hauteur/8, 'backMappy');
	game.add.tileSprite(8*Largeur/10,0, Largeur/4, 3*Hauteur/4, 'backDeck');
	game.add.tileSprite(2.5*Largeur/10,5*Hauteur/8, 5.5*Largeur/10, 3*Hauteur/8 , 'backCartes');
	
	DebutCarte = (2.5*Largeur/10);
	LargeurCartes = 5.5*Largeur/10;
	
	game.add.tileSprite(8*Largeur/10,3*Hauteur/4, 2*Largeur/10, Hauteur/4, 'backMenu');
	
	button1 = game.add.button(2.8*Largeur/10, 5.1*Hauteur/8, 'button', null , this, 2, 1, 0);
	button2 = game.add.button(4.15*Largeur/10, 5.1*Hauteur/8, 'button', null , this, 2, 1, 0);
	button3 = game.add.button(5.55*Largeur/10, 5.1*Hauteur/8, 'button', null, this, 2, 1, 0);
	button4 = game.add.button(6.95*Largeur/10, 5.1*Hauteur/8, 'button', null, this, 2, 1, 0);
	
	var style = { font: "14px Arial", fill: "#ff0044", align: "center" };
	
	text1 = game.add.text(2.85*Largeur/10, 5.2*Hauteur/8, 'Distance : ' + DistanceParcourue + ' KM',style);
	text2 = game.add.text(4.25*Largeur/10, 5.2*Hauteur/8, 'Obstacles',style);
	text3 = game.add.text(5.65*Largeur/10, 5.2*Hauteur/8, 'Bottes',style);
	text4 = game.add.text(7.05*Largeur/10, 5.2*Hauteur/8, 'Feu',style);
	
	button1.inputEnabled = false;
	button2.inputEnabled = false;
	button3.inputEnabled = false;
	button4.inputEnabled = false;

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
  
  text1.setText("Distance : " + DistanceParcourue + ' KM');
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
	moveCard(newCard);
	//game.add.tween(newCard).to( { y: game.world.centerY }, 4000, Phaser.Easing.Bounce.Out, true);
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
}

function moveCard(card){	
	if(card.key.match("CarteDistance")) {
		game.add.tween(card).to( { x: DebutCarte+LargeurCartes/8 ,y: (6.5*Hauteur/8)+CarteDistanceHauteur}, 4000, Phaser.Easing.Linear.None, true);	
		CarteDistanceHauteur = CarteDistanceHauteur + 25;
		DistanceParcourue = DistanceParcourue + card.key.substring(13,15);
	}
	
	if(card.key.match("CarteObstacle")) {		
		if(card.key.match("CarteObstacleFeu")) {		
			game.add.tween(card).to( { x: DebutCarte+7*LargeurCartes/8 ,y: 6.5*Hauteur/8}, 4000, Phaser.Easing.Linear.None, true);
		}
		else {
			game.add.tween(card).to( { x: DebutCarte+3*LargeurCartes/8 ,y: 6.5*Hauteur/8}, 4000, Phaser.Easing.Linear.None, true);
		}
	}
	
	if(card.key.match("CarteBotte")) {
		game.add.tween(card).to( { x: DebutCarte+5*LargeurCartes/8 ,y: (6.5*Hauteur/8)+CarteBotteHauteur}, 4000, Phaser.Easing.Linear.None, true);
		CarteBotteHauteur = CarteBotteHauteur + 25;
	}
	
	if(card.key.match("CarteParade")) {
		if(card.key.match("CarteParadeFeu")) {		
			game.add.tween(card).to( { x: DebutCarte+7*LargeurCartes/8 ,y: 6.5*Hauteur/8}, 4000, Phaser.Easing.Linear.None, true);
		}
		else {
			game.add.tween(card).to( { x: DebutCarte+3*LargeurCartes/8 ,y: 6.5*Hauteur/8}, 4000, Phaser.Easing.Linear.None, true);
		}
	}		

	//game.add.tween(card).to( { x: '-600',y: '400'}, 4000, Phaser.Easing.Linear.None, true);*/
	card.events.onInputDown.removeAll();
}
;