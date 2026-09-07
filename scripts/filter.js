import {leaflet_dynamic_zoom} from './dynamic_zoom.js';

let sort_button = document.querySelectorAll('.button_sort');

function sortPlaces(element_func,map,layerGroups_Func) {
    let clickedCategory = element_func.dataset.type;
    leaflet_dynamic_zoom(layerGroups_Func,map,clickedCategory);
}

export { sortPlaces, sort_button };