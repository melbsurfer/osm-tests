
$(function(){
	//console.log('firing!');
	var map = new ol.Map({
	    target: 'map',
	    renderer: 'canvas',
	    layers: [
	    //    	new ol.layer.Tile({
    	// 		source: new ol.source.MapQuest({layer: 'sat'})
  			// }),
			new ol.layer.Image({
			    opacity: 1.0,
			    source: new ol.source.ImageWMS({
					url: 'http://10.0.10.180:8080/geoserver/Natural_Earth_WS/wms',
		      		params: {'LAYERS': 'Natural_Earth_LG'},
			      	serverType: 'geoserver'
    			})
 			 }),
			new ol.layer.Image({
			    opacity: 1.0,
			    source: new ol.source.ImageWMS({
					url: 'http://localhost:8080/geoserver/osm-test/wms',
		      		params: {'LAYERS': 'osm-test:planet_osm_line'},
			      	serverType: 'geoserver'
    			})
 			 })
	    ],
	    view: new ol.View({
	      center: ol.proj.transform([44.355905, 33.311686], 'EPSG:4326', 'EPSG:3857'),
	      zoom: 5
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

