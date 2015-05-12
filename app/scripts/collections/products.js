/*global define*/

define([
    'underscore',
    'backbone',
    'models/product'
], function (_, Backbone, ProductsModel) {
    'use strict';

    var ProductsCollection = Backbone.Collection.extend({
        initialize: function () {
            console.log('init collection');
        },

        model: ProductsModel
    });

    return ProductsCollection;
});
