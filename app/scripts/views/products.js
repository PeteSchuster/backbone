/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/product'
], function ($, _, Backbone, JST, ProductView) {
    'use strict';

    var ProductsView = Backbone.View.extend({
        tagName: 'div',

        render: function () {

            this.collection.each(function (product) {
                var productView = new ProductView({ model: product });
                this.$el.append(productView.el);
            }, this);

            console.log('ProductsView', this);

            return this;

        }
    });

    return ProductsView;
});
