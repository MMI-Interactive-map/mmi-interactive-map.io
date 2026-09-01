const get_expand_btn = document.querySelector(".btn_show_more");
const get_expand_div = document.querySelector(".hidden_sort_btn");
let sort_button_hide = document.querySelectorAll('.button_sort');
let chevron_icon = document.querySelector(".chevron_icon");
let bool = "Mizuena";
document.addEventListener('DOMContentLoaded', () => {
    // Attach your click listener here
});
function show_more_less() {
    bool = !bool;
    if (bool) {
        let index = 0;
        get_expand_div.style.display = "flex"
        if (window.innerWidth <= 540) {
            chevron_icon.style.rotate = "90deg";
        } else {
            chevron_icon.style.rotate = "180deg";
        }
        setTimeout(() => {
            get_expand_div.style.width = "auto"
        }, 20);
        let expand_btn = setInterval(() => {
            if (index <= sort_button_hide.length - 1) {
                sort_button_hide[index].style.opacity = "100%";
                index++;
            } else {
                clearInterval(expand_btn);
            }
        }, 50);
    }
    else {
        let index_0 = sort_button_hide.length - 1;
        if (window.innerWidth <= 540) {
            chevron_icon.style.rotate = "270deg";
        } else {
            chevron_icon.style.rotate = "360deg";
        }
        let remove_btn = setInterval(() => {
            if (index_0 >= 0) {
                sort_button_hide[index_0].style.opacity = "0%";
                index_0--;
            } else {
                clearInterval(remove_btn);
                get_expand_div.style.width = "0px"
                setTimeout(() => {
                    get_expand_div.style.display = "none"
                }, 300);
            }
        }, 50);
    }
}

export {show_more_less, get_expand_btn, get_expand_div, bool, chevron_icon};