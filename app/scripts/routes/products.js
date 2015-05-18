/*global define*/

define([
    'jquery',
    'backbone',
    'collections/products',
    'views/products',
    'models/product'
], function ($, Backbone, productCollection, ProductsView) {
    'use strict';

    var ProductsRouter = Backbone.Router.extend({
        routes: {
            '': 'processUsers'
        },

        addSampleData: function () {

            var sampleProducts = [
                {
                    'sku': '01',
                    'name': 'Standard Box'
                },
                {
                    'sku': '02',
                    'name': 'X1 Box'
                },
                {
                    'sku': '03',
                    'name': 'X2 Box'
                },
                {
                    'sku': '04',
                    'name': 'HD Box'
                },
                {
                    'sku': '05',
                    'type': 'network',
                    'name': 'HBO'
                },
                {
                    'sku': '06',
                    'type': 'network',
                    'name': 'ShowTime'
                },
                {
                    'sku': '07',
                    'type': 'network',
                    'name': 'Latino'
                },
                {
                    'sku': '08',
                    'type': 'package',
                    'name': 'HD Silver'
                },
                {
                    'sku': '09',
                    'type': 'package',
                    'name': 'HD Gold'
                },
                {
                    'sku': '10',
                    'type': 'package',
                    'name': 'HD Platnium'
                }
            ];

            _.each(sampleProducts, function (sampleProduct) {
                productCollection.add(sampleProduct);
            });

            return sampleProducts;
        },

        processUsers: function () {
            var productsView;

            this.addSampleData();

            productsView = new ProductsView({ collection: productCollection });

            $('.container').append(productsView.render().el);
        }

    });

    return ProductsRouter;
});
