function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    if (!username || !email) {
      errorMessages.innerHTML = 'All fields are required.';
      return;
    }

    alert('Form submitted successfully!');
    document.getElementById('form').reset();
  }