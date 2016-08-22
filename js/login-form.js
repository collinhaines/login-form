/*!
 * login-form.js
 *
 * Copyright 2016 Collin Haines
 * Licensed under the MIT license.
 */

$('#login')
  .on('focus', '.form-control', function (event) {
    $(event.target).parents('.form-group').toggleClass('focused');
  })
  .on('blur', '.form-control', function (event) {
    $(event.target).parents('.form-group').toggleClass('focused');
  })

  // Demo use only
  .on('submit', function (event) {
    event.preventDefault();
  })