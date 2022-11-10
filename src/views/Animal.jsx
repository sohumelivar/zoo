const React = require('react');
const Layout = require('./Layout');

module.exports = function Animal({ All, title, username }) {
  return (

    <Layout username={username} title={title}>
      <script defer src="/js/del.js" />
      <h1>Animals</h1>
      <div id="animals">
        {All?.map((el) => (
          <div id={el.id} key={el.id}>
            <div className="card" style={{ width: '50rem', margin: '40px' }}>
              <img src={el.photo1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{el.species}</h5>
                <p className="card-text">{el.short}</p>
                <a href={`/animal/${el.id}`} className="btn btn-primary" style={{ margin: '5px' }}>Узнать больше</a>
                <button id={el.id} style={{ margin: '5px' }} className="btn btn-outline-primary" data-post="delete">Удалить карточку</button>
                <a href={`/updateanimal/${el.id}`}>Редактировать карточку</a>
              </div>

            </div>

          </div>

        ))}

      </div>

    </Layout>
  );
};
