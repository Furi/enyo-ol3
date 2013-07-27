enyo.kind({
	name: "Map",
	classes: "onyx",
	kind: "FittableRows",
	components: [
                {kind: "onyx.Toolbar", content: "Map"},


		{name: "theMap", kind: "furi.OpenLayers", onReady: "onMapReady", fit: true},

                {kind: "onyx.Toolbar", components: [
                        {kind: "onyx.Button", content: "Tap me", ontap: "helloWorldTap"}
                ]}


	],
	onMapReady: function(inSender) {

		var map = inSender.getMap();
		this.$.theMap.options = this.getMapOptions();
		this.$.theMap.renderMap();
    	},

	getMapOptions: function() {
		 options = {
			controls: ol.control.defaults({}, [
				new ol.control.FullScreen()
			]),
		 	interactions: ol.interaction.defaults({}, [
				new ol.interaction.DragRotateAndZoom()
  			]),
  			layers: [
    				new ol.layer.TileLayer({
     					source: new ol.source.BingMaps({
        					key: 'Ar33pRUvQOdESG8m_T15MUmNz__E1twPo42bFx9jvdDePhX0PNgAcEm44OVTS7tt',
        					style: 'Aerial'
      					})
    				})
  			],
			// Use the canvas renderer because it's currently the fastest
			renderer: ol.RendererHint.CANVAS,
			view: new ol.View2D({
				center: [-33519607, 5616436],
				rotation: -Math.PI / 8,
				zoom: 8
			})
		};

		return options;
	}


});
