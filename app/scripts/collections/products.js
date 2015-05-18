/*global define*/

define([
    'underscore',
    'backbone',
    'models/product'
], function (_, Backbone, ProductsModel) {
    'use strict';

    var ProductsCollection = Backbone.Collection.extend({
        model: ProductsModel
    });

    return new ProductsCollection();
});
