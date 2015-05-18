/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/cart',
    'collections/cart'
], function ($, _, Backbone, JST, CartView, cartCollection) {
    'use strict';

    var ProductView = Backbone.View.extend({
        template: JST['app/scripts/templates/product.ejs'],

        tagName: 'div',

        events: {
            'change input': 'cartUpdate'
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        cartUpdate: function (event) {
            var product = event.target.value,
                cartView;

            cartCollection.add({ sku: product });

            cartView = new CartView({ collection: cartCollection });

            $('.cart').html(cartView.render().el);

        }
    });

    return ProductView;
});
