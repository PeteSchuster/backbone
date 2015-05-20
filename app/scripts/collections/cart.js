/*global define*/

define([
    'underscore',
    'backbone',
    'models/cart',
    'cookie'
], function (_, Backbone, CartModel, Cookies) {
    'use strict';

    var CartCollection = Backbone.Collection.extend({
        model: CartModel
    }),

    cartCollection = new CartCollection(),

    cartCookie = Cookies.get('cart');

    if (cartCookie) {
        cartCollection.reset(JSON.parse(cartCookie));
    }

    return cartCollection;
});
