/*global require*/
'use strict';

require.config({
    baseUrl: '/scripts',
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap'
    }
});

require([
    'backbone',
    'routes/products'
], function (Backbone, ProductsRouter) {
    var productsRouter = new ProductsRouter();

    Backbone.history.start({ pushState: true });
});
