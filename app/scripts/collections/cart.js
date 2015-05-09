/*global define*/

define([
    'underscore',
    'backbone',
    'models/cart'
], function (_, Backbone, CartModel) {
    'use strict';

    var CartCollection = Backbone.Collection.extend({
        model: CartModel
    });

    return CartCollection;
});
