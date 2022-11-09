const React = require('react');
const Layout = require('./Layout');

module.exports = function Animal({ All }) {
  return (
    <Layout>
      <h1>Animals</h1>
      {All?.map((el) => (
        <div id={el.id} key={el.id}>
          <div className="card" style={{ width: '50rem', margin: '40px' }}>
            <img src={el.photo1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{el.species}</h5>
              <p className="card-text">{el.short}</p>
              <a href={`/animal/${el.id}`} className="btn btn-primary">Узнать больше</a>

            </div>
          </div>

        </div>
      ))}

    </Layout>
  );
};
