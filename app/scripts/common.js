"use strict";


var hz = hz || {};
hz.util = (function () {

    return {
        getSections: function (asideCallback) {
            this.getHeader();
            this.getFooter();
            this.getAside(asideCallback);
        },
        bindCommonEvents:function () {
            // add agency/kindergarten
            $('.add-agency-container').bind("click", function () {
                var addAgencyDialog = $('.add-agency-dialog');
                addAgencyDialog.show();
                addAgencyDialog.find('.dialog-close').bind('click', function () {
                    addAgencyDialog.hide();
                });
            });
            $('.add-kindergarten-container').bind("click", function () {
                var addKindergartenDialog = $('.add-kindergarten-dialog');
                addKindergartenDialog.show();
                addKindergartenDialog.find('.dialog-close').bind('click', function () {
                    addKindergartenDialog.hide();
                });
            });

            $('.add-course-container').bind("click", function () {
                var addCourseDialog = $('.add-course-dialog');
                addCourseDialog.show();
                addCourseDialog.find('.dialog-close').bind('click', function () {
                    addCourseDialog.hide();
                });
            });

            //send email
            $('.agency-item').find('.media-object').bind("click", function () {
                var sendEmailDialog = $('.send-agency-email-dialog');
                sendEmailDialog.show();
                sendEmailDialog.find('button').bind('click', function () {
                    sendEmailDialog.hide();

                    var failDialog = $('.send-agency-email-fail-dialog');
                    failDialog.show();
                    failDialog.find('.dialog-close').bind('click', function () {
                        failDialog.hide();
                    });
                    failDialog.find('button').bind('click', function () {
                        failDialog.hide();
                    });
                });
                sendEmailDialog.find('.dialog-close').bind('click', function () {
                    sendEmailDialog.hide();
                });
            });
        },
        getKindergartenDialog: function (kcallback) {
            $.get("../kindergarten_dialog.html", function (data) {
                $('.dialog').append(data);
            });
        },
        getAside: function (asideCallback) {
            $.get("../aside.html", function (data) {
                $('aside').html(data);
                if (asideCallback) {
                    asideCallback();
                }
            });
        },
        getHeader: function () {
            $.get("../header.html", function (data) {
                $('.right-container > header').html(data);
            });
        },
        getFooter: function () {
            $.get("../footer.html", function (data) {
                $('footer').html(data);
            });
        },
        activeNav: function (module) {
            // modules : ["nav-agency", "nav-kindergarten", "nav-course", "nav-account"]
            var menu = $('aside.left-container').find('.menu');
            var navLi = menu.find('li');
            var moduleClass = 'li.' + module;
            navLi.removeClass('active');
            menu.find(moduleClass).addClass('active');
        }
    }
}());


