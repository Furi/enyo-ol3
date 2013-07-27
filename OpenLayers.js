enyo.kind({
    name: 'furi.OpenLayers',
    fit: true,
    options: null,
    kind: 'Control',
    published: {
        map: null
    },
    events: {
        onReady: ""
    },
    components: [
        { name: 'map', style: 'height: 100%' }
    ],
    constructor: function() {
        this.inherited(arguments);
	alert("hello");	
    },
    create: function() {
        this.inherited(arguments);

        if (this.options && this.options.div !== undefined) {
            this.$.map.setId(this.options.div);
        }
    },
    rendered: function() {
        this.inherited(arguments);

        if (this.options && !this.options.div) {
            this.options.div = this.$.map.getId();
        }

	alert("hello");
        this.map = new ol.Map({
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
  target: 'screenManager_theMap_map',
  view: new ol.View2D({
    center: [-33519607, 5616436],
    rotation: -Math.PI / 8,
    zoom: 8
  })
});
        this.doReady();
    }
});
