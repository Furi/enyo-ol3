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
    },
    create: function() {
        this.inherited(arguments);

        if (this.options && this.options.div !== undefined) {
            this.$.map.setId(this.options.div);
        }
    },
    rendered: function() {
        this.inherited(arguments);

        this.doReady();
    },

	renderMap: function() {

	        if (this.options && !this.options.div) {
	            this.options.div = this.$.map.getId();
	            this.options.target = this.$.map.getId();
	        }


	        this.map = new ol.Map(this.options);


	}


});
