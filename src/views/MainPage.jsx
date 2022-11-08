const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ title }) {
  return (
    <Layout title={title}>
      <script defer src="js/adminLogin.js" />
      <nav className="navMenu">
        <a href="/animals"><button type="button" className="btn btn-outline-dark">Наши животные</button></a>
        {' '}
        <a href="/tariffs"><button type="button" className="btn btn-outline-dark">Тарифы и услуги</button></a>
        {' '}
        <button id="adminBtn" type="button" className="btn btn-outline-dark">Вход для администратора</button>
      </nav>
      <div className="container">
        <h3>Добро пожаловать в урюпинский Зоопарк!</h3>
      </div>
      <div className="adminDiv container">
        <form method="POST" action="/" id="adminForm">
          <div className="mb-3">
            <input name="name" placeholder="login" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <input name="password" placeholder="password" type="current-password" className="form-control" />
          </div>
          <br />
          <button type="submit" className="btn btn-info entry">Войти</button>
          <p id="errLog"> </p>
        </form>
      </div>
    </Layout>
  );
};
