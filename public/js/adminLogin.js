const adminBtn = document.querySelector('#adminBtn');
const adminDiv = document.querySelector('.adminDiv');

adminBtn?.addEventListener('click', (event) => {
  event.preventDefault();
  adminDiv.innerHTML = `
  <form id="adminForm">
  <div class="container">
  <div class="mb-3">
  <input name="name" placeholder="login" type="text" class="form-control" />
</div>
<div className="mb-3">
  <input name="password" placeholder="password" type="password" class="form-control" />
</div>
<br>
<button type="submit" class="btn btn-info">Войти</button>
</div>
</form>
<p id="errLog"> </p>`;
});

const adminForm = document.querySelector('#adminForm');
const errLog = document.querySelector('#errLog');

adminForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { name, password } = event.target;

  const response = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify({
      name: name.value,
      password: password.value,
    }),
  });
  const data = await response.json();
  console.log('ADMINLOGIN.JS+++++++++++++++++++++', data);
  if (data.status === 'error') {
    errLog.innerHTML = `${data.message}`;
  } else {
    window.location.assign('/');
  }
});
