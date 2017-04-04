	$(function() {
       _x_canvas = document.getElementById("canvas");
			$("#gamemode").after('<br><br><button type="button" id="reconnect" class="btn btn-info" style="display: inline-block"><i class="glyphicon glyphicon-refresh"></i></button>');
			$("#reconnect").click(function() {MC.reconnect() })
		
        })
