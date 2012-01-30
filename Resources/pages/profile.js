var win_profile = Titanium.UI.currentWindow;
var busNaam = win_profile.busNaam;
var busType = win_profile.busType;
var busAdres = win_profile.busAdres;
var busOpeningsuur = win_profile.busOpeningsuur;
var busSluitingsuur = win_profile.busSluitingsuur;

// initialize to all modes
win_profile.orientationModes = [
	Titanium.UI.PORTRAIT,
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT
];

var headerView = Titanium.UI.createView({
	backgroundColor: '#2a2627',
	top: 0,
	width: '100%',
	height: 50,
	visible: true
});

var logo = Titanium.UI.createImageView({
	backgroundImage: '../images/logo2.png',
	width: 250,
	height: 40	
});

var contentView = Titanium.UI.createView({
	backgroundColor: '#e6e6e6',
	height: '100%',
	width: 'auto',
	visible: true,
	top: 50
});

var footerView = Titanium.UI.createView({
	backgroundColor: '#2a2627',
	bottom: 0,
	width: '100%',
	height: 50,
	visible: true
});	

//Maakt de button aan die terug naar list gaat
var back_btn = Titanium.UI.createButton({
	title:'Terug',
	height:40,
	width:'150',
	top: 8,
	visible:true,
	font: {fontSize: 14,fontWeight: 'bold'}
});

back_btn.addEventListener('click', function()
{
	win_profile.close();
});

var naamLocatie = Titanium.UI.createLabel({
	text: busNaam,
	color: '#2a2627',
	font: {fontSize:19, fontWeight: 'bold', fontFamily: 'Arial'}, 
	top:10,
	left: 30
});

var typeLocatie = Titanium.UI.createLabel({
	color:'#2a2627',
	text:busType,
	font: {fontSize:14, fontWeight: 'bold', fontFamily: 'Arial'}, 
	top:35,
	left: 30
});

var adresLocatie = Titanium.UI.createLabel({
	color:'#2a2627',
	font: {fontSize:16, fontWeight: 'bold', fontFamily: 'Arial'}, 
	text:busAdres,
	top:80,
	left: 30
});

var adresOpenings = Titanium.UI.createLabel({
	color:'#2a2627',
	text:'Dagelijks open om: '+busOpeningsuur,
	font: {fontSize:14, fontWeight: 'bold', fontFamily: 'Arial'}, 
	left:30,
	top:125
});

var adresSluitings = Titanium.UI.createLabel({
	color:'#2a2627',
	text:'Dagelijks gesloten om: '+busSluitingsuur,
	font: {fontSize:14, fontWeight: 'bold', fontFamily: 'Arial'}, 
	left:30,
	top:145
});

win_profile.add(headerView);
win_profile.add(contentView);
win_profile.add(footerView);
headerView.add(logo);
contentView.add(naamLocatie);
contentView.add(typeLocatie);
contentView.add(adresLocatie);
contentView.add(adresOpenings);
contentView.add(adresSluitings);
footerView.add(back_btn);