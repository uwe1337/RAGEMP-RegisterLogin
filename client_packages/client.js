/* (c) Xendom Rayden / raydN development */

var cef = mp.browsers.new("package://assets/registerLogin.html");
mp.gui.cursor.visible = true;

/* Trigger */
mp.events.add("registerLogin.client",function(name,password,type) {
	if(name.length >= 3 && password.length >= 5) {
		mp.events.callRemote("registerLogin.server",name,password,type);
	}
	else
	{
		mp.game.graphics.notify("Die Angaben sind ungültig!");
	};
});

/* Destroy Register / Login */
mp.events.add("registerLogin.destroy",function() {
	cef.destroy();
	mp.gui.cursor.visible = false;
});