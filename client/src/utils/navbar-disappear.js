let previousScrollPosition = window.pageYOffset;

window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset;
    if (previousScrollPosition > currentScrollPosition || currentScrollPosition < "300") {
        document.querySelector("nav").style.top = "0";
    }else {
        document.querySelector("nav").style.top = "-100px";
    }
    previousScrollPosition = currentScrollPosition;
};