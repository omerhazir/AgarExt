window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
var imlost = 25;
function keydown(event) {
 // Triplesplit Z
    if (event.keyCode == 68) {
        ilikedick();
        setTimeout(ilikedick, imlost*3);
    }
}

function ilikedick() {
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32}));
}
