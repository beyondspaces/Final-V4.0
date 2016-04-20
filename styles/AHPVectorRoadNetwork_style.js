var size = 0;
var ranges_AHPVectorRoadNetwork = [[27.810650, 51.140759, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,245,240,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
    })]],
[51.140759, 69.736420, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(252,189,164,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })]],
[69.736420, 81.148614, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(251,112,80,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })]],
[81.148614, 87.598488, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(211,32,32,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })]],
[87.598488, 96.070823, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(103,0,13,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })]]];
var styleCache_AHPVectorRoadNetwork={}
var style_AHPVectorRoadNetwork = function(feature, resolution){
    var value = feature.get("easyAHPLay");
    var style = ranges_AHPVectorRoadNetwork[0][2];
    for (i = 0; i < ranges_AHPVectorRoadNetwork.length; i++){
        var range = ranges_AHPVectorRoadNetwork[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_AHPVectorRoadNetwork[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_AHPVectorRoadNetwork[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_AHPVectorRoadNetwork[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};