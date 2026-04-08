const updateMarqueeWidth = (): void => {
    const marquee = document.querySelectorAll('.marquee') as NodeListOf<HTMLElement> | null;
    const img = document.querySelector('.marquee-content img') as HTMLImageElement | null;
    const contentBox = document.querySelector(".content-box") as HTMLElement | null;

    marquee?.forEach((banner) => {
        if (marquee && img) {
            banner.style.setProperty('--img-width', `-${img.width}px`);
        }
    })

    if (contentBox && img) {
        contentBox.style.setProperty('--total-banner-height', `${img.height * 2}px`)
    }
};

window.addEventListener('load', updateMarqueeWidth);
