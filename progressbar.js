document.addEventListener('DOMContentLoaded', () => {
    html = document.documentElement;
    containerBar = document.getElementById('container-bar');
    progressBar = document.getElementById('progress-bar');
    init_containerBar();
    init_progressBar();
});

window.addEventListener('scroll', makeScroll);

function makeScroll() {
    const totScroll = html.scrollHeight - html.clientHeight;
    progressBar.style.width = (html.scrollTop * 100) / totScroll + "%";
}

function init_containerBar() {
    containerBar.style.position = "fixed";
    containerBar.style.top = "0";
    containerBar.style.left = "0";
    containerBar.style.width = "100%";
    containerBar.style.height = "10px";
    containerBar.style.background = "lightgray";
}

function init_progressBar() {
    progressBar.style.position = "absolute";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.width = "0%";
    progressBar.style.height = "10px";
    progressBar.style.background = "red";
}