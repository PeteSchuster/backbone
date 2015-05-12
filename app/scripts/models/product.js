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
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return ProductModel;
});
