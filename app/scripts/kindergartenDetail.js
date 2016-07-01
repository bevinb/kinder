"use strict";

hz.kindergartenDetail = (function () {
    return {
        init: function () {
            console.log('hz.kindergartenDetail.inited');
            hz.util.getSections(hz.kindergartenDetail.activeNav);

        },
        activeNav: function () {
            hz.util.activeNav('nav-agency');
        }
    }
}());

$(document).ready(hz.kindergartenDetail.init);

