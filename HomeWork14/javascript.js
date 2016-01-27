(function IIFE ($) {
    'use strict';
    var $divOverlay = $('#overlay');
    $('.close').on('click', hideModal);
    function hideModal () {
        $divOverlay.hide();
    }

    function showModal () {
        $divOverlay.show();
    }

    $.fn.myModal = function (action) {
        if( action == 'hide') {
            hideModal(this);
        } else if (action == 'show') {
            showModal(this);
        } else {
           this.on('click', showModal.bind(this, this));
        }
    };

})(jQuery);

$('.btn-sign-up').myModal();