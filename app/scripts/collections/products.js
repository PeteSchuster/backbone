/*global define*/

define([
    'underscore',
    'backbone',
    'models/products'
], function (_, Backbone, ProductsModel) {
    'use strict';

    var ProductsCollection = Backbone.Collection.extend({
        model: ProductsModel
    });

    return ProductsCollection;
});
