const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ title, username }) {
  return (
    <Layout username={username} title={title}>
      <link rel="stylesheet" href="/css/animals.css" />
      <script defer src="js/adminLogin.js" />
      <div className="container">
        <h3>Добро пожаловать в урюпинский Зоопарк!</h3>
      </div>
      <div className="adminDiv container">
        <form id="adminForm">
          <div className="mb-3">
            <input name="name" placeholder="login" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <input name="password" placeholder="password" type="password" className="form-control" />
          </div>
          <br />
          <button type="submit" className="btn btn-info entry">Войти</button>
          <p id="errLog"> </p>
        </form>
      </div>
      <div className="elephant body">
        <div className="face" />
      </div>
    </Layout>
  );
};
