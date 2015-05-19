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

    cartCookie = JSON.parse(Cookies.get('cart'));

    return cartCollection.reset(cartCookie);
});
