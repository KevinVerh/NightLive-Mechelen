var win_list = Titanium.UI.currentWindow;

// initialize to all modes
win_list.orientationModes = [
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
	font: {fontSize: 14,fontWeight: 'bold'},
	visible:true
});

back_btn.addEventListener('click', function()
{
	win_list.close();
});

var tableview = Titanium.UI.createTableView();
	
	//Opvullen van lijst
	var sendit = Ti.Network.createHTTPClient();
	sendit.open('GET', 'http://www.kevinverhoeven.be/read_dirt.php');
	sendit.send();
	sendit.onload = function(){
	    var json = JSON.parse(this.responseText);
	    var json = json.Locaties;
		
		var dataArray = [];
	    
	    for(var pos=0; pos < json.length; pos++){
	    	
	    	var business = json[pos];
	    	var busId = business.BusinessId;
	    	var busNaam = business.BusinessNaam;
	    	var busType = business.BusinessType;
	    	var busAdres = business.BusinessAdres;
	    	var busOpeningsuur = business.BusinessOpeningsuur;
	    	var busSluitingsuur = business.BusinessSluitingsuur;
	    	
	    	var row = Ti.UI.createTableViewRow();
	    	
	    	row.id=busId;
	    	row.naam=busNaam;
	    	row.type=busType;
	    	row.adres=busAdres;
	    	row.openingsuur=busOpeningsuur;
	    	row.sluitingsuur=busSluitingsuur;	    	
	    	
	    	var label = Ti.UI.createLabel({
	    		text: busNaam,
	    		font: {fontSize: 16, fontWeight: 'bold'},
	    		color: '#2a2627',
	    		left: 10
	    	});
	    	
	    	row.add(label);
	    	dataArray.push(row);
	    }
	    	tableview.setData(dataArray);
	  };
	    	
//wat gebeurt er als op item uit lijst wordt geklikt?
tableview.addEventListener('click', function(e)
{
		var w = Titanium.UI.createWindow({
			url:'pages/profile.js',
			navBarHidden:true,
			busNaam: e.rowData.naam,
			busType: e.rowData.type,
			busAdres: e.rowData.adres,
			busOpeningsuur: e.rowData.openingsuur,
			busSluitingsuur: e.rowData.sluitingsuur,
			
		});
		w.open({modal:true});
		
});

win_list.add(headerView);
win_list.add(contentView);
win_list.add(footerView);
headerView.add(logo);
contentView.add(tableview);
footerView.add(back_btn);