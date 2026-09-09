let is_light_mod_map_true = true;
const button = document.querySelector(".switch_theme");
const switch_img = document.querySelector(".get_img");
let popup = document.querySelector(".leaflet-popup-content-wrapper");


function toggle_element_theme(bool_theme) {
  if (!bool_theme) {
    let popup = document.querySelector(".leaflet-popup-content-wrapper");
    popup.classList.remove("leaflet-popup-content-wrapper");
    popup.classList.add("leaflet-popup-content-wrapper_dark");
    for (let index = 0; index < 2; index++) {
        document.querySelectorAll(".custom_popup_hr")[index].style.background = "#E6DADA";
        document.querySelectorAll(".custom_popup_icon_map")[index].style.filter = "invert(0.9)";
    }
  } else {
    let popup = document.querySelector(".leaflet-popup-content-wrapper_dark");
    popup.classList.remove("leaflet-popup-content-wrapper_dark");
    popup.classList.add("leaflet-popup-content-wrapper");
    for (let index = 0; index < 2; index++) {
        document.querySelectorAll(".custom_popup_hr")[index].style.background = "#333";
        document.querySelectorAll(".custom_popup_icon_map")[index].style.filter = "invert(0)";
    }
  }
}

function toggle_theme(mapInstance) {
    is_light_mod_map_true = !is_light_mod_map_true;
    if (is_light_mod_map_true) {
        Stadia_AlidadeSmoothDark.remove(mapInstance);
        Stadia_AlidadeSmooth.addTo(mapInstance);
        switch_img.src = "./src/icons_map/lightmode.png";
        toggle_element_theme(is_light_mod_map_true);
    }
    else {
        Stadia_AlidadeSmooth.remove(mapInstance);
        Stadia_AlidadeSmoothDark.addTo(mapInstance);
        switch_img.src = "./src/icons_map/DarkMode.png";
        toggle_element_theme(is_light_mod_map_true);
    }
}

var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});

var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});

export {is_light_mod_map_true,Stadia_AlidadeSmooth,Stadia_AlidadeSmoothDark,toggle_theme,button};