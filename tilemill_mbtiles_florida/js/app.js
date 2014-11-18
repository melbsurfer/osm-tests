
$(function(){
	//console.log('firing!');
	var map = new ol.Map({
	    target: 'map',
	    renderer: 'canvas',
	    layers: [
			new ol.layer.Tile({
			source: new ol.source.MapQuest({layer: 'sat'})
			}),
			// TODO: We only want this layer to show up from zoom 0 to 13
			new ol.layer.Tile({
				opacity: 0.7,
				source: new ol.source.XYZ({
					//http://localhost:8888/v2/road-trip_tallahassee/12/1087/1686.png
					//url: 'http://localhost:8888/v2/road-trip_tallahassee/{z}/{x}/{y}.png'
					url: 'http://localhost:8888/v2/road-trip_tallahassee/{z}/{x}/{y}.png'
				})
			})
	    ],
	    view: new ol.View({
	      center: ol.proj.transform([-84.2807329, 30.4382559], 'EPSG:4326', 'EPSG:3857'),
	      zoom: 9
	    })
	});

	//Full Screen
	var myFullScreenControl = new ol.control.FullScreen();
	map.addControl(myFullScreenControl);

// canvas example stuff down here	
	// var map = new ol.Map({
	//   layers: [],
	//   renderer: 'canvas',
	//   target: document.getElementById('map'),
	//   view: new ol.View({
	//   	// home --> 28.170904,-80.593862
	//     //center: ol.proj.transform([-74.0064, 40.7142], 'EPSG:4326', 'EPSG:3857'),
	//     center: ol.proj.transform([-80.593862, 28.170904], 'EPSG:4326', 'EPSG:3857'),
	//     maxZoom: 19,
	//     zoom: 14
	//   })
	// });

	//console.log('done firing');
});

