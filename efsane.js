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

    function B(b) {
        b.preventDefault();
        a.core && a.core.playerZoom && a.core.playerZoom(b.wheelDelta / -120 || b.detail || 0)
    }

    function R() {
        e = t
    }

    function C(a) {
        e.context = "google" == a ? "google" : "facebook";
        u()
    }

    function u() {
        a.localStorage[n] = JSON.stringify(e);
        e = JSON.parse(a.localStorage[n]);
        a.storageInfo = e;
        "google" == e.context ? (c("#gPlusShare").show(), c("#fbShare").hide()) : (c("#gPlusShare").hide(), c("#fbShare").show())
    }

    function D(b) {
        c("#helloContainer").attr("data-has-account-data");
        "" != b.displayName && (b.name = b.displayName);
        if (null == b.name || void 0 == b.name) b.name = "";
        var d = b.name.lastIndexOf("_"); - 1 != d && (b.name = b.name.substring(0, d));
        c("#helloContainer").attr("data-has-account-data", "1");
        c("#helloContainer").attr("data-logged-in", "1");
        c(".agario-profile-panel .progress-bar-star").text(b.level);
        c(".agario-exp-bar .progress-bar-text").text(b.xp + "/" + b.xpNeeded + " XP");
        c(".agario-exp-bar .progress-bar").css("width", (88 * b.xp / b.xpNeeded).toFixed(2) + "%");
        c(".agario-profile-name").text(b.name);
        "" != b.picture && c(".agario-profile-picture").attr("src", b.picture);
        e.userInfo.level = b.level;
        e.userInfo.xp = b.xp;
        e.userInfo.xpNeeded = b.xpNeeded;
        e.userInfo.displayName = b.name;
        e.userInfo.loggedIn = "1";
        a.updateStorage()
    }

    function p(b, d) {
        var f = b;
        if (e.userInfo.loggedIn) {
            var v = c("#helloContainer").is(":visible") && "1" == c("#helloContainer").attr("data-has-account-data");
            if (null == f || void 0 == f) f = e.userInfo;
            if (v) {
                var l = +c(".agario-exp-bar .progress-bar-text").first().text().split("/")[0],
                    v = +c(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0],
                    k = c(".agario-profile-panel .progress-bar-star").first().text();
                if (k != f.level) p({
                    xp: v,
                    xpNeeded: v,
                    level: k
                }, function() {
                    c(".agario-profile-panel .progress-bar-star").text(f.level);
                    c(".agario-exp-bar .progress-bar").css("width", "100%");
                    c(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        c(".progress-bar-star").removeClass("animated tada")
                    });
                    setTimeout(function() {
                        c(".agario-exp-bar .progress-bar-text").text(f.xpNeeded + "/" + f.xpNeeded + " XP");
                        p({
                            xp: 0,
                            xpNeeded: f.xpNeeded,
                            level: f.level
                        }, function() {
                            p(f)
                        })
                    }, 1E3)
                });
                else {
                    var g = Date.now(),
                        m = function() {
                            var b;
                            b = (Date.now() - g) / 1E3;
                            b = 0 > b ? 0 : 1 < b ? 1 : b;
                            b = b * b * (3 - 2 * b);
                            c(".agario-exp-bar .progress-bar-text").text(~~(l + (f.xp - l) * b) + "/" + f.xpNeeded + " XP");
                            c(".agario-exp-bar .progress-bar").css("width", (88 * (l + (f.xp - l) * b) / f.xpNeeded).toFixed(2) + "%");
                            d && d();
                            1 > b && a.requestAnimationFrame(m)
                        };
                    a.requestAnimationFrame(m)
                }
            }
        }
    }

    function E() {
        function b() {
            null == a.FB ? alert("You seem to have something blocking Facebook on your browser, please check for any extensions") : (e.loginIntent = "1", a.updateStorage(), a.FB.login(function(a) {
                F(a)
            }, {
                scope: "public_profile, email"
            }))
        }
        1 != G && 0 != z && 0 != H && (G = !0, ("1" == a.storageInfo.loginIntent && "facebook" == a.storageInfo.context || I) && a.FB.getLoginStatus(function(b) {
            "connected" === b.status ? F(b) : a.logout()
        }), a.facebookRelogin = b, a.facebookLogin = b)
    }

    function F(b) {
        if ("connected" == b.status) {
            var d = b.authResponse.accessToken;
            null == d || "undefined" == d || "" == d ? (3 > J && (J++, a.facebookRelogin()), a.logout()) : (a.MC.doLoginWithFB(d), g.cache.login_info = [d, "facebook"], a.FB.api("/me/picture?width=180&height=180", function(d) {
                e.userInfo.picture = d.data.url;
                a.updateStorage();
                c(".agario-profile-picture").attr("src", d.data.url);
                e.userInfo.socialId = b.authResponse.userID;
                w()
            }), c("#helloContainer").attr("data-logged-in", "1"), e.context = "facebook", e.loginIntent = "1", a.updateStorage(), a.MC.showInstructionsPanel(!0))
        }
    }

    function T(b) {
        var d = c(".stats-time-alive").text();
        return a.parseString(b, "%@", [d.split(":")[0], d.split(":")[1], c(".stats-highest-mass").text()])
    }
    var h = document.createElement("canvas");
    if ("undefined" == typeof console || "undefined" == typeof DataView || "undefined" == typeof WebSocket || null == h || null == h.getContext || null == a.localStorage) alert("You browser does not support this game, we recommend you to use Firefox to play this");
    else {
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
   }
})(window, window.jQuery);
