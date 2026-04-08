const updateImgSize = (): void => {
    const bounceContainer = document.querySelector(".bounce-container") as HTMLElement | null;
    const bounceVariables = document.querySelector(".bounce-vars") as HTMLElement | null;
    const oxmilkImg = document.querySelector("#oxmilk-bounce") as HTMLImageElement | null;
    const gabagoolImg = document.querySelector("#gabagool-bounce") as HTMLImageElement | null;
    const cartonImg = document.querySelector("#carton-bounce") as HTMLImageElement | null;

    if (bounceContainer) {
        const rect = bounceContainer.getBoundingClientRect();
        bounceVariables?.style.setProperty('--calculated-c-width', `${rect.width}px`);
        bounceVariables?.style.setProperty('--calculated-c-height', `${rect.height}px`);
    }

    if (oxmilkImg) {
        bounceVariables?.style.setProperty('--oxmilk-img-width', `${oxmilkImg.offsetWidth}px`);
        bounceVariables?.style.setProperty('--oxmilk-img-height', `${oxmilkImg.offsetHeight}px`);
    }
    if (gabagoolImg) {
        bounceVariables?.style.setProperty('--gabagool-img-width', `${gabagoolImg.offsetWidth}px`);
        bounceVariables?.style.setProperty('--gabagool-img-height', `${gabagoolImg.offsetHeight}px`);
    }
    if (cartonImg) {
        bounceVariables?.style.setProperty('--carton-img-width', `${cartonImg.offsetWidth}px`);
        bounceVariables?.style.setProperty('--carton-img-height', `${cartonImg.offsetHeight}px`);
    }
}

window.addEventListener('load', updateImgSize);
window.addEventListener('resize', updateImgSize);
