getEmail = ->
  fields = document.querySelectorAll '.header__signup__email'
  fields[0].value

resetEmail = ->
  fields = document.querySelectorAll '.header__signup__email'
  fields[0].value = ''

validateEmail = (email) ->
  if /(.+)@(.+){2,}\.(.+){2,}/.test email
    true
  else
    false

onSubmit = ->
  email = getEmail()
  unless validateEmail email
    alert "#{email} is an invalid email"
    return false
  firebase = new Firebase 'https://aboardly-landing.firebaseio.com/emails'
  firebase.push(email: email, submitDone)
  resetEmail()
  false

submitDone = (error) ->
  if error
    alert "Unable to sign up. #{error}"
    console.error error
  else
    alert 'Thanks for signing up!'
