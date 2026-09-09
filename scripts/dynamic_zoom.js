<<<<<<< Updated upstream
function leaflet_dynamic_zoom(layerGroups_elm,map_elm,cur_btn_elm) {
    let CurZoom = map_elm.getZoom();
    Object.keys(layerGroups_elm).forEach((categoryString) => {
        let Zoom = parseInt(categoryString.slice(-2));
        if ((CurZoom <= 14) && (Zoom <= 14)) {
            if ((cur_btn_elm === categoryString.slice(0, -2)) || (cur_btn_elm === "All" )) {
                layerGroups_elm[categoryString].addTo(map_elm); 
            } else {
                layerGroups_elm[categoryString].remove(); 
            }
        } else if (CurZoom >= Zoom) {
            if ((cur_btn_elm === categoryString.slice(0, -2)) || (cur_btn_elm === "All" )) {
                layerGroups_elm[categoryString].addTo(map_elm); 
            } else {
                layerGroups_elm[categoryString].remove(); 
            }
        } else {
            layerGroups_elm[categoryString].remove();
        }
    });   
}

=======
function leaflet_dynamic_zoom(layerGroups_elm,map_elm,cur_btn_elm) {
    let CurZoom = map_elm.getZoom();
    Object.keys(layerGroups_elm).forEach((categoryString) => {
        let Zoom = parseInt(categoryString.slice(-2));
        if ((cur_btn_elm === categoryString.slice(0, -2)) && (cur_btn_elm !== "All" )) {
            layerGroups_elm[categoryString].addTo(map_elm); 
        } else if ((CurZoom <= 14) && (Zoom <= 14)) {
            if ((cur_btn_elm === categoryString.slice(0, -2)) || (cur_btn_elm === "All" )) {
                layerGroups_elm[categoryString].addTo(map_elm); 
            } else {
                layerGroups_elm[categoryString].remove(); 
            }
        } else if (CurZoom >= Zoom) {
            if ((cur_btn_elm === "All")) {
                layerGroups_elm[categoryString].addTo(map_elm); 
            } else {
                layerGroups_elm[categoryString].remove(); 
            }
        } else {
            layerGroups_elm[categoryString].remove();
        } 
    });   
}

>>>>>>> Stashed changes
export {leaflet_dynamic_zoom};