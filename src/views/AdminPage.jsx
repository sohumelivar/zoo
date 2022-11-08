const React = require('react');
const Layout = require('./Layout');

module.exports = function AdminPage({ title }) {
  return (
    <Layout title={title}>
      {/* <link rel="stylesheet" href="/css/time.css" /> */}
      <h3>Hello admin</h3>
      <div className="container">
        <a href="/changeTariffs"><button type="button" className="btn btn-warning">Изменить тарифы</button></a>
        {' '}
        <a href="/changeAnimals"><button type="button" className="btn btn-warning">Изменить животных</button></a>
      </div>
    </Layout>
  );
};
