const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ title, username }) {
  return (
    <Layout username={username} title={title}>
      <link rel="stylesheet" href="/css/animals.css" />
      <link rel="stylesheet" href="/css/mainPage.css" />
      <script defer src="js/adminLogin.js" />
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
      <body>
        <div className="container-fluid">
          <div className="row bgimg">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" />
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <h1 className="title">Урюпинский</h1>
              <p className="text">Зоопарк</p>
              <p className="text">Работаем с 9.00-20.00</p>
            </div>
            <div className="row" />
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 opacity">
                <h1 className="invite">Добро Пожаловать!</h1>
                <p className="info">Урюпинский зоопарк – уникальный дом живой природы для 900 видов млекопитающих, птиц, рыб и беспозвоночных из разных уголков Земли в самом сердце нашего города. </p>
                <p className="info">Это просветительное, природоохранное учреждение, дающее возможность любому желающему познакомиться с биологическим разнообразием всей планеты, не покидая пределов города, расширить свой кругозор в области биологии, зоологии, экологии и, конечно, интересно и с пользой провести время!</p>
                <p className="info">Урюпинский зоопарк открыт для посетителей круглый год. В летний период большинство экспозиций располагается в уличных вольерах, а на зимний период все теплолюбивые животные переводятся в крытые, отапливаемые помещения, куда также есть посетительский доступ.</p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
            </div>
          </div>
          <footer className="row bg-2">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 link">
              <a href="" rel="noreferrer">Картинки</a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 link">
              <a href="" rel="noreferrer">Зоопарк</a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 link">
              <a href="" rel="noreferrer">Контакты</a>
            </div>
          </footer>
        </div>
      </body>
    </Layout>
  );
};
