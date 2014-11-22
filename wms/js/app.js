
$(function(){
	//console.log('firing!');33.311686
	var baghdad = ol.proj.transform([44.355905,33.311686], 'EPSG:4326', 'EPSG:3857');
	var tehran = ol.proj.transform([51.3498186,35.7014396], 'EPSG:4326', 'EPSG:3857');

	var view = new ol.View({
  		// the view's initial state
  		center: baghdad,
  		zoom: 8
	});


	var map = new ol.Map({
	    target: 'map',
	    renderer: 'canvas',
	    layers: [
	    //    	new ol.layer.Tile({
    	// 		source: new ol.source.MapQuest({layer: 'sat'})
  			// }),
			new ol.layer.Tile({
			    opacity: 1.0,
			    source: new ol.source.TileWMS({
					url: 'http://localhost:8080/geoserver/osm/wms',
		      		params: {'LAYERS': 'omar-basemap_lg', 'TILED': true },
			      	//serverType: 'geoserver'
    			})
 			 }),
			// new ol.layer.Tile({
			//     opacity: 1.0,
			//     source: new ol.source.TileWMS({
			// 		url: 'http://localhost:8080/geoserver/osm/wms',
		 //      		params: {'LAYERS': 'planet_osm_line', 'TILED': true},
			//       	//serverType: 'geoserver'
   //  			})
 		// 	 }),
			// new ol.layer.Image({
			//     opacity: 1.0,
			//     source: new ol.source.ImageWMS({
			// 		url: 'http://localhost:8080/geoserver/osm/wms',
		 //      		params: {'LAYERS': 'osm:planet_osm_line'},
			//       	serverType: 'geoserver'
   //  			})
 		// 	 })
	    ],
	    view: view //new ol.View({
	      // center: ol.proj.transform([-80.6552775, 28.1174805], 'EPSG:4326', 'EPSG:3857'),
	      // zoom: 15
	       //center: ol.proj.transform([35.4954794, 33.8886284], 'EPSG:4326', 'EPSG:3857'),
	      //zoom: 14
	    //})
	});

	var fly = document.getElementById('fly');
	fly.addEventListener('click', function() {
  	var duration = 2000;
  	var start = +new Date();
  	var pan = ol.animation.pan({
    	duration: duration,
    	source: /** @type {ol.Coordinate} */ (view.getCenter()),
    	start: start
  	});
  	var bounce = ol.animation.bounce({
    	duration: duration,
    	resolution: 4 * view.getResolution(),
    	start: start
  	});
	map.beforeRender(pan, bounce);
  		view.setCenter(tehran);
	}, false);

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

