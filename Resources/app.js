// create root window
var win_home = Titanium.UI.createWindow({  
    title:'NightLive App',
    exitOnClose: true,
    navBarHidden:true
});

var headerView = Titanium.UI.createView({
	backgroundColor: '#2a2627',
	top: 0,
	width: '100%',
	height: 50,
	visible: true
});

var logo = Titanium.UI.createImageView({
	backgroundImage: 'images/logo2.png',
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

//Maakt de button aan die naar add.js gaat
var add_btn = Titanium.UI.createButton({
	title:'Nieuwe locatie toevoegen',
	height:40,
	width:240,
	top: 8,
	visible:true,
	font: {fontWeight: 'bold'}
});

//functie die uitgevoerd wordt als er op add location knop geklikt wordt
add_btn.addEventListener('click', function()
{
	var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		title:'Profile',
		barColor:'black',
		url:'pages/add.js',
		navBarHidden:true
	});
	w.open({modal:true});
});

var lblTitel = Titanium.UI.createLabel({
	text: 'Wat zoek je?',
	color: '#2a2627',
	font: {fontSize:30, fontWeight: 'bold', fontFamily: 'Arial'}, 
	textAlign:'center',
	top: 30
});

//icoon1
var icon1 = Titanium.UI.createButton({
	title:'',
	backgroundImage:'images/icon_automaat2.png',
	width:'50',
	height:'61',
	top:'120',
	left:'30'
});

//functie die uitgevoerd wordt als er op icon1 geklikt wordt
icon1.addEventListener('click', function()
{
	var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		title:'List Of Locations',
		barColor:'black',
		url:'pages/list.js',
		navBarHidden:true
	});
	w.open({modal:true});
});

//icoon2
var icon2 = Titanium.UI.createButton({
	title:'',
	backgroundImage:'images/icon_cafe2.png',
	width:'50',
	height:'61',
	top:'120',
	left:'135'
});

//functie die uitgevoerd wordt als er op icon2 geklikt wordt
icon2.addEventListener('click', function()
{
	var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		title:'List Of Locations',
		barColor:'black',
		url:'pages/list.js',
		navBarHidden:true
	});
	w.open({modal:true});
});

//icoon3
var icon3 = Titanium.UI.createButton({
	title:'',
	backgroundImage:'images/icon_geldautomaat2.png',
	width:'50',
	height:'61',
	top:'120',
	left:'240',
});

//functie die uitgevoerd wordt als er op icon3 geklikt wordt
icon3.addEventListener('click', function()
{
	var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		title:'List Of Locations',
		barColor:'black',
		url:'pages/list.js',
		navBarHidden:true
	});
	w.open({modal:true});
});

//icoon4
var icon4 = Titanium.UI.createButton({
	title:'',
	backgroundImage:'images/icon_nachtwinkel2.png',
	width:'50',
	height:'61',
	top:'210',
	left:'30'
});

//functie die uitgevoerd wordt als er op icon4 geklikt wordt
icon4.addEventListener('click', function()
{ 
	var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		title:'List Of Locations',
		barColor:'black',
		url:'pages/list.js',
		navBarHidden:true
	});
	w.open({modal:true});
});

//icoon5
var icon5 = Titanium.UI.createButton({
	title:'',
	backgroundImage:'images/icon_restaurant2.png',
	width:'50',
	height:'61',
	top:'210',
	left:'135'
});

//functie die uitgevoerd wordt als er op icon5 geklikt wordt
icon5.addEventListener('click', function()
{
	var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		title:'List Of Locations',
		barColor:'black',
		url:'pages/list.js',
		navBarHidden:true
	});
	w.open({modal:true});
});

//icoon6
var icon6 = Titanium.UI.createButton({
	title:'',
	backgroundImage:'images/icon_tankstation2.png',
	width:'50',
	height:'61',
	top:'210',
	left:'240'
});

//functie die uitgevoerd wordt als er op icon6 geklikt wordt
icon6.addEventListener('click', function()
{
	var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		title:'Lijst van locaties',
		barColor:'black',
		url:'pages/list.js',
		navBarHidden:true
	});
	w.open({modal:true});
});

//opens main window
win_home.open({modal:true});
//voeg de iconen/logos etc. toe 
win_home.add(headerView);
win_home.add(contentView);
win_home.add(footerView);
headerView.add(logo);
contentView.add(lblTitel);
contentView.add(icon1);
contentView.add(icon2);
contentView.add(icon3);
contentView.add(icon4);
contentView.add(icon5);
contentView.add(icon6);
footerView.add(add_btn);