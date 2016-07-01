"use strict";

(function () {
    var hz = {} || hz;
    hz.login = {
        init: function () {
            console.log('hz.inited');
            $('.main').find('.launch').bind('click', function (e) {
                location.href = './agency.html';
            });
        }
    };


    $(document).ready(hz.login.init);
})();
