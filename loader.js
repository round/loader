var loader=function(){};loader.prototype={load:function(e,t){this.loadCount=0;this.totalRequired=e.length;this.callback=t;for(var n=0;n<e.length;n++){this.writeScript(e[n])}},loaded:function(e){this.loadCount++;if(this.loadCount==this.totalRequired&&typeof this.callback=='function')this.callback.call()},writeScript:function(e){var t=this;var n=document.createElement('script');n.async=true;n.src=e;n.addEventListener('load',function(e){t.loaded(e)},false);var r=document.getElementsByTagName('head')[0];r.appendChild(n)}}

// Basic loading!

new loader().load(['script.js']);

// Mutiple scripts!

new loader().load(['script1.js','script2.js']);

// Chain loading!

new loader().load(['//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'],
	function() {
		console.log('jQuery loaded');
		new loader().load(['script.js'],
			function() {
				console.log('script.js loaded');
			}
		);
	}
);

// Advanced callbacks!

new loader().load(['//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'],
	function() {
		WebFont.load({
			google: {
				families: ['Droid Sans Mono']
			},
			fontactive: function(fontFamily) {
				console.log('Loaded ' + fontFamily);
			},
		});
	}
);
