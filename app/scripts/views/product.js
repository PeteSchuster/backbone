/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'cookie',
    'views/cart',
    'collections/cart'
], function ($, _, Backbone, JST, Cookies, CartView, cartCollection) {
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

            Cookies.set('cart', JSON.stringify(cartCollection));

            cartView = new CartView({ collection: cartCollection });

            $('.cart').html(cartView.render().el);

        }
    });

    return ProductView;
});
