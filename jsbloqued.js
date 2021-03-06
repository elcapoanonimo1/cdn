jQuery(window).resize(function () {
	cr_sizeCanvas(jQuery(window).width(), jQuery(window).height());
});
window.addEventListener('orientationchange', cr_sizeCanvas, false);
jQuery(document).ready(function () {
	cr.createRuntime("c2canvas");
	cr_sizeCanvas(jQuery(window).width(), jQuery(window).height());
});

function onVisibilityChanged() {
	if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden) cr_setSuspended(true);
	else cr_setSuspended(false);
}
document.addEventListener("visibilitychange", onVisibilityChanged, false);
document.addEventListener("mozvisibilitychange", onVisibilityChanged, false);
document.addEventListener("webkitvisibilitychange", onVisibilityChanged, false);
document.addEventListener("msvisibilitychange", onVisibilityChanged, false);
