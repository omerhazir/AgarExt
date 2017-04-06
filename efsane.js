// 676
// _x_start
var _x_input;
var _x_chatWebsocket;
// _x_end

(function(a, c) {
    function r(a, d) {
        if (d) {
            var f = new Date;
            f.setTime(f.getTime() + 864E5 * d);
            f = "; expires=" + f.toGMTString()
        } else f = "";
        document.cookie = "agario_redirect=" + a + f + "; path=/"
    }

    function N() {
        for (var a = document.cookie.split(";"), d = 0; d < a.length; d++) {
            for (var f = a[d];
                " " == f.charAt(0);) f = f.substring(1, f.length);
            if (0 == f.indexOf("agario_redirect=")) return f.substring(16, f.length)
        }
        return null
    }

    function O() {
        c.get(P + "//gc.agar.io", function(a) {
            var d = a.split(" ");
            a = d[0];
            d = d[1] || "";
            q.hasOwnProperty(a) && ("string" == typeof q[a] ? MC.getRegion() || MC.setRegion(q[a]) : q[a].hasOwnProperty(d) && (MC.getRegion() || MC.setRegion(q[a][d])))
        }, "text")
    }

    function Q() {
        a.onkeydown = function(b) {
			if(b.target == _x_input) {
				if(b.keyCode == 13) { 
					if(_x_input.value == "/clear") {
						_x_messages.innerHtml = '';
					} else {
						_x_chatWebsocket.send(JSON.stringify({action: 1, message: _x_input.value, nick: $("#nick").val()}));
					}

					_x_input.value = '';
                    b.preventDefault();
				}

				return;
			}

			if (!y[b.keyCode])
				switch (y[b.keyCode] = !0, b.keyCode) {
				// _x_start
//				case 13:
//					_x_input.focus();
//                    b.preventDefault();
//                    break;
                case 81:
                    if (a.core && a.core.eject)
                        for (_pv2i = 0; _pv2i < 4; _pv2i++) setTimeout(function() {
                            a.core.eject()
                        }, 100 * _pv2i);
                    b.preventDefault();
                    break;
                case 69:
                    if (a.core && a.core.eject)
                        for (_pv2i = 0; _pv2i < 7; _pv2i++) setTimeout(function() {
                            a.core.eject()
                        }, 110 * _pv2i);
                    b.preventDefault();
                    break;
                case 88:
                    if (a.core && a.core.split)
                        for (_pv2i = 0; _pv2i < 2; _pv2i++) setTimeout(function() {
                            a.core.split()
                        }, 60 * _pv2i);
                    b.preventDefault();
                    break;
                case 90:
                    if (a.core && a.core.split)
                        for (_pv2i = 0; _pv2i < 4; _pv2i++) setTimeout(function() {
                            a.core.split()
                        }, 80 * _pv2i);
                    b.preventDefault();
                    break;
                case 84:
                    a.core && a.core.specialOn && a.core.specialOn();
                    b.preventDefault();
                    break;
                case 67:
                    _x_stopped = !_x_stopped, a.core && a.core.setTarget && a.core.setTarget(0, 0);
                    b.preventDefault();
                    break;
				// _x_end
				case 32:
                    a.core && a.core.split && a.core.split();
                    b.preventDefault();
                    break;
                case 87:
                    a.core && a.core.eject && a.core.eject();
                    break;
                case 81:
                    a.core && a.core.specialOn && a.core.specialOn();
                    break;
                case 27:
                    b.preventDefault(), MC.showNickDialog(300), c("#oferwallContainer").is(":visible") && a.closeOfferwall(), c("#videoContainer").is(":visible") && a.closeVideoContainer()
            }
        };
        a.onkeyup = function(b) {
            y[b.keyCode] = !1;
            81 == b.keyCode && a.specialOff && a.core.specialOff()
        }
    }






		// _x_start
		$(function() {
            _x_canvas = document.getElementById("canvas");
			$("#gamemode").after('<br><br><input id="server" class="form-control" style="width: 59%;  display: inline-block; margin-right: 5px"><button type="submit" id="connect" class="btn btn-primary" style="width: 25%; display: inline-block; margin-right: 5px">Connect</button><button type="button" id="reconnect" class="btn btn-info" style="display: inline-block"><i class="glyphicon glyphicon-refresh"></i></button>');
			$("#connect").click(function() {
                a.core.connect($("#server").val())
            });
			$("#reconnect").click(function() {
                MC.reconnect()
            })
			/*
			*/
        })
		// _x_end

})(window, window.jQuery);
