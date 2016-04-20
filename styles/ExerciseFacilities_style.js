var size = 0;

var styleCache_ExerciseFacilities={}
var style_ExerciseFacilities = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  src: "styles/sport_leisure_centre.svg"
            })
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_ExerciseFacilities[key]){
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
        styleCache_ExerciseFacilities[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_ExerciseFacilities[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};