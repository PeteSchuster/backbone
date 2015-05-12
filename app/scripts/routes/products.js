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
            console.log('init route');
            var productCollection = this.addSampleData(),
                productsView;

            console.log('productCollection', productCollection);

            productsView = new ProductsView({ collection: productCollection });

            console.log('productsView', productsView.render());

            $(document.body).append(productsView.render().el);
        }

    });

    return ProductsRouter;
});
