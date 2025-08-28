var size = 0;
var placement = 'point';
function categories_CentrosdeAyuda_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Administración Jurídica':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1280, 1280],
                  scale: 0.0125,
                  anchor: [0.5, 0.5],
                  anchorXUnits: "fraction",
                  anchorYUnits: "fraction",
                  rotation: 0.0,
                  src: "styles/telefono.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Administración Pública':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1280, 1280],
                  scale: 0.0125,
                  anchor: [0.5, 0.5],
                  anchorXUnits: "fraction",
                  anchorYUnits: "fraction",
                  rotation: 0.0,
                  src: "styles/telefono_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Centro de Atención':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1280, 1280],
                  scale: 0.0125,
                  anchor: [0.5, 0.5],
                  anchorXUnits: "fraction",
                  anchorYUnits: "fraction",
                  rotation: 0.0,
                  src: "styles/telefono_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Línea Telefónica':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1280, 1280],
                  scale: 0.0125,
                  anchor: [0.5, 0.5],
                  anchorXUnits: "fraction",
                  anchorYUnits: "fraction",
                  rotation: 0.0,
                  src: "styles/telefono_3.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Recursero':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1280, 1280],
                  scale: 0.0125,
                  anchor: [0.5, 0.5],
                  anchorXUnits: "fraction",
                  anchorYUnits: "fraction",
                  rotation: 0.0,
                  src: "styles/telefono_4.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Línea Nacional':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1280, 1280],
                  scale: 0.0125,
                  anchor: [0.5, 0.5],
                  anchorXUnits: "fraction",
                  anchorYUnits: "fraction",
                  rotation: 0.0,
                  src: "styles/telefono_5.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_CentrosdeAyuda_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Tipo");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_CentrosdeAyuda_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
