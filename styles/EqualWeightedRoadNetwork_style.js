var size = 0;
var ranges_EqualWeightedRoadNetwork = [[18.186033, 31.292464, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,245,240,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
    })]],
[31.292464, 62.321506, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(252,189,164,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })]],
[62.321506, 77.530893, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(251,112,80,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })]],
[77.530893, 86.350677, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(211,32,32,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })]],
[86.350677, 95.684517, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(103,0,13,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })]]];
var styleCache_EqualWeightedRoadNetwork={}
var style_EqualWeightedRoadNetwork = function(feature, resolution){
    var value = feature.get("equalweigh");
    var style = ranges_EqualWeightedRoadNetwork[0][2];
    for (i = 0; i < ranges_EqualWeightedRoadNetwork.length; i++){
        var range = ranges_EqualWeightedRoadNetwork[i];
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

    if (!styleCache_EqualWeightedRoadNetwork[key]){
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
        styleCache_EqualWeightedRoadNetwork[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_EqualWeightedRoadNetwork[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};