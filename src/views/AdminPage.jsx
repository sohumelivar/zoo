const React = require('react');
const Layout = require('./Layout');

module.exports = function AdminPage({ title }) {
  return (
    <Layout title={title}>
      Hello, admin
    </Layout>
  );
};
