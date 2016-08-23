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
  .on('keyup', '.form-control', function (event) {
    if (event.target.value.trim() === '') {
      $(event.target).parents('.form-group').removeClass('has-text');
    } else {
      $(event.target).parents('.form-group').addClass('has-text');
    }
  })

  // Demo use only
  .on('submit', function (event) {
    event.preventDefault();
  })

$('#show-password')
  .on('click', function (event) {
    if ($(event.target).text().toLowerCase() === 'show password') {
      // Show the password.
      $('#login #password').attr('type', 'text');
      $('#show-password').text('Hide Password');
    } else if ($(event.target).text().toLowerCase() === 'hide password') {
      // Hide the password.
      $('#login #password').attr('type', 'password');
      $('#show-password').text('Show Password');
    }

    event.preventDefault();
  });
