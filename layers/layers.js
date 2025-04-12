var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Roads_1 = new ol.format.GeoJSON();
var features_Roads_1 = format_Roads_1.readFeatures(json_Roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_1.addFeatures(features_Roads_1);
var lyr_Roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_1, 
                style: style_Roads_1,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_1.png" /> Roads'
            });
var format_AdminBlock_2 = new ol.format.GeoJSON();
var features_AdminBlock_2 = format_AdminBlock_2.readFeatures(json_AdminBlock_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdminBlock_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdminBlock_2.addFeatures(features_AdminBlock_2);
var lyr_AdminBlock_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdminBlock_2, 
                style: style_AdminBlock_2,
                popuplayertitle: 'Admin Block',
                interactive: true,
                title: '<img src="styles/legend/AdminBlock_2.png" /> Admin Block'
            });
var format_Tower1_3 = new ol.format.GeoJSON();
var features_Tower1_3 = format_Tower1_3.readFeatures(json_Tower1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower1_3.addFeatures(features_Tower1_3);
var lyr_Tower1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower1_3, 
                style: style_Tower1_3,
                popuplayertitle: 'Tower 1',
                interactive: true,
                title: '<img src="styles/legend/Tower1_3.png" /> Tower 1'
            });
var format_Tower2_4 = new ol.format.GeoJSON();
var features_Tower2_4 = format_Tower2_4.readFeatures(json_Tower2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower2_4.addFeatures(features_Tower2_4);
var lyr_Tower2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower2_4, 
                style: style_Tower2_4,
                popuplayertitle: 'Tower 2',
                interactive: true,
                title: '<img src="styles/legend/Tower2_4.png" /> Tower 2'
            });
var format_Tower3_5 = new ol.format.GeoJSON();
var features_Tower3_5 = format_Tower3_5.readFeatures(json_Tower3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower3_5.addFeatures(features_Tower3_5);
var lyr_Tower3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower3_5, 
                style: style_Tower3_5,
                popuplayertitle: 'Tower 3',
                interactive: true,
                title: '<img src="styles/legend/Tower3_5.png" /> Tower 3'
            });
var format_Tower4_6 = new ol.format.GeoJSON();
var features_Tower4_6 = format_Tower4_6.readFeatures(json_Tower4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower4_6.addFeatures(features_Tower4_6);
var lyr_Tower4_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower4_6, 
                style: style_Tower4_6,
                popuplayertitle: 'Tower 4',
                interactive: true,
                title: '<img src="styles/legend/Tower4_6.png" /> Tower 4'
            });
var format_Tower5_7 = new ol.format.GeoJSON();
var features_Tower5_7 = format_Tower5_7.readFeatures(json_Tower5_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower5_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower5_7.addFeatures(features_Tower5_7);
var lyr_Tower5_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower5_7, 
                style: style_Tower5_7,
                popuplayertitle: 'Tower 5',
                interactive: true,
                title: '<img src="styles/legend/Tower5_7.png" /> Tower 5'
            });
var format_AnapurnaMess_8 = new ol.format.GeoJSON();
var features_AnapurnaMess_8 = format_AnapurnaMess_8.readFeatures(json_AnapurnaMess_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnapurnaMess_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnapurnaMess_8.addFeatures(features_AnapurnaMess_8);
var lyr_AnapurnaMess_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnapurnaMess_8, 
                style: style_AnapurnaMess_8,
                popuplayertitle: 'Anapurna Mess',
                interactive: true,
                title: '<img src="styles/legend/AnapurnaMess_8.png" /> Anapurna Mess'
            });
var format_HotwaterGenerator_9 = new ol.format.GeoJSON();
var features_HotwaterGenerator_9 = format_HotwaterGenerator_9.readFeatures(json_HotwaterGenerator_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotwaterGenerator_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotwaterGenerator_9.addFeatures(features_HotwaterGenerator_9);
var lyr_HotwaterGenerator_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotwaterGenerator_9, 
                style: style_HotwaterGenerator_9,
                popuplayertitle: 'Hotwater Generator',
                interactive: true,
                title: '<img src="styles/legend/HotwaterGenerator_9.png" /> Hotwater Generator'
            });
var format_BasketBallCourt_10 = new ol.format.GeoJSON();
var features_BasketBallCourt_10 = format_BasketBallCourt_10.readFeatures(json_BasketBallCourt_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BasketBallCourt_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BasketBallCourt_10.addFeatures(features_BasketBallCourt_10);
var lyr_BasketBallCourt_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BasketBallCourt_10, 
                style: style_BasketBallCourt_10,
                popuplayertitle: 'Basket Ball Court',
                interactive: true,
                title: '<img src="styles/legend/BasketBallCourt_10.png" /> Basket Ball Court'
            });
var format_VedavatiHostel_11 = new ol.format.GeoJSON();
var features_VedavatiHostel_11 = format_VedavatiHostel_11.readFeatures(json_VedavatiHostel_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VedavatiHostel_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VedavatiHostel_11.addFeatures(features_VedavatiHostel_11);
var lyr_VedavatiHostel_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VedavatiHostel_11, 
                style: style_VedavatiHostel_11,
                popuplayertitle: 'Vedavati Hostel',
                interactive: true,
                title: '<img src="styles/legend/VedavatiHostel_11.png" /> Vedavati Hostel'
            });
var format_GangaHostel_12 = new ol.format.GeoJSON();
var features_GangaHostel_12 = format_GangaHostel_12.readFeatures(json_GangaHostel_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GangaHostel_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GangaHostel_12.addFeatures(features_GangaHostel_12);
var lyr_GangaHostel_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GangaHostel_12, 
                style: style_GangaHostel_12,
                popuplayertitle: 'Ganga Hostel',
                interactive: true,
                title: '<img src="styles/legend/GangaHostel_12.png" /> Ganga Hostel'
            });
var format_SRBlock_13 = new ol.format.GeoJSON();
var features_SRBlock_13 = format_SRBlock_13.readFeatures(json_SRBlock_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SRBlock_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SRBlock_13.addFeatures(features_SRBlock_13);
var lyr_SRBlock_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SRBlock_13, 
                style: style_SRBlock_13,
                popuplayertitle: 'SR Block',
                interactive: true,
                title: '<img src="styles/legend/SRBlock_13.png" /> SR Block'
            });
var format_CVRamanBlock_14 = new ol.format.GeoJSON();
var features_CVRamanBlock_14 = format_CVRamanBlock_14.readFeatures(json_CVRamanBlock_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CVRamanBlock_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CVRamanBlock_14.addFeatures(features_CVRamanBlock_14);
var lyr_CVRamanBlock_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CVRamanBlock_14, 
                style: style_CVRamanBlock_14,
                popuplayertitle: 'CV Raman Block',
                interactive: true,
                title: '<img src="styles/legend/CVRamanBlock_14.png" /> CV Raman Block'
            });
var format_XLab_15 = new ol.format.GeoJSON();
var features_XLab_15 = format_XLab_15.readFeatures(json_XLab_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XLab_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XLab_15.addFeatures(features_XLab_15);
var lyr_XLab_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XLab_15, 
                style: style_XLab_15,
                popuplayertitle: 'X Lab',
                interactive: true,
                title: '<img src="styles/legend/XLab_15.png" /> X Lab'
            });
var format_JCBose_16 = new ol.format.GeoJSON();
var features_JCBose_16 = format_JCBose_16.readFeatures(json_JCBose_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JCBose_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JCBose_16.addFeatures(features_JCBose_16);
var lyr_JCBose_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JCBose_16, 
                style: style_JCBose_16,
                popuplayertitle: 'J C Bose',
                interactive: true,
                title: '<img src="styles/legend/JCBose_16.png" /> J C Bose'
            });
var format_TennisCourt_17 = new ol.format.GeoJSON();
var features_TennisCourt_17 = format_TennisCourt_17.readFeatures(json_TennisCourt_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TennisCourt_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TennisCourt_17.addFeatures(features_TennisCourt_17);
var lyr_TennisCourt_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TennisCourt_17, 
                style: style_TennisCourt_17,
                popuplayertitle: 'Tennis Court',
                interactive: true,
                title: '<img src="styles/legend/TennisCourt_17.png" /> Tennis Court'
            });
var format_FoodCourt_18 = new ol.format.GeoJSON();
var features_FoodCourt_18 = format_FoodCourt_18.readFeatures(json_FoodCourt_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoodCourt_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodCourt_18.addFeatures(features_FoodCourt_18);
var lyr_FoodCourt_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FoodCourt_18, 
                style: style_FoodCourt_18,
                popuplayertitle: 'Food Court',
                interactive: true,
                title: '<img src="styles/legend/FoodCourt_18.png" /> Food Court'
            });
var format_CrcketGround_19 = new ol.format.GeoJSON();
var features_CrcketGround_19 = format_CrcketGround_19.readFeatures(json_CrcketGround_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CrcketGround_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CrcketGround_19.addFeatures(features_CrcketGround_19);
var lyr_CrcketGround_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CrcketGround_19, 
                style: style_CrcketGround_19,
                popuplayertitle: 'Crcket Ground',
                interactive: true,
                title: '<img src="styles/legend/CrcketGround_19.png" /> Crcket Ground'
            });
var format_FootBallGround_20 = new ol.format.GeoJSON();
var features_FootBallGround_20 = format_FootBallGround_20.readFeatures(json_FootBallGround_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FootBallGround_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FootBallGround_20.addFeatures(features_FootBallGround_20);
var lyr_FootBallGround_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FootBallGround_20, 
                style: style_FootBallGround_20,
                popuplayertitle: 'Foot Ball Ground',
                interactive: true,
                title: '<img src="styles/legend/FootBallGround_20.png" /> Foot Ball Ground'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Roads_1.setVisible(true);lyr_AdminBlock_2.setVisible(true);lyr_Tower1_3.setVisible(true);lyr_Tower2_4.setVisible(true);lyr_Tower3_5.setVisible(true);lyr_Tower4_6.setVisible(true);lyr_Tower5_7.setVisible(true);lyr_AnapurnaMess_8.setVisible(true);lyr_HotwaterGenerator_9.setVisible(true);lyr_BasketBallCourt_10.setVisible(true);lyr_VedavatiHostel_11.setVisible(true);lyr_GangaHostel_12.setVisible(true);lyr_SRBlock_13.setVisible(true);lyr_CVRamanBlock_14.setVisible(true);lyr_XLab_15.setVisible(true);lyr_JCBose_16.setVisible(true);lyr_TennisCourt_17.setVisible(true);lyr_FoodCourt_18.setVisible(true);lyr_CrcketGround_19.setVisible(true);lyr_FootBallGround_20.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Roads_1,lyr_AdminBlock_2,lyr_Tower1_3,lyr_Tower2_4,lyr_Tower3_5,lyr_Tower4_6,lyr_Tower5_7,lyr_AnapurnaMess_8,lyr_HotwaterGenerator_9,lyr_BasketBallCourt_10,lyr_VedavatiHostel_11,lyr_GangaHostel_12,lyr_SRBlock_13,lyr_CVRamanBlock_14,lyr_XLab_15,lyr_JCBose_16,lyr_TennisCourt_17,lyr_FoodCourt_18,lyr_CrcketGround_19,lyr_FootBallGround_20];
lyr_Roads_1.set('fieldAliases', {'id': 'id', });
lyr_AdminBlock_2.set('fieldAliases', {'id': 'id', });
lyr_Tower1_3.set('fieldAliases', {'id': 'id', });
lyr_Tower2_4.set('fieldAliases', {'id': 'id', });
lyr_Tower3_5.set('fieldAliases', {'id': 'id', });
lyr_Tower4_6.set('fieldAliases', {'id': 'id', });
lyr_Tower5_7.set('fieldAliases', {'id': 'id', });
lyr_AnapurnaMess_8.set('fieldAliases', {'id': 'id', });
lyr_HotwaterGenerator_9.set('fieldAliases', {'id': 'id', });
lyr_BasketBallCourt_10.set('fieldAliases', {'id': 'id', });
lyr_VedavatiHostel_11.set('fieldAliases', {'id': 'id', });
lyr_GangaHostel_12.set('fieldAliases', {'id': 'id', });
lyr_SRBlock_13.set('fieldAliases', {'id': 'id', });
lyr_CVRamanBlock_14.set('fieldAliases', {'id': 'id', });
lyr_XLab_15.set('fieldAliases', {'id': 'id', });
lyr_JCBose_16.set('fieldAliases', {'id': 'id', });
lyr_TennisCourt_17.set('fieldAliases', {'id': 'id', });
lyr_FoodCourt_18.set('fieldAliases', {'id': 'id', });
lyr_CrcketGround_19.set('fieldAliases', {'id': 'id', });
lyr_FootBallGround_20.set('fieldAliases', {'id': 'id', });
lyr_Roads_1.set('fieldImages', {'id': 'TextEdit', });
lyr_AdminBlock_2.set('fieldImages', {'id': '', });
lyr_Tower1_3.set('fieldImages', {'id': '', });
lyr_Tower2_4.set('fieldImages', {'id': '', });
lyr_Tower3_5.set('fieldImages', {'id': '', });
lyr_Tower4_6.set('fieldImages', {'id': '', });
lyr_Tower5_7.set('fieldImages', {'id': '', });
lyr_AnapurnaMess_8.set('fieldImages', {'id': '', });
lyr_HotwaterGenerator_9.set('fieldImages', {'id': '', });
lyr_BasketBallCourt_10.set('fieldImages', {'id': '', });
lyr_VedavatiHostel_11.set('fieldImages', {'id': '', });
lyr_GangaHostel_12.set('fieldImages', {'id': '', });
lyr_SRBlock_13.set('fieldImages', {'id': '', });
lyr_CVRamanBlock_14.set('fieldImages', {'id': '', });
lyr_XLab_15.set('fieldImages', {'id': '', });
lyr_JCBose_16.set('fieldImages', {'id': '', });
lyr_TennisCourt_17.set('fieldImages', {'id': '', });
lyr_FoodCourt_18.set('fieldImages', {'id': '', });
lyr_CrcketGround_19.set('fieldImages', {'id': '', });
lyr_FootBallGround_20.set('fieldImages', {'id': '', });
lyr_Roads_1.set('fieldLabels', {'id': 'no label', });
lyr_AdminBlock_2.set('fieldLabels', {'id': 'no label', });
lyr_Tower1_3.set('fieldLabels', {'id': 'no label', });
lyr_Tower2_4.set('fieldLabels', {'id': 'no label', });
lyr_Tower3_5.set('fieldLabels', {'id': 'no label', });
lyr_Tower4_6.set('fieldLabels', {'id': 'no label', });
lyr_Tower5_7.set('fieldLabels', {'id': 'no label', });
lyr_AnapurnaMess_8.set('fieldLabels', {'id': 'no label', });
lyr_HotwaterGenerator_9.set('fieldLabels', {'id': 'no label', });
lyr_BasketBallCourt_10.set('fieldLabels', {'id': 'no label', });
lyr_VedavatiHostel_11.set('fieldLabels', {'id': 'no label', });
lyr_GangaHostel_12.set('fieldLabels', {'id': 'no label', });
lyr_SRBlock_13.set('fieldLabels', {'id': 'no label', });
lyr_CVRamanBlock_14.set('fieldLabels', {'id': 'no label', });
lyr_XLab_15.set('fieldLabels', {'id': 'no label', });
lyr_JCBose_16.set('fieldLabels', {'id': 'no label', });
lyr_TennisCourt_17.set('fieldLabels', {'id': 'no label', });
lyr_FoodCourt_18.set('fieldLabels', {'id': 'no label', });
lyr_CrcketGround_19.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_FootBallGround_20.set('fieldLabels', {'id': 'no label', });
lyr_FootBallGround_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});