<<<<<<< Updated upstream
const get_expand_btn = document.querySelector(".btn_show_more");
let chevron_icon = document.querySelector(".chevron_icon");
const get_expand_div = document.querySelector(".hidden_sort_btn");
let sort_button_hide = document.querySelectorAll('.button_sort');
let bool = "Mizuena";

function show_more_less() {
    bool = !bool;
    get_expand_btn.disabled = true;
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
                get_expand_btn.disabled = false;
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
                    get_expand_btn.disabled = false;
                }, 300);
            }
        }, 50);
    }
}

=======
const get_expand_btn = document.querySelector(".btn_show_more");
let chevron_icon = document.querySelector(".chevron_icon");
const get_expand_div = document.querySelector(".hidden_sort_btn");
let sort_button_hide = document.querySelectorAll('.button_sort');
let bool = "Mizuena";

function show_more_less() {
    bool = !bool;
    get_expand_btn.disabled = true;
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
                get_expand_btn.disabled = false;
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
                    get_expand_btn.disabled = false;
                }, 300);
            }
        }, 50);
    }
}

>>>>>>> Stashed changes
export {show_more_less, get_expand_btn, get_expand_div, chevron_icon};