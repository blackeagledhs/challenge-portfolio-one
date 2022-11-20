const scriptURL = 'https://script.google.com/macros/s/AKfycbzJB7hia89FeMrF9riJ8PbHw4DMhWvDcLWo40zTntdSBVm1eAJTfZWeLgJC2yWiLs7Eig/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Mensaje enviado correctamente";
        setTimeout(function(){
          msg.innerHTML = "";
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })