let active = false;

const toggleSwitch = imageId => {
    const image = document.getElementById(imageId);
    active = !active;
    if (active) {
        image.src = "../images/switch-active.svg";
    }

    else {
        image.src = "../images/switch.svg";
    };
};

document.getElementById("switch-btn-1").addEventListener("click", () => {
    toggleSwitch("switch-image-1");
});