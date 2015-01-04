var getEmail, onSubmit, resetEmail, submitDone;

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

onSubmit = function() {
  var firebase;
  firebase = new Firebase('https://aboardly-landing.firebaseio.com/emails');
  firebase.push({
    email: getEmail()
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
