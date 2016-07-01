"use strict";

hz.accountDetail = (function () {
    return {
        init: function () {
            console.log('hz.accountDetail.inited');
            hz.util.getSections(hz.accountDetail.activeNav);
            hz.accountDetail.bindEvents();
        },
        activeNav: function () {
            //hz.util.activeNav('nav-account');
        },
        resize: function () {
        },
        bindEvents: function () {
            this.resize();
            hz.util.bindCommonEvents();

            var accountTab = $('#accountTab');
            accountTab.find('.action-edit').click(function(){
                accountTab.addClass('edit-mode');
            });
            accountTab.find('.action-edit').click(function(){
                accountTab.addClass('edit-mode');
            });
            accountTab.find('#cancelEditInfoBtn').click(function(){
                accountTab.removeClass('edit-mode');
            });
            accountTab.find('#saveInfoBtn').click(function(){
                //submit and save user info
                accountTab.removeClass('edit-mode');
            });
            accountTab.find('#selectPhotoBtn').click(function () {
                var dialog = $('.update-photo-dialog');
                dialog.show();
                dialog.find('.dialog-close').bind('click', function () {
                    dialog.hide();
                });
            });

            var passwordTab = $('#passwordTab');
            passwordTab.find('#updatePwdBtn').click(function(){
                //submit and update password
            });
        }
    }
}());

$(document).ready(hz.accountDetail.init);

