
$(function(){
	console.log('firing!');
	// var map = new ol.Map({
	//     target: 'map',
	//     layers: [
	//       new ol.layer.Tile({
	//         source: new ol.source.MapQuest({layer: 'sat'})
	//       })
	//     ],
	//     view: new ol.View({
	//       center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
	//       zoom: 4
	//     })
	// });

	var waterLayer = new ol.layer.Vector({
	  source: new ol.source.TileVector({
	    format: new ol.format.TopoJSON(),
	    projection: 'EPSG:3857',
	    tileGrid: new ol.tilegrid.XYZ({
	      maxZoom: 19
	    }),
	    url: 'http://{a-c}.tile.openstreetmap.us/' +
	        'vectiles-water-areas/{z}/{x}/{y}.topojson'
	  }),
	  style: new ol.style.Style({
	    fill: new ol.style.Fill({
	      color: '#9db9e8'
	    })
	  })
	});

	var localLayer = new ol.layer.Vector({
	  source: new ol.source.TileVector({
	    format: new ol.format.TopoJSON(),
	    projection: 'EPSG:3857',
	    tileGrid: new ol.tilegrid.XYZ({
	      maxZoom: 19
	    }),
	    url: 'http://127.0.0.1:8080/' +
	        'osm-processed_p1/{z}/{x}/{y}.topojson'
	  }),
	  style: new ol.style.Style({
	    fill: new ol.style.Fill({
	      color: '#ccc'
	    })
	  })
	});

	var map = new ol.Map({
	  layers: [localLayer,waterLayer],
	  renderer: 'canvas',
	  target: document.getElementById('map'),
	  view: new ol.View({
	    center: ol.proj.transform([-74.0064, 40.7142], 'EPSG:4326', 'EPSG:3857'),
	    maxZoom: 19,
	    zoom: 14
	  })
	});

	console.log('done firing');
});

// var roadStyleCache = {};
// var roadLayer = new ol.layer.Vector({
//   source: new ol.source.TileVector({
//     format: new ol.format.TopoJSON(),
//     projection: 'EPSG:3857',
//     tileGrid: new ol.tilegrid.XYZ({
//       maxZoom: 19
//     }),
//     url: 'http://{a-c}.tile.openstreetmap.us/' +
//         'vectiles-highroad/{z}/{x}/{y}.topojson'
//   }),
//   style: function(feature, resolution) {
//     var kind = feature.get('kind');
//     var railway = feature.get('railway');
//     var sort_key = feature.get('sort_key');
//     var styleKey = kind + '/' + railway + '/' + sort_key;
//     var styleArray = roadStyleCache[styleKey];
//     if (!styleArray) {
//       var color, width;
//       if (railway) {
//         color = '#7de';
//         width = 1;
//       } else {
//         color = {
//           'major_road': '#776',
//           'minor_road': '#ccb',
//           'highway': '#f39'
//         }[kind];
//         width = kind == 'highway' ? 1.5 : 1;
//       }
//       styleArray = [new ol.style.Style({
//         stroke: new ol.style.Stroke({
//           color: color,
//           width: width
//         }),
//         zIndex: sort_key
//       })];
//       roadStyleCache[styleKey] = styleArray;
//     }
//     return styleArray;
//   }
// });

// var buildingStyle = [
//   new ol.style.Style({
//     fill: new ol.style.Fill({
//       color: '#666',
//       opacity: 0.4
//     }),
//     stroke: new ol.style.Stroke({
//       color: '#444',
//       width: 1
//     })
//   })
// ];
// var buildingLayer = new ol.layer.Vector({
//   source: new ol.source.TileVector({
//     format: new ol.format.TopoJSON({
//       defaultProjection: 'EPSG:4326'
//     }),
//     projection: 'EPSG:3857',
//     tileGrid: new ol.tilegrid.XYZ({
//       maxZoom: 19
//     }),
//     url: 'http://{a-c}.tile.openstreetmap.us/' +
//         'vectiles-buildings/{z}/{x}/{y}.topojson'
//   }),
//   visible: false,
//   style: function(f, resolution) {
//     return (resolution < 10) ? buildingStyle : [];
//   }
// });

// var landuseStyleCache = {};
// var landuseLayer = new ol.layer.Vector({
//   source: new ol.source.TileVector({
//     format: new ol.format.TopoJSON({
//       defaultProjection: 'EPSG:4326'
//     }),
//     projection: 'EPSG:3857',
//     tileGrid: new ol.tilegrid.XYZ({
//       maxZoom: 19
//     }),
//     url: 'http://{a-c}.tile.openstreetmap.us/' +
//         'vectiles-land-usages/{z}/{x}/{y}.topojson'
//   }),
//   visible: false,
//   style: function(feature, resolution) {
//     var kind = feature.get('kind');
//     var styleKey = kind;
//     var styleArray = landuseStyleCache[styleKey];
//     if (!styleArray) {
//       var color, width;
//       color = {
//         'parking': '#ddd',
//         'industrial': '#aaa',
//         'urban area': '#aaa',
//         'park': '#76C759',
//         'school': '#DA10E7',
//         'garden': '#76C759',
//         'pitch': '#D58F8D',
//         'scrub': '#3E7D28',
//         'residential': '#4C9ED9'
//       }[kind];
//       width = kind == 'highway' ? 1.5 : 1;
//       styleArray = [new ol.style.Style({
//         stroke: new ol.style.Stroke({
//           color: color,
//           width: width
//         }),
//         fill: new ol.style.Fill({
//           color: color,
//           opacity: 0.5
//         })
//       })];
//       landuseStyleCache[styleKey] = styleArray;
//     }
//     return styleArray;
//   }
// });



// $('input[type=checkbox]').on('change', function() {
//   var layer = {
//     landuse: landuseLayer,
//     buildings: buildingLayer,
//     water: waterLayer,
//     roads: roadLayer
//   }[$(this).attr('id')];
//   layer.setVisible(!layer.getVisible());
// });