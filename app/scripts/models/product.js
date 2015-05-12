/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ProductModel = Backbone.Model.extend({
        defaults: {
            'thumbnail': 'http://placehold.it/32x32',
            'medium': 'http://placehold.it/300x200',
            'detail': 'http://placehold.it/600x400',
            'type': 'equipment',
            'price': '5'
        }
    });

    return ProductModel;
});
