let is_light_mod_map_true = true;
const button = document.querySelector(".switch_theme");
const switch_img = document.querySelector(".get_img");
function toggle_theme(mapInstance) {
    is_light_mod_map_true = !is_light_mod_map_true;
    if (is_light_mod_map_true) {
        Stadia_AlidadeSmoothDark.remove(mapInstance);
        Stadia_AlidadeSmooth.addTo(mapInstance);
        switch_img.src = "../src/icons_map/lightmode.png";
    }
    else {
        Stadia_AlidadeSmooth.remove(mapInstance);
        Stadia_AlidadeSmoothDark.addTo(mapInstance);
        switch_img.src = "../src/icons_map/DarkMode.png";
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