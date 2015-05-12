/*global define*/

define([
    'jquery',
    'backbone',
    'collections/products',
    'views/product',
    'models/product'
], function ($, Backbone, ProductsCollection, ProductView, ProductsModel) {
    'use strict';

    var ProductsRouter = Backbone.Router.extend({
        routes: {
            '': 'processUsers'
        },

        addSampleData: function (collection) {

            var sampleProducts = [
                {
                    'id': '1',
                    'thumbnail': 'http://placehold.it/32x32',
                    'medium': 'http://placehold.it/300x200',
                    'detail': 'http://placehold.it/600x400',
                    'type': 'equipment',
                    'name': 'Standard Box'
                },
                {
                    'id': '2',
                    'thumbnail': 'http://placehold.it/32x32',
                    'medium': 'http://placehold.it/300x200',
                    'detail': 'http://placehold.it/600x400',
                    'type': 'equipment',
                    'name': 'X1 Box'
                },
                {
                    'id': '3',
                    'thumbnail': 'http://placehold.it/32x32',
                    'medium': 'http://placehold.it/300x200',
                    'detail': 'http://placehold.it/600x400',
                    'type': 'equipment',
                    'name': 'X2 Box'
                },
                {
                    'id': '4',
                    'thumbnail': 'http://placehold.it/32x32',
                    'medium': 'http://placehold.it/300x200',
                    'detail': 'http://placehold.it/600x400',
                    'type': 'equipment',
                    'name': 'HD Box'
                },
                {
                    'id': '5',
                    'thumbnail': 'http://placehold.it/32x32',
                    'medium': 'http://placehold.it/300x200',
                    'detail': 'http://placehold.it/600x400',
                    'type': 'network',
                    'name': 'HBO'
                },
                {
                    'id': '6',
                    'thumbnail': 'http://placehold.it/32x32',
                    'medium': 'http://placehold.it/300x200',
                    'detail': 'http://placehold.it/600x400',
                    'type': 'network',
                    'name': 'ShowTime'
                },
                {
                    'id': '7',
                    'thumbnail': 'http://placehold.it/32x32',
                    'medium': 'http://placehold.it/300x200',
                    'detail': 'http://placehold.it/600x400',
                    'type': 'network',
                    'name': 'Latino'
                },
                {
                    'id': '8',
                    'thumbnail': 'http://placehold.it/32x32',
                    'medium': 'http://placehold.it/300x200',
                    'detail': 'http://placehold.it/600x400',
                    'type': 'package',
                    'name': 'HD Silver'
                },
                {
                    'id': '9',
                    'thumbnail': 'http://placehold.it/32x32',
                    'medium': 'http://placehold.it/300x200',
                    'detail': 'http://placehold.it/600x400',
                    'type': 'package',
                    'name': 'HD Gold'
                },
                {
                    'id': '10',
                    'thumbnail': 'http://placehold.it/32x32',
                    'medium': 'http://placehold.it/300x200',
                    'detail': 'http://placehold.it/600x400',
                    'type': 'package',
                    'name': 'HD Platnium'
                }
            ];

            _.each(sampleProducts, function (sampleProduct) {
                var product;

                // add sample product to collection
                product = new ProductsModel(sampleProduct);

                collection.add(product);
            });

            return collection;
        },

        processUsers: function () {
            console.log('init route');
            var productCollection = new ProductsCollection(),
                productsView;

            productCollection = this.addSampleData(productCollection);

            console.log(productCollection);

            productsView = new ProductView({ collection: productCollection });

            $(document.body).append(productsView.render());
        }

    });

    return ProductsRouter;
});
