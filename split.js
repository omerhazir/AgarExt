window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
var Feed = false;
var Dingus = false;
var imlost = 25;
function keydown(event) {
 // Tricksplit E
    if (event.keyCode == 49) {
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
        setTimeout(ilikedick, imlost*3);
    } // Triplesplit Z
    if (event.keyCode == 50) {
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
    } // Doublesplit D
    if (event.keyCode == 51) {
        ilikedick();
        setTimeout(ilikedick, imlost);
    } // PopSplit R
    if (event.keyCode == 52) {
        ilikedick();
        setTimeout(ilikedick, imlost*8.2142354224);
    }
} 


function ilikedick() {
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32}));
}
//Please don't switch the code { u know why ( ?° ?? ?°) }
