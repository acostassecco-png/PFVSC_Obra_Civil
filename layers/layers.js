var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'Open Topo Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Estaciones_Meteorologicas_1 = new ol.format.GeoJSON();
var features_Estaciones_Meteorologicas_1 = format_Estaciones_Meteorologicas_1.readFeatures(json_Estaciones_Meteorologicas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaciones_Meteorologicas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_Meteorologicas_1.addFeatures(features_Estaciones_Meteorologicas_1);
var lyr_Estaciones_Meteorologicas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciones_Meteorologicas_1, 
                style: style_Estaciones_Meteorologicas_1,
                popuplayertitle: 'Estaciones_Meteorologicas',
                interactive: true,
                title: '<img src="styles/legend/Estaciones_Meteorologicas_1.png" /> Estaciones_Meteorologicas'
            });
var format_PFV_SC_OC_r0obradores_2 = new ol.format.GeoJSON();
var features_PFV_SC_OC_r0obradores_2 = format_PFV_SC_OC_r0obradores_2.readFeatures(json_PFV_SC_OC_r0obradores_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFV_SC_OC_r0obradores_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PFV_SC_OC_r0obradores_2.addFeatures(features_PFV_SC_OC_r0obradores_2);
var lyr_PFV_SC_OC_r0obradores_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PFV_SC_OC_r0obradores_2, 
                style: style_PFV_SC_OC_r0obradores_2,
                popuplayertitle: 'PFV_SC_OC_r0 — obradores',
                interactive: true,
                title: '<img src="styles/legend/PFV_SC_OC_r0obradores_2.png" /> PFV_SC_OC_r0 — obradores'
            });
var format_PFV_SC_OC_r0cerco_3 = new ol.format.GeoJSON();
var features_PFV_SC_OC_r0cerco_3 = format_PFV_SC_OC_r0cerco_3.readFeatures(json_PFV_SC_OC_r0cerco_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFV_SC_OC_r0cerco_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PFV_SC_OC_r0cerco_3.addFeatures(features_PFV_SC_OC_r0cerco_3);
var lyr_PFV_SC_OC_r0cerco_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PFV_SC_OC_r0cerco_3, 
                style: style_PFV_SC_OC_r0cerco_3,
                popuplayertitle: 'PFV_SC_OC_r0 — cerco',
                interactive: true,
                title: '<img src="styles/legend/PFV_SC_OC_r0cerco_3.png" /> PFV_SC_OC_r0 — cerco'
            });
var format_CoordenadasmensuraSanCarlos_4 = new ol.format.GeoJSON();
var features_CoordenadasmensuraSanCarlos_4 = format_CoordenadasmensuraSanCarlos_4.readFeatures(json_CoordenadasmensuraSanCarlos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordenadasmensuraSanCarlos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordenadasmensuraSanCarlos_4.addFeatures(features_CoordenadasmensuraSanCarlos_4);
var lyr_CoordenadasmensuraSanCarlos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoordenadasmensuraSanCarlos_4, 
                style: style_CoordenadasmensuraSanCarlos_4,
                popuplayertitle: 'Coordenadas mensura San Carlos',
                interactive: true,
                title: '<img src="styles/legend/CoordenadasmensuraSanCarlos_4.png" /> Coordenadas mensura San Carlos'
            });
var format_Mensura_SC_5 = new ol.format.GeoJSON();
var features_Mensura_SC_5 = format_Mensura_SC_5.readFeatures(json_Mensura_SC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mensura_SC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mensura_SC_5.addFeatures(features_Mensura_SC_5);
var lyr_Mensura_SC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mensura_SC_5, 
                style: style_Mensura_SC_5,
                popuplayertitle: 'Mensura_SC',
                interactive: true,
                title: '<img src="styles/legend/Mensura_SC_5.png" /> Mensura_SC'
            });
var format_PFV_SC_OC_r0caminos_servicio_6 = new ol.format.GeoJSON();
var features_PFV_SC_OC_r0caminos_servicio_6 = format_PFV_SC_OC_r0caminos_servicio_6.readFeatures(json_PFV_SC_OC_r0caminos_servicio_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFV_SC_OC_r0caminos_servicio_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PFV_SC_OC_r0caminos_servicio_6.addFeatures(features_PFV_SC_OC_r0caminos_servicio_6);
var lyr_PFV_SC_OC_r0caminos_servicio_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PFV_SC_OC_r0caminos_servicio_6, 
                style: style_PFV_SC_OC_r0caminos_servicio_6,
                popuplayertitle: 'PFV_SC_OC_r0 — caminos_servicio',
                interactive: true,
                title: '<img src="styles/legend/PFV_SC_OC_r0caminos_servicio_6.png" /> PFV_SC_OC_r0 — caminos_servicio'
            });
var format_PFV_SC_OC_r0caminos_perimetral_7 = new ol.format.GeoJSON();
var features_PFV_SC_OC_r0caminos_perimetral_7 = format_PFV_SC_OC_r0caminos_perimetral_7.readFeatures(json_PFV_SC_OC_r0caminos_perimetral_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFV_SC_OC_r0caminos_perimetral_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PFV_SC_OC_r0caminos_perimetral_7.addFeatures(features_PFV_SC_OC_r0caminos_perimetral_7);
var lyr_PFV_SC_OC_r0caminos_perimetral_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PFV_SC_OC_r0caminos_perimetral_7, 
                style: style_PFV_SC_OC_r0caminos_perimetral_7,
                popuplayertitle: 'PFV_SC_OC_r0 — caminos_perimetral',
                interactive: true,
                title: '<img src="styles/legend/PFV_SC_OC_r0caminos_perimetral_7.png" /> PFV_SC_OC_r0 — caminos_perimetral'
            });
var format_PFV_SC_OC_r0camino_secundario_8 = new ol.format.GeoJSON();
var features_PFV_SC_OC_r0camino_secundario_8 = format_PFV_SC_OC_r0camino_secundario_8.readFeatures(json_PFV_SC_OC_r0camino_secundario_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFV_SC_OC_r0camino_secundario_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PFV_SC_OC_r0camino_secundario_8.addFeatures(features_PFV_SC_OC_r0camino_secundario_8);
var lyr_PFV_SC_OC_r0camino_secundario_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PFV_SC_OC_r0camino_secundario_8, 
                style: style_PFV_SC_OC_r0camino_secundario_8,
                popuplayertitle: 'PFV_SC_OC_r0 — camino_secundario',
                interactive: true,
                title: '<img src="styles/legend/PFV_SC_OC_r0camino_secundario_8.png" /> PFV_SC_OC_r0 — camino_secundario'
            });
var format_PFV_SC_OC_r0camino_principal_9 = new ol.format.GeoJSON();
var features_PFV_SC_OC_r0camino_principal_9 = format_PFV_SC_OC_r0camino_principal_9.readFeatures(json_PFV_SC_OC_r0camino_principal_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFV_SC_OC_r0camino_principal_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PFV_SC_OC_r0camino_principal_9.addFeatures(features_PFV_SC_OC_r0camino_principal_9);
var lyr_PFV_SC_OC_r0camino_principal_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PFV_SC_OC_r0camino_principal_9, 
                style: style_PFV_SC_OC_r0camino_principal_9,
                popuplayertitle: 'PFV_SC_OC_r0 — camino_principal',
                interactive: true,
                title: '<img src="styles/legend/PFV_SC_OC_r0camino_principal_9.png" /> PFV_SC_OC_r0 — camino_principal'
            });
var format_PFV_SC_OC_r0camino_acceso_rp10_10 = new ol.format.GeoJSON();
var features_PFV_SC_OC_r0camino_acceso_rp10_10 = format_PFV_SC_OC_r0camino_acceso_rp10_10.readFeatures(json_PFV_SC_OC_r0camino_acceso_rp10_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFV_SC_OC_r0camino_acceso_rp10_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PFV_SC_OC_r0camino_acceso_rp10_10.addFeatures(features_PFV_SC_OC_r0camino_acceso_rp10_10);
var lyr_PFV_SC_OC_r0camino_acceso_rp10_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PFV_SC_OC_r0camino_acceso_rp10_10, 
                style: style_PFV_SC_OC_r0camino_acceso_rp10_10,
                popuplayertitle: 'PFV_SC_OC_r0 — camino_acceso_rp10',
                interactive: true,
                title: '<img src="styles/legend/PFV_SC_OC_r0camino_acceso_rp10_10.png" /> PFV_SC_OC_r0 — camino_acceso_rp10'
            });
var group_CaminosdelaObra = new ol.layer.Group({
                                layers: [lyr_PFV_SC_OC_r0caminos_servicio_6,lyr_PFV_SC_OC_r0caminos_perimetral_7,lyr_PFV_SC_OC_r0camino_secundario_8,lyr_PFV_SC_OC_r0camino_principal_9,lyr_PFV_SC_OC_r0camino_acceso_rp10_10,],
                                fold: 'open',
                                title: 'Caminos de la Obra'});
var group_CaminosExternos = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Caminos Externos'});
var group_Raster = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Raster'});

lyr_OpenTopoMap_0.setVisible(true);lyr_Estaciones_Meteorologicas_1.setVisible(true);lyr_PFV_SC_OC_r0obradores_2.setVisible(true);lyr_PFV_SC_OC_r0cerco_3.setVisible(true);lyr_CoordenadasmensuraSanCarlos_4.setVisible(true);lyr_Mensura_SC_5.setVisible(true);lyr_PFV_SC_OC_r0caminos_servicio_6.setVisible(true);lyr_PFV_SC_OC_r0caminos_perimetral_7.setVisible(true);lyr_PFV_SC_OC_r0camino_secundario_8.setVisible(true);lyr_PFV_SC_OC_r0camino_principal_9.setVisible(true);lyr_PFV_SC_OC_r0camino_acceso_rp10_10.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_Estaciones_Meteorologicas_1,lyr_PFV_SC_OC_r0obradores_2,lyr_PFV_SC_OC_r0cerco_3,lyr_CoordenadasmensuraSanCarlos_4,lyr_Mensura_SC_5,group_CaminosdelaObra];
lyr_Estaciones_Meteorologicas_1.set('fieldAliases', {'fid': 'fid', 'Estación_Meteorologica': 'Estación_Meteorologica', });
lyr_PFV_SC_OC_r0obradores_2.set('fieldAliases', {'fid': 'fid', 'Descripción': 'Descripción', });
lyr_PFV_SC_OC_r0cerco_3.set('fieldAliases', {'fid': 'fid', });
lyr_CoordenadasmensuraSanCarlos_4.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'X': 'X', 'Y': 'Y', });
lyr_Mensura_SC_5.set('fieldAliases', {'fid': 'fid', });
lyr_PFV_SC_OC_r0caminos_servicio_6.set('fieldAliases', {'fid': 'fid', });
lyr_PFV_SC_OC_r0caminos_perimetral_7.set('fieldAliases', {'fid': 'fid', });
lyr_PFV_SC_OC_r0camino_secundario_8.set('fieldAliases', {'fid': 'fid', });
lyr_PFV_SC_OC_r0camino_principal_9.set('fieldAliases', {'fid': 'fid', });
lyr_PFV_SC_OC_r0camino_acceso_rp10_10.set('fieldAliases', {'fid': 'fid', });
lyr_Estaciones_Meteorologicas_1.set('fieldImages', {'fid': 'TextEdit', 'Estación_Meteorologica': 'TextEdit', });
lyr_PFV_SC_OC_r0obradores_2.set('fieldImages', {'fid': 'TextEdit', 'Descripción': 'TextEdit', });
lyr_PFV_SC_OC_r0cerco_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_CoordenadasmensuraSanCarlos_4.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Mensura_SC_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_PFV_SC_OC_r0caminos_servicio_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_PFV_SC_OC_r0caminos_perimetral_7.set('fieldImages', {'fid': 'TextEdit', });
lyr_PFV_SC_OC_r0camino_secundario_8.set('fieldImages', {'fid': 'TextEdit', });
lyr_PFV_SC_OC_r0camino_principal_9.set('fieldImages', {'fid': 'TextEdit', });
lyr_PFV_SC_OC_r0camino_acceso_rp10_10.set('fieldImages', {'fid': 'TextEdit', });
lyr_Estaciones_Meteorologicas_1.set('fieldLabels', {'fid': 'no label', 'Estación_Meteorologica': 'no label', });
lyr_PFV_SC_OC_r0obradores_2.set('fieldLabels', {'fid': 'no label', 'Descripción': 'no label', });
lyr_PFV_SC_OC_r0cerco_3.set('fieldLabels', {'fid': 'no label', });
lyr_CoordenadasmensuraSanCarlos_4.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Mensura_SC_5.set('fieldLabels', {'fid': 'no label', });
lyr_PFV_SC_OC_r0caminos_servicio_6.set('fieldLabels', {'fid': 'no label', });
lyr_PFV_SC_OC_r0caminos_perimetral_7.set('fieldLabels', {'fid': 'no label', });
lyr_PFV_SC_OC_r0camino_secundario_8.set('fieldLabels', {'fid': 'no label', });
lyr_PFV_SC_OC_r0camino_principal_9.set('fieldLabels', {'fid': 'no label', });
lyr_PFV_SC_OC_r0camino_acceso_rp10_10.set('fieldLabels', {'fid': 'no label', });
lyr_PFV_SC_OC_r0camino_acceso_rp10_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});