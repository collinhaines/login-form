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
  .on('submit', function (event) {
    var username = $('#login #username').val().trim();
    var password = $('#login #password').val().trim();
    var remember = $('#login #remember').is(':checked');

    if (username === '') {
      spawnLoginAlert('#username', 'Please fill out the username.');

      event.preventDefault();
      return false;
    } else {
      $('#login #username')
        .parent()
        .removeClass('has-error');
    }

    if (password === '') {
      spawnLoginAlert('#password', 'Please fill out the password.');

      event.preventDefault();
      return false;
    } else {
      $('#login #password')
        .parent()
        .removeClass('has-error');
    }

    if ($('#alerter').hasClass('alert-danger')) {
      $('#alerter').removeClass('alert-danger');
      $('#alerter h5, #alerter p').html('&nbsp;');
    }

    console.log('Login form is being submitted.'
      + '\n- Username: ' + username
      + '\n- Password: ' + password
      + '\n- Remember: ' + remember);

    // Demo use only
    event.preventDefault();
  });

$('#show-password')
  .on('click', function (event) {
    if ($(event.target).text() === 'Show Password') {
      // Show the password.
      $('#login #password').attr('type', 'text');
      $('#show-password').text('Hide Password');
    } else if ($(event.target).text() === 'Hide Password') {
      // Hide the password.
      $('#login #password').attr('type', 'password');
      $('#show-password').text('Show Password');
    }

    event.preventDefault();
  });

/**
 * Spawns the alert for the login form.
 *
 * @param input: The element that is incorrect.
 * @param text: The text to be displayed on the alert.
 */
function spawnLoginAlert(input, text) {
  // Spawn the alert.
  $('#alerter')
    .addClass('alert-danger')
    .find('h5')
    .text('Error!')
    .next()
    .text(text);

  // Error-out the incorrect input.
  $('#login')
    .find(input)
    .parent()
    .addClass('has-error');
}
