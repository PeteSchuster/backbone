/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ProductView = Backbone.View.extend({
        template: JST['app/scripts/templates/product.ejs'],

        tagName: 'p',

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    });

    return ProductView;
});
