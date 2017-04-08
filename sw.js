(function(a, c) {
    function r(a, d) {
        if (d) {
            var f = new Date;
            f.setTime(f.getTime() + 864E5 * d);
            f = "; expires=" + f.toGMTString()
        } else f = "";
        document.cookie = "agario_redirect=" + a + f + "; path=/"
    }
		// _x_start
		$(function() 
			$("#gamemode").after('<br><br><input id="server" class="form-control" style="width: 59%;  display: inline-block; margin-right: 5px"><button type="submit" id="connect" class="btn btn-primary" style="width: 25%; display: inline-block; margin-right: 5px">Connect</button><button type="button" id="reconnect" class="btn btn-info" style="display: inline-block"><i class="glyphicon glyphicon-refresh"></i></button>');
			$("#connect").click(function() {
                a.core.connect($("#server").val())
            });
			$("#reconnect").click(function() {
             MC.reconnect()
             adres();
            })
$( "#region" ).on('change', function() {
 MC.setRegion($('#region').val());   
  adres();
});
           
$('#gamemode').on('change', function() {
  adres();
});            
        });
        // _x_end  
   adres();         
function adres() {
    var adrs = WebSocket.prototype.send;
    window.__WS_send = WebSocket.prototype.send, WebSocket.prototype.send = function(b) {
         $("#server").val(this.url);
        try {
            adrs.apply(this, [b]), WebSocket.prototype.send = adrs
        } catch (e) {
            window.__WS_send.apply(this, [b]), WebSocket.prototype.send = window.__WS_send
        }
    }
}
})(window, window.jQuery);
