const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ title }) {
  return (
    <Layout title={title}>
      <script defer src="js/adminLogin.js" />
      <nav className="navMenu">
        <a href=""><button type="button" className="btn btn-outline-dark">Наши животные</button></a>
        {' '}
        <a href="/tariffs"><button type="button" className="btn btn-outline-dark">Тарифы и услуги</button></a>
        {' '}
        <a href="#"><button id="adminBtn" type="submit" className="btn btn-outline-dark">Вход для администратора</button></a>
      </nav>
      <div className="container">
        <h3>Добро пожаловать в урюпинский Зоопарк!</h3>
      </div>
      <div className='adminDiv container'>
      </div>
    </Layout>
  );
};
