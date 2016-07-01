"use strict";

hz.account = (function () {
    return {
        init: function () {
            console.log('hz.account.inited');
            hz.util.getSections(hz.account.activeNav);
            hz.account.bindEvents();
        },
        activeNav: function () {
            hz.util.activeNav('nav-account');
        },
        resize: function () {

        },
        bindEvents: function () {
            this.resize();
            hz.util.bindCommonEvents();

            $('#addAdminBtn').click(function (e) {
                e.preventDefault();
                var dialog = $('.add-admin-dialog');
                dialog.show();
                dialog.find('.dialog-close').bind('click', function () {
                    dialog.hide();
                });
            });
        }
    }
}());

$(document).ready(hz.account.init);

