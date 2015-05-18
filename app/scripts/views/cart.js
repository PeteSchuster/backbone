/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/cart-item',
    'collections/products'
], function ($, _, Backbone, JST, CartItemView, productCollection) {
    'use strict';

    var CartView = Backbone.View.extend({
        tagName: 'ul',

        render: function () {

            this.collection.each(function (cartItem) {
                var cartProduct = productCollection.where({ sku: cartItem.get('sku') }),
                    cartItemView;

                cartItemView = new CartItemView({ model: cartProduct[0] });

                this.$el.append(cartItemView.render().el);
            }, this);

            return this;

        }
    });

    return CartView;
});
