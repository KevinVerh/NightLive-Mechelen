var win_add = Titanium.UI.currentWindow;

// initialize to all modes
win_add.orientationModes = [
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

var win = Titanium.UI.createView({
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

var titel = Titanium.UI.createLabel({
	text: 'Voeg een nieuwe locatie toe',
	color: '#2a2627',
	font: {fontSize:19, fontWeight: 'bold', fontFamily: 'Arial'}, 
	textAlign:'center',
	top: 10
});

win.add(titel);

//  CREATE FIELD ONE

var naam = Titanium.UI.createLabel({
	color:'#2a2627',
	font: {fontWeight: 'bold'},
	text:'Naam',
	top:50,
	left:32,
	width:100,
	height:'auto'
});

win.add(naam);

var naamLocatie = Titanium.UI.createTextField({
	hintText:'bv. De Planeet',
	height:35,
	top:70,
	left:30,
	width:250,
	font: {fontSize: 12},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

win.add(naamLocatie);

//  CREATE FIELD TWO

var adres = Titanium.UI.createLabel({
	color:'#2a2627',
	font: {fontWeight: 'bold'},
	text:'Adres',
	top:110,
	left:32,
	width:100,
	height:'auto'
});

win.add(adres);

var adresLocatie = Titanium.UI.createTextField({
	hintText:'bv. Zandpoortvest 35, 2800 Mechelen',
	height:35,
	top:130,
	left:30,
	width:250,
	font: {fontSize: 12},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

win.add(adresLocatie);

//  CREATE FIELD Type

var type = Titanium.UI.createLabel({
	color:'#2a2627',
	font: {fontWeight: 'bold'},
	text:'Type locatie',
	top:170,
	left:32,
	width:300,
	height:'auto'
});

win.add(type);

var picker = Titanium.UI.createPicker({
	top: 190,
	left: 30,
	width: 250,
	height: 35	
});

var data = []; 
data[0]=Titanium.UI.createPickerRow({title:'Automaat'}); 
data[1]=Titanium.UI.createPickerRow({title:'Bar'}); 
data[2]=Titanium.UI.createPickerRow({title:'Geldautomaat'}); 
data[3]=Titanium.UI.createPickerRow({title:'Nachtwinkel'}); 
data[4]=Titanium.UI.createPickerRow({title:'Restaurant'}); 
data[5]=Titanium.UI.createPickerRow({title:'Tankstation'}); 

picker.add(data);
win.add(picker);

//  CREATE FIELD THREE

var openingsUur = Titanium.UI.createLabel({
	color:'#2a2627',
	font: {fontWeight: 'bold'},
	text:'Openingsuur',
	top:230,
	left:32,
	width:100,
	height:'auto'
});

win.add(openingsUur);

var openingsUurField = Titanium.UI.createTextField({
	hintText:'bv. 13:00',
	height:35,
	top:250,
	left:30,
	width:100,
	font: {fontSize: 12},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

win.add(openingsUurField);

//  CREATE FIELD FOUR

var sluitingsUur = Titanium.UI.createLabel({
	color:'#2a2627',
	font: {fontWeight: 'bold'},
	text:'Sluitingsuur',
	top:230,
	left:182,
	width:100,
	height:'auto'
});

win.add(sluitingsUur);

var sluitingsUurField = Titanium.UI.createTextField({
	hintText:'bv. 23:00',
	height:35,
	top:250,
	left:180,
	width:100,
	font: {fontSize: 12},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

win.add(sluitingsUurField);

// CREATE BUTTON
var save = Titanium.UI.createButton({
	title:'Voeg locatie toe',
	top:300,
	left:30,
	height:35,
	width:150,
	font: {fontWeight: 'bold'}
});

win.add(save);

//data in database bijvoegen
var request = Ti.Network.createHTTPClient();
request.onload = function()
{
	if (this.responseText == "Insert failed")
	{
		btn.enabled = true;
		btn.opacity = 1;
		alert(this.responseText);
	}
	else
	{
		var alertDialog = Ti.UI.createAlertDialog({
		    title: 'Locatie toegevoegd',  
	        message: 'Locatie niet meteen in de lijst? Herstart de applicatie.',  
	        buttonNames: ['OK']  
		});
		alertDialog.show();
		alertDialog.addEventListener('click',function(e)
		{
			win_add.close();
		});
	}
};

save.addEventListener('click',function(e)
{
	if (naamLocatie.value != '' & adresLocatie.value != '' & openingsUurField.value != '' & sluitingsUurField.value != ''){

		request.open("POST","http://www.kevinverhoeven.be/insert_dirt.php");
			var params = {
				naamLocatie: naamLocatie.value,
				adresLocatie: adresLocatie.value,
				picker: picker.getSelectedRow(0).title,
				openingsUurField: openingsUurField.value,
				sluitingsUurField: sluitingsUurField.value
			};
			request.send(params);   	 		
	} else {
			alert("Gelieve alle velden juist in te vullen.");
	};
});

//Maakt de button aan die terug naar homepage gaat
var back_btn = Titanium.UI.createButton({
	title:'Annuleren',
	top: 8,
	height:40,
	width:'150',
	visible:true,
	font: {fontSize: 14,fontWeight: 'bold'}
});

back_btn.addEventListener('click', function()
{
	win_add.close();
});

win_add.add(headerView);
win_add.add(win);
win_add.add(footerView);
headerView.add(logo);
footerView.add(back_btn);