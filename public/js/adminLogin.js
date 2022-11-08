const adminBtn = document.querySelector('#adminBtn');
const adminForm = document.querySelector('.adminForm');
console.log(adminForm);

adminBtn?.addEventListener('click', (event) => {
  event.preventDefault();
  adminForm.innerHTML = `
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
<p id="errLog"> </p>`;
});
