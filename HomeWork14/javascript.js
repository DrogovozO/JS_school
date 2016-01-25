(function IIFE() {
    'use strict';
    var $divModal = $('<div id="modal-dialog">'),
        $buttonClose = $('<button class="close"><span>×</span>'),
        $headerText = $('<h2>Sign-up form</h2>'),
        $formModal = $('<form class="modal-form">'),
        $divField = $('<div class="field">'),
        $divFieldName = $('<div class="field-group">'),
        $divFieldEmail = $('<div class="field-group">'),
        $labelFName = $('<label for="FName">First Name</label>'),
        $inputFName = $('<input name="FName" class="input-form" type="text">'),
        $labelEmail = $('<label for="Email">Email Address</label>'),
        $inputEmail = $('<input name="Email" class="input-form" type="email">'),
        $divCheck = $('<div class="checkIn">'),
        $inputSub = $('<input type="submit">');

    $('.btn-sign-up').on('click', function (){
        $divModal.toggle();
    });


    $($divField).append($divFieldName, $divFieldEmail);
    $($divFieldName).append($labelFName, $inputFName);
    $($divFieldEmail).append($labelEmail, $inputEmail);
    $($divCheck).append($inputSub);
    $($formModal).append($divField, $divCheck);
    $($divModal).append($buttonClose, $headerText, $formModal);
    $('body').append($divModal);
    $divModal.css('display', 'none');

    $buttonClose.on('click', function (){
        $divModal.hide();
    });
})();
