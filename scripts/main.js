import {icons} from "./icons.js";
import {spots_places} from "./spots.js";
import {is_light_mod_map_true,Stadia_AlidadeSmooth,Stadia_AlidadeSmoothDark,toggle_theme,button} from "./theme_switch.js";
import {sortPlaces,sort_button} from "./filter.js";

const layerGroups = {};


let map = L.map('map', {minZoom: 15, maxZoom: 19}).setView([43.2331329,0.0752746], 15).setMaxBounds([[43.303753, -0.058706],[43.160907, 0.130221]]);
Stadia_AlidadeSmooth.addTo(map);

button.addEventListener('click', () => {
    toggle_theme(map);
})

sort_button.forEach((element,index) => {
    element.addEventListener('click', () => {
        sortPlaces(element,map,layerGroups);
    })
})

map.createPane("custom_popup", map.getContainer())
// Loop from Spots.js to read all object to place them on the map

spots_places.forEach(element => {
    if (!layerGroups[element.type]) {
        map.createPane(`${element.type}`,map.getPane("markerPane"));
        layerGroups[element.type] = L.layerGroup().addTo(map);
    }
    let newMarker = L.marker(element.location, {icon: element.type_icon, pane: `${element.type}`}).addTo(layerGroups[element.type]);
    newMarker.bindTooltip(`<h3 style = 'color: ${element.color}'>${element.name}</h3>`, {permanent: true, }).openTooltip().bindPopup(
        `<h2 class = 'custom_popup_name'>${element.name}</h2>` +
        `<img class = 'custom_popup_image' src="${element.picture}" alt="Image">` +
        `<table class ='custom_popup_table'><tbody><tr><td>Lundi</td><td>${element.hours[0]}</td></tr><tr><td>Mardi<br></td><td>${element.hours[1]}</td></tr><tr><td>Mercredi</td><td>${element.hours[2]}</td></tr><tr><td>Jeudi</td><td>${element.hours[3]}</td></tr><tr><td>Vendredi</td><td>${element.hours[4]}</td></tr><tr><td>Samedi</td><td>${element.hours[5]}</td></tr><tr><td>Dimanche</td><td>${element.hours[6]}</td></tr></tbody></table>` +
        `<p class = 'custom_popup_comment'>${element.comment}</p>` +
        `<a class ='custom_popup_link' href="${element.GoogleMapLink}"><img class = 'custom_popup_icon_map' src="/src/icons_map/map--location-arrow.svg" alt="icon">Ouvrir Google Map</a>` +
        `<a class ='custom_popup_link' href="###"><img class = 'custom_popup_icon_map' src="/src/icons_map/basil--phone-solid.svg" alt="icon">${element.number}</a>`,
        {pane: "custom_popup", autoPan: false});
});
