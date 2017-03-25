
		$(function() {
            _x_canvas = document.getElementById("canvas");
			$("#gamemode").after('<br><br><input id="server" class="form-control" style="width: 59%;  display: inline-block; margin-right: 5px"><button type="submit" id="connect" class="btn btn-primary" style="width: 25%; display: inline-block; margin-right: 5px">Connect</button><button type="button" id="reconnect" class="btn btn-info" style="display: inline-block"><i class="glyphicon glyphicon-refresh"></i></button>');
			$("#connect").click(function() {
                a.core.connect($("#server").val())
            });
			$("#reconnect").click(function() {
                MC.reconnect()
            })
