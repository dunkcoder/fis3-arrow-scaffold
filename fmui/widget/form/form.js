/**
 * 
 * @authors      Benjamin (cuew1987@gmail.com)
 * @link         https://github.com/benjamin-zuo
 * @date         2016-03-21 20:03:18
 * @description  
 * @version      $Id$
 */


var $ = require('zepto');

require('/static/ui/validate/validate');

require('/static/ui/form/form');

$('#phone').validate({
    validType: 'tel'
});


var $form = $('#form');

$form.on('tap', '#btn-submit', function() {
    console.log($form.form('validate'));
})
