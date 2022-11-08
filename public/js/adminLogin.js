const adminBtn = document.querySelector('#adminBtn');
const adminDiv = document.querySelector('.adminDiv');

adminBtn?.addEventListener('click', (event) => {
  event.preventDefault();
  adminDiv.style.display = 'block';
});

const adminForm = document.querySelector('#adminForm');
const errLog = document.querySelector('#errLog');

adminForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { name, password } = event.target;
  // const name = event.target.name.value;
  // const password = event.target.password.value;
  // const obj = {
  //   name,
  //   password,
  // };
  const response = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body:
      JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    // body: JSON.stringify(obj),
  });
  const data = await response.json();
  // console.log('ADMINLOGIN.JS+++++++++++++++++++++', data);
  if (data.status === 'error') {
    errLog.innerHTML = `${data.message} <img src="https://s12.favim.com/gif_previews/8/809/8095/80956/8095623.gif" width="70"/>`;
  } else {
    window.location.assign('/admin');
  }
});
