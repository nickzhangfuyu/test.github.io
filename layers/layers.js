var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_NRL_final_location_1 = new ol.format.GeoJSON();
var features_NRL_final_location_1 = format_NRL_final_location_1.readFeatures(json_NRL_final_location_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NRL_final_location_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NRL_final_location_1.addFeatures(features_NRL_final_location_1);
var lyr_NRL_final_location_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NRL_final_location_1, 
                style: style_NRL_final_location_1,
                interactive: true,
    title: 'NRL_final_location<br />\
    <img src="styles/legend/NRL_final_location_1_0.png" /> 0 - 385<br />\
    <img src="styles/legend/NRL_final_location_1_1.png" /> 385 - 1779<br />\
    <img src="styles/legend/NRL_final_location_1_2.png" /> 1779 - 5852<br />\
    <img src="styles/legend/NRL_final_location_1_3.png" /> 5852 - 13615<br />\
    <img src="styles/legend/NRL_final_location_1_4.png" /> 13615 - 17597<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_NRL_final_location_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_NRL_final_location_1];
lyr_NRL_final_location_1.set('fieldAliases', {'field_1': 'field_1', 'taken_at': 'taken_at', 'pk': 'pk', 'id': 'id', 'device_tim': 'device_tim', 'media_type': 'media_type', 'location': 'location', 'lat': 'lat', 'lng': 'lng', 'username': 'username', 'full_name': 'full_name', 'comment_co': 'comment_co', 'like_count': 'like_count', 'captions': 'captions', 'Time': 'Time', });
lyr_NRL_final_location_1.set('fieldImages', {'field_1': 'TextEdit', 'taken_at': 'TextEdit', 'pk': 'TextEdit', 'id': 'TextEdit', 'device_tim': 'TextEdit', 'media_type': 'TextEdit', 'location': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'username': 'TextEdit', 'full_name': 'TextEdit', 'comment_co': 'TextEdit', 'like_count': 'TextEdit', 'captions': 'TextEdit', 'Time': 'TextEdit', });
lyr_NRL_final_location_1.set('fieldLabels', {'field_1': 'no label', 'taken_at': 'no label', 'pk': 'no label', 'id': 'no label', 'device_tim': 'no label', 'media_type': 'no label', 'location': 'no label', 'lat': 'no label', 'lng': 'no label', 'username': 'no label', 'full_name': 'no label', 'comment_co': 'no label', 'like_count': 'no label', 'captions': 'no label', 'Time': 'no label', });
lyr_NRL_final_location_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});