const React = require('react');
const Layout = require('./Layout');

module.exports = function ChangeTariffs({ title, username }) {
  return (
    <Layout username={username} title={title}>
      <h3>Change Tariffs</h3>
    </Layout>
  );
};
