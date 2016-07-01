"use strict";

hz.agency = (function () {
    return {
        init: function () {
            console.log('hz.agency.inited');
            hz.util.getSections(hz.agency.activeNav);
            hz.agency.initMockData();
            hz.agency.bindEvents();
        },
        activeNav: function () {
            hz.util.activeNav('nav-agency');
        },
        initMockData: function () {
            var list = $('.agency-list');
            var item = list.find('.agency-item.agency');
            var mockItems = 10;
            var w = list.width();

            for (var i = 1, l = mockItems; i < l; i++) {
                $('.agency-list').append(item.clone());
            }
            list.width(w);
        },
        bindEvents: function () {
            this.selectSearchType();
            this.resize();
            hz.util.bindCommonEvents();
        },
        resize: function () {
            $(window).resize(function () {
                var w = $('.content-container').width();
                var list = $('.agency-list');

                list.width(w);
            })
        },
        pagingEvent: function () {

        },
        selectSearchType: function () {
            $('.search-container').find('.search-input-group ul.dropdown-menu li').bind('click', function () {
                var val = this.innerText;
                $('.search-container').find('.search-input-group button span.btn-txt').text(val);
            });
        }
    }
}());

$(document).ready(hz.agency.init);

