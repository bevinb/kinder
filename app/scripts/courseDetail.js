"use strict";

hz.courseDetail = (function () {
    return {
        init: function () {
            console.log('hz.courseDetail.inited');
            hz.util.getSections(hz.courseDetail.activeNav);
            hz.courseDetail.initMockData();
            hz.courseDetail.bindEvents();
        },
        activeNav: function () {
            hz.util.activeNav('nav-course');
        },
        initMockData: function () {

        },
        bindEvents: function () {
            this.resize();
            hz.util.bindCommonEvents();

            $('.panel-intro').on('click', '.action-view', function(){
                $('.panel-intro').removeClass('edit-mode').addClass('view-mode');
            });
            $('.panel-intro').on('click', '.action-edit', function(){
                $('.panel-intro').removeClass('view-mode').addClass('edit-mode');
            });

            //click to add notes
            $('#btnAddNotes').click(function(e){
                e.preventDefault();
                $('.panel-details .panel-add-notes').show();
                $('#addNotesForm').find('input[type=text], textarea').val('');
            });

            //click to enter edit mode
            $('.panel-details').on('click', '.action-edit', function(e){
                $(this).parentsUntil('.panel-details', '.notes-item').addClass('edit-mode');
            });
        },
        resize: function () {

        },
        pagingEvent: function () {

        }
    }
}());

$(document).ready(hz.courseDetail.init);
