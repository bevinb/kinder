"use strict";

hz.course = (function () {
    return {
        init: function () {
            console.log('hz.course.inited');
            hz.util.getSections(hz.course.activeNav);
            hz.course.initMockData();
            hz.course.bindEvents();
        },
        activeNav: function () {
            hz.util.activeNav('nav-course');
        },
        initMockData: function () {
            var list = $('.course-list');
            var item = list.find('.course');
            var mockItems = 10;
            var w = list.width();

            for (var i = 1, l = mockItems; i < l; i++) {
                $('.course-list').append(item.clone());
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
                var list = $('.course-list');

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

$(document).ready(hz.course.init);

