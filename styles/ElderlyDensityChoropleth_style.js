var size = 0;
var ranges_ElderlyDensityChoropleth = [[0.000000, 0.000625, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(247,251,255,0.5)"})
    })]],
[0.000625, 0.001870, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(199,220,239,0.5)"})
    })]],
[0.001870, 0.003448, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(114,178,215,0.5)"})
    })]],
[0.003448, 0.005636, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(40,120,184,0.5)"})
    })]],
[0.005636, 0.007998, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(8,48,107,0.5)"})
    })]]];
var styleCache_ElderlyDensityChoropleth={}
var style_ElderlyDensityChoropleth = function(feature, resolution){
    var value = feature.get("ElderlyDen");
    var style = ranges_ElderlyDensityChoropleth[0][2];
    for (i = 0; i < ranges_ElderlyDensityChoropleth.length; i++){
        var range = ranges_ElderlyDensityChoropleth[i];
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

    if (!styleCache_ElderlyDensityChoropleth[key]){
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
        styleCache_ElderlyDensityChoropleth[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_ElderlyDensityChoropleth[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};