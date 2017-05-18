window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
var imlost = 25;
function keydown(event) {
 // Tricksplit 4
    if (event.keyCode == 52) {
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
        setTimeout(ilikedick, imlost*3);
    } // Triplesplit 3
    if (event.keyCode == 51) {
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
    } // Doublesplit 2
    if (event.keyCode == 50) {
        ilikedick();
        setTimeout(ilikedick, imlost);
    } // PopSplit 1
    if (event.keyCode == 49) {
        ilikedick();
        setTimeout(ilikedick, imlost*8.2142354224);
    }
} 


function ilikedick() {
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32}));
}
