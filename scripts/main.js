// import {icons} from "./icons.js";
import {spots_places} from "./spots.js";
import {Stadia_AlidadeSmooth,toggle_theme,button} from "./theme_switch.js";
import {sortPlaces,sort_button} from "./filter.js";
import {show_more_less, get_expand_btn} from "./hide_element.js";
import {leaflet_dynamic_zoom} from "./dynamic_zoom.js";

let activebutton = "All";
const layerGroups = {};
let MinZ = 0
if (window.innerWidth <= 540) {
    MinZ = 13
} else {
    MinZ = 14
}

let map = L.map('map', {minZoom: MinZ, maxZoom: 19}).setView([43.2331329,0.0752746], 15).setMaxBounds([[43.303753, -0.058706],[43.160907, 0.130221]]);
Stadia_AlidadeSmooth.addTo(map);
map.createPane("custom_popup", map.getContainer());
button.addEventListener('click', () => {
    toggle_theme(map);
})

get_expand_btn.addEventListener('click', () => {
    show_more_less();
})

sort_button.forEach((element) => {
    element.addEventListener('click', () => {
        activebutton = element.dataset.type;
        sortPlaces(element,map,layerGroups);
    })
})

map.on('zoomend', () => {
    leaflet_dynamic_zoom(layerGroups, map, activebutton);
});




// Loop from Spots.js to read all object to place them on the map
spots_places.forEach(element => {
    if (!layerGroups[element.type + element.zoomValue]) {
        map.createPane(`${element.type + element.zoomValue}`,map.getPane("markerPane"));
        layerGroups[element.type + element.zoomValue] = L.layerGroup().addTo(map);
    }
    let newMarker = L.marker(element.location, {icon: element.type_icon, pane: `${element.type + element.zoomValue}`}).addTo(layerGroups[element.type + element.zoomValue]);
    newMarker.bindTooltip(`<h3 style = 'color: ${element.color}'>${element.name}</h3>`, {permanent: true, }).openTooltip().bindPopup(
        `<h2 class = 'custom_popup_name'>${element.name}</h2>` +
        `<img class = 'custom_popup_image' src="${element.picture}" alt="Image">` +
        `<table class ='custom_popup_table'><tbody><caption>Statut</caption><tr><td>Lundi</td><td>${element.hours[0]}</td></tr><tr><td>Mardi<br></td><td>${element.hours[1]}</td></tr><tr><td>Mercredi</td><td>${element.hours[2]}</td></tr><tr><td>Jeudi</td><td>${element.hours[3]}</td></tr><tr><td>Vendredi</td><td>${element.hours[4]}</td></tr><tr><td>Samedi</td><td>${element.hours[5]}</td></tr><tr><td>Dimanche</td><td>${element.hours[6]}</td></tr></tbody></table>` +
        `<div class ='custom_pop_table'></div>` +
        `<p class = 'custom_popup_comment'>${element.comment}</p>` +
        `<a class ='custom_popup_link' href="${element.GoogleMapLink}"><img class = 'custom_popup_icon_map' src="/src/icons_map/map--location-arrow.svg" alt="icon">Ouvrir Google Map</a>` +
        `<a class ='custom_popup_link' href="###"><img class = 'custom_popup_icon_map' src="/src/icons_map/basil--phone-solid.svg" alt="icon">${element.number}</a>`,
        {pane: "custom_popup", autoPan: false});
});