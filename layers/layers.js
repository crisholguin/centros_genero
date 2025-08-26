var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_IGN_1 = new ol.layer.Tile({
            'title': 'IGN',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_Provincias_2 = new ol.format.GeoJSON();
var features_Provincias_2 = format_Provincias_2.readFeatures(json_Provincias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_2.addFeatures(features_Provincias_2);
var lyr_Provincias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincias_2, 
                style: style_Provincias_2,
                popuplayertitle: "Provincias",
                interactive: true,
                title: '<img src="styles/legend/Provincias_2.png" /> Provincias'
            });
var format_CentrosdeAyuda_3 = new ol.format.GeoJSON();
var features_CentrosdeAyuda_3 = format_CentrosdeAyuda_3.readFeatures(json_CentrosdeAyuda_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentrosdeAyuda_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentrosdeAyuda_3.addFeatures(features_CentrosdeAyuda_3);
var lyr_CentrosdeAyuda_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentrosdeAyuda_3, 
                style: style_CentrosdeAyuda_3,
                popuplayertitle: "Centros de Ayuda",
                interactive: true,
    title: 'Centros de Ayuda<br />\
    <img src="styles/legend/CentrosdeAyuda_3_0.png" /> Administración Jurídica<br />\
    <img src="styles/legend/CentrosdeAyuda_3_1.png" /> Administración Pública<br />\
    <img src="styles/legend/CentrosdeAyuda_3_2.png" /> Centro de Atención<br />\
    <img src="styles/legend/CentrosdeAyuda_3_3.png" /> Línea Telefónica<br />\
    <img src="styles/legend/CentrosdeAyuda_3_4.png" /> Recursero<br />'
        });

lyr_OSMStandard_0.setVisible(false);lyr_IGN_1.setVisible(true);lyr_Provincias_2.setVisible(true);lyr_CentrosdeAyuda_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_IGN_1,lyr_Provincias_2,lyr_CentrosdeAyuda_3];
lyr_Provincias_2.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'fna': 'fna', 'in1': 'in1', });
lyr_CentrosdeAyuda_3.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'Recurso': 'Recurso', 'Contacto': 'Contacto', 'Telefono codificado': 'Telefono codificado', 'Observaciones': 'Observaciones', 'Correo electrónico': 'Correo electrónico', 'WEB': 'WEB', 'Redes sociales | Instagram': 'Redes sociales | Instagram', 'Tipo': 'Tipo', });
lyr_Provincias_2.set('fieldImages', {'fid': '', 'gid': 'Range', 'fna': 'TextEdit', 'in1': 'Range', });
lyr_CentrosdeAyuda_3.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'Recurso': 'TextEdit', 'Contacto': 'TextEdit', 'Telefono codificado': 'TextEdit', 'Observaciones': 'TextEdit', 'Correo electrónico': 'TextEdit', 'WEB': 'TextEdit', 'Redes sociales | Instagram': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Provincias_2.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'fna': 'no label', 'in1': 'no label', });
lyr_CentrosdeAyuda_3.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'Recurso': 'inline label - visible with data', 'Contacto': 'hidden field', 'Telefono codificado': 'inline label - visible with data', 'Observaciones': 'no label', 'Correo electrónico': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'Redes sociales | Instagram': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', });
lyr_CentrosdeAyuda_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});