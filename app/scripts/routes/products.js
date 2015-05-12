/*global define*/

define([
    'jquery',
    'backbone',
    'collections/products',
    'views/products',
    'models/product'
], function ($, Backbone, ProductsCollection, ProductsView, ProductsModel) {
    'use strict';

    var ProductsRouter = Backbone.Router.extend({
        routes: {
            '': 'processUsers'
        },

        addSampleData: function () {

            var sampleProducts = new ProductsCollection([
                {
                    'name': 'Standard Box'
                },
                {
                    'name': 'X1 Box'
                },
                {
                    'name': 'X2 Box'
                },
                {
                    'name': 'HD Box'
                },
                {
                    'type': 'network',
                    'name': 'HBO'
                },
                {
                    'type': 'network',
                    'name': 'ShowTime'
                },
                {
                    'type': 'network',
                    'name': 'Latino'
                },
                {
                    'type': 'package',
                    'name': 'HD Silver'
                },
                {
                    'type': 'package',
                    'name': 'HD Gold'
                },
                {
                    'type': 'package',
                    'name': 'HD Platnium'
                }
            ]);

            return sampleProducts;
        },

        processUsers: function () {
            var productCollection = this.addSampleData(),
                productsView;

            productsView = new ProductsView({ collection: productCollection });

            $('.container').append(productsView.render().el);
        }

    });

    return ProductsRouter;
});
