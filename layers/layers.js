var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_tpbusstd = new ol.layer.Image({
                            opacity: 1,
                            title: "Bus Stops Raster Layer",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/tpbusstd.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [68, 69],
                                imageExtent: [11568874.651981, 146223.744046, 11575636.811249, 153130.873483]
                            })
                        });var lyr_ExerciseFacilitiesstd = new ol.layer.Image({
                            opacity: 1,
                            title: "Exercise Facilities Raster Layer",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ExerciseFacilitiesstd.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [68, 69],
                                imageExtent: [11568874.651981, 146223.744046, 11575636.811249, 153130.873483]
                            })
                        });var lyr_tptrainstd = new ol.layer.Image({
                            opacity: 1,
                            title: "Train Stations Raster Layer",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/tptrainstd.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [68, 69],
                                imageExtent: [11568874.651981, 146223.744046, 11575636.811249, 153130.873483]
                            })
                        });var lyr_communityclubstd = new ol.layer.Image({
                            opacity: 1,
                            title: "Community Club Raster Layer",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/communityclubstd.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [68, 69],
                                imageExtent: [11568874.651981, 146223.744046, 11575636.811249, 153130.873483]
                            })
                        });var lyr_Parksstd = new ol.layer.Image({
                            opacity: 1,
                            title: "Parks Raster Layer",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Parksstd.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [68, 69],
                                imageExtent: [11568874.651981, 146223.744046, 11575636.811249, 153130.873483]
                            })
                        });var lyr_CHASClinicstd = new ol.layer.Image({
                            opacity: 1,
                            title: "CHAS Clinics Raster Layer",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CHASClinicstd.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [68, 69],
                                imageExtent: [11568874.651981, 146223.744046, 11575636.811249, 153130.873483]
                            })
                        });var lyr_eldercarestd = new ol.layer.Image({
                            opacity: 1,
                            title: "ElderCare Centres Raster Layer",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/eldercarestd.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [68, 69],
                                imageExtent: [11568874.651981, 146223.744046, 11575636.811249, 153130.873483]
                            })
                        });var format_tpbus = new ol.format.GeoJSON();
var features_tpbus = format_tpbus.readFeatures(geojson_tpbus, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_tpbus = new ol.source.Vector();
jsonSource_tpbus.addFeatures(features_tpbus);var lyr_tpbus = new ol.layer.Vector({
                source:jsonSource_tpbus, 
                style: style_tpbus,
                title: "Bus Stops"
            });var format_ExerciseFacilities = new ol.format.GeoJSON();
var features_ExerciseFacilities = format_ExerciseFacilities.readFeatures(geojson_ExerciseFacilities, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_ExerciseFacilities = new ol.source.Vector();
jsonSource_ExerciseFacilities.addFeatures(features_ExerciseFacilities);var lyr_ExerciseFacilities = new ol.layer.Vector({
                source:jsonSource_ExerciseFacilities, 
                style: style_ExerciseFacilities,
                title: "Exercise Facilities"
            });var format_tpTrain = new ol.format.GeoJSON();
var features_tpTrain = format_tpTrain.readFeatures(geojson_tpTrain, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_tpTrain = new ol.source.Vector();
jsonSource_tpTrain.addFeatures(features_tpTrain);var lyr_tpTrain = new ol.layer.Vector({
                source:jsonSource_tpTrain, 
                style: style_tpTrain,
                title: "Train Stations"
            });var format_CommunityClub = new ol.format.GeoJSON();
var features_CommunityClub = format_CommunityClub.readFeatures(geojson_CommunityClub, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_CommunityClub = new ol.source.Vector();
jsonSource_CommunityClub.addFeatures(features_CommunityClub);var lyr_CommunityClub = new ol.layer.Vector({
                source:jsonSource_CommunityClub, 
                style: style_CommunityClub,
                title: "Community Clubs"
            });var format_Parks = new ol.format.GeoJSON();
var features_Parks = format_Parks.readFeatures(geojson_Parks, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Parks = new ol.source.Vector();
jsonSource_Parks.addFeatures(features_Parks);var lyr_Parks = new ol.layer.Vector({
                source:jsonSource_Parks, 
                style: style_Parks,
                title: "Parks"
            });var format_CHASClinic = new ol.format.GeoJSON();
var features_CHASClinic = format_CHASClinic.readFeatures(geojson_CHASClinic, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_CHASClinic = new ol.source.Vector();
jsonSource_CHASClinic.addFeatures(features_CHASClinic);var lyr_CHASClinic = new ol.layer.Vector({
                source:jsonSource_CHASClinic, 
                style: style_CHASClinic,
                title: "CHAS Clinics"
            });var format_ElderCare = new ol.format.GeoJSON();
var features_ElderCare = format_ElderCare.readFeatures(geojson_ElderCare, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_ElderCare = new ol.source.Vector();
jsonSource_ElderCare.addFeatures(features_ElderCare);var lyr_ElderCare = new ol.layer.Vector({
                source:jsonSource_ElderCare, 
                style: style_ElderCare,
                title: "ElderCare Centres"
            });var format_AHPVectorRoadNetwork = new ol.format.GeoJSON();
var features_AHPVectorRoadNetwork = format_AHPVectorRoadNetwork.readFeatures(geojson_AHPVectorRoadNetwork, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_AHPVectorRoadNetwork = new ol.source.Vector();
jsonSource_AHPVectorRoadNetwork.addFeatures(features_AHPVectorRoadNetwork);var lyr_AHPVectorRoadNetwork = new ol.layer.Vector({
                source:jsonSource_AHPVectorRoadNetwork, 
                style: style_AHPVectorRoadNetwork,
                title: "Road Network (AHP)"
            });var format_EqualWeightedRoadNetwork = new ol.format.GeoJSON();
var features_EqualWeightedRoadNetwork = format_EqualWeightedRoadNetwork.readFeatures(geojson_EqualWeightedRoadNetwork, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_EqualWeightedRoadNetwork = new ol.source.Vector();
jsonSource_EqualWeightedRoadNetwork.addFeatures(features_EqualWeightedRoadNetwork);var lyr_EqualWeightedRoadNetwork = new ol.layer.Vector({
                source:jsonSource_EqualWeightedRoadNetwork, 
                style: style_EqualWeightedRoadNetwork,
                title: "Road Network (Equal Weights)"
            });var format_Tampines = new ol.format.GeoJSON();
var features_Tampines = format_Tampines.readFeatures(geojson_Tampines, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Tampines = new ol.source.Vector();
jsonSource_Tampines.addFeatures(features_Tampines);var lyr_Tampines = new ol.layer.Vector({
                source:jsonSource_Tampines, 
                style: style_Tampines,
                title: "Tampines"
            });var format_ElderlyDensityChoropleth = new ol.format.GeoJSON();
var features_ElderlyDensityChoropleth = format_ElderlyDensityChoropleth.readFeatures(geojson_ElderlyDensityChoropleth, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_ElderlyDensityChoropleth = new ol.source.Vector();
jsonSource_ElderlyDensityChoropleth.addFeatures(features_ElderlyDensityChoropleth);var lyr_ElderlyDensityChoropleth = new ol.layer.Vector({
                source:jsonSource_ElderlyDensityChoropleth, 
                style: style_ElderlyDensityChoropleth,
                title: "Elderly Density Choropleth"
            });var format_EasyAHPLayer = new ol.format.GeoJSON();
var features_EasyAHPLayer = format_EasyAHPLayer.readFeatures(geojson_EasyAHPLayer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_EasyAHPLayer = new ol.source.Vector();
jsonSource_EasyAHPLayer.addFeatures(features_EasyAHPLayer);var lyr_EasyAHPLayer = new ol.layer.Vector({
                source:jsonSource_EasyAHPLayer, 
                style: style_EasyAHPLayer,
                title: "Easy AHP Walkscore"
            });var format_EqualWeightLayer = new ol.format.GeoJSON();
var features_EqualWeightLayer = format_EqualWeightLayer.readFeatures(geojson_EqualWeightLayer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_EqualWeightLayer = new ol.source.Vector();
jsonSource_EqualWeightLayer.addFeatures(features_EqualWeightLayer);var lyr_EqualWeightLayer = new ol.layer.Vector({
                source:jsonSource_EqualWeightLayer, 
                style: style_EqualWeightLayer,
                title: "Equal Weights Walkscore"
            });
var group_StandardisedRasterLayers = new ol.layer.Group({
                                layers: [lyr_tpbusstd,lyr_ExerciseFacilitiesstd,lyr_tptrainstd,lyr_communityclubstd,lyr_Parksstd,lyr_CHASClinicstd,lyr_eldercarestd],
                                title: "Standardised Raster Layers"});
var group_PointofInterests = new ol.layer.Group({
                                layers: [lyr_tpbus,lyr_ExerciseFacilities,lyr_tpTrain,lyr_CommunityClub,lyr_Parks,lyr_CHASClinic,lyr_ElderCare],
                                title: "Point of Interests"});
var group_RoadNetworks = new ol.layer.Group({
                                layers: [lyr_AHPVectorRoadNetwork,lyr_EqualWeightedRoadNetwork],
                                title: "Road Networks"});

lyr_tpbusstd.setVisible(false);lyr_ExerciseFacilitiesstd.setVisible(false);lyr_tptrainstd.setVisible(false);lyr_communityclubstd.setVisible(false);lyr_Parksstd.setVisible(false);lyr_CHASClinicstd.setVisible(false);lyr_eldercarestd.setVisible(false);lyr_tpbus.setVisible(false);lyr_ExerciseFacilities.setVisible(false);lyr_tpTrain.setVisible(false);lyr_CommunityClub.setVisible(false);lyr_Parks.setVisible(false);lyr_CHASClinic.setVisible(false);lyr_ElderCare.setVisible(false);lyr_AHPVectorRoadNetwork.setVisible(false);lyr_EqualWeightedRoadNetwork.setVisible(false);lyr_Tampines.setVisible(true);lyr_Tampines.setOpacity(0.5);lyr_ElderlyDensityChoropleth.setVisible(false);lyr_ElderlyDensityChoropleth.setOpacity(0.85);lyr_EasyAHPLayer.setVisible(false);lyr_EasyAHPLayer.setOpacity(0.5);lyr_EqualWeightLayer.setVisible(true);lyr_EqualWeightLayer.setOpacity(0.5);
var layersList = [baseLayer,group_StandardisedRasterLayers,group_PointofInterests,group_RoadNetworks,lyr_Tampines,lyr_ElderlyDensityChoropleth,lyr_EasyAHPLayer,lyr_EqualWeightLayer];
