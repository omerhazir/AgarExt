// 676
// _x_start
//var _x_input;
//var _x_chatWebsocket;
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
   }
})(window, window.jQuery);
