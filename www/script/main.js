var getEmail, onSubmit, resetEmail, submitDone, validateEmail;

getEmail = function() {
  var fields;
  fields = document.querySelectorAll('.header__signup__email');
  return fields[0].value;
};

resetEmail = function() {
  var fields;
  fields = document.querySelectorAll('.header__signup__email');
  return fields[0].value = '';
};

validateEmail = function(email) {
  if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
    return true;
  } else {
    return false;
  }
};

onSubmit = function() {
  var email, firebase;
  email = getEmail();
  if (!validateEmail(email)) {
    alert("" + email + " is an invalid email");
    return false;
  }
  firebase = new Firebase('https://aboardly-landing.firebaseio.com/emails');
  firebase.push({
    email: email
  }, submitDone);
  resetEmail();
  return false;
};

submitDone = function(error) {
  if (error) {
    alert("Unable to sign up. " + error);
    return console.error(error);
  } else {
    return alert('Thanks for signing up!');
  }
};
