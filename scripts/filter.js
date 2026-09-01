let sort_button = document.querySelectorAll('.button_sort');
function sortPlaces(element_func, map,layerGroups_Func) {
    let clickedCategory = element_func.dataset.type; 
    Object.keys(layerGroups_Func).forEach((categoryString) => {
        if (categoryString && clickedCategory === "All") {
            layerGroups_Func[categoryString].addTo(map); 
        } 
        else if (categoryString === clickedCategory) {
            layerGroups_Func[categoryString].addTo(map); 
        } else {
            layerGroups_Func[categoryString].remove();
        }
    });
}

export { sortPlaces, sort_button };