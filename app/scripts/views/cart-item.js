/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var CartItemView = Backbone.View.extend({
        template: JST['app/scripts/templates/cart-item.ejs'],

        tagName: 'li',

        className: 'cart-line-item',

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    });

    return CartItemView;
});
