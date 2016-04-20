var size = 0;

var styleCache_tpbus={}
var style_tpbus = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  src: "styles/transport_bus_stop2.svg"
            })
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_tpbus[key]){
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
        styleCache_tpbus[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_tpbus[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};