/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ProductModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
            console.log('init model');
        },

        defaults: {
            'thumbnail': 'http://placehold.it/32x32',
            'medium': 'http://placehold.it/300x200',
            'detail': 'http://placehold.it/600x400',
            'type': 'equipment'
        }
    });

    return ProductModel;
});
