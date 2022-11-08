const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ title }) {
  return (
    <Layout title={title}>
      <h3>Main page</h3>
    </Layout>
  );
};
