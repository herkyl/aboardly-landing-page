getEmail = ->
  fields = document.querySelectorAll '.header__signup__email'
  fields[0].value

resetEmail = ->
  fields = document.querySelectorAll '.header__signup__email'
  fields[0].value = ''

onSubmit = ->
  firebase = new Firebase 'https://aboardly-landing.firebaseio.com/emails'
  firebase.push(email: getEmail(), submitDone)
  resetEmail()
  false

submitDone = (error) ->
  if error
    alert "Unable to sign up. #{error}"
    console.error error
  else
    alert 'Thanks for signing up!'
