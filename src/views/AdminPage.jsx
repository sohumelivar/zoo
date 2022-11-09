const React = require('react');
const Layout = require('./Layout');

module.exports = function AdminPage({ title, username }) {
  return (
    <Layout username={username} title={title}>
      <link rel="stylesheet" href="/css/adminPage.css" />
      {/* <link rel="stylesheet" href="/css/time.css" /> */}
      <div className="container-fluid">
        <div className="row bgimg">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" />
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <h1 className="title">Привет,</h1>
            <p className="text">{username}</p>
            <p className="text" />
          </div>
          <div className="row" />
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 opacity">
              <div className="flex">
                <a href="/changeTariffs"><button type="button" className="btn btn-warning">Изменить тарифы</button></a>
                {' '}
                <a href="/createanimal"><button type="button" className="btn btn-warning">Изменить животных</button></a>
                {' '}
              </div>
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
    </Layout>
  );
};
