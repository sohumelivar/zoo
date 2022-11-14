const React = require('react');
const Layout = require('./Layout');

module.exports = function ChangeAnimals({ title, username, result }) {
  return (
    <Layout username={username} title={title}>
      <script defer src="/js/animalsEdit.js" />
      <h3>Страница редактирования животного</h3>
      <div className="container btn-container">
        {!result
          ? (
            <h3>Животных не найдено</h3>
          ) : (
            result.map((animal) => (
              <div>
                {animal.species}
                <br />
                {/* <button id={`${animal.id}`} type="click" className="btn btnEdit btn-outline-dark">Редактировать</button> */}
                <button name={`${animal.id}`} type="click" className="btn btnDel btn-outline-dark">Удалить</button>
               <a href={`/allAnimalsEdit/${animal.id}`}> <button>Редактировать</button></a>
                <hr />
              </div>
            ))
          )}
      </div>
      {/* {result && result.map((animal) => <div>{ animal.species }</div>)} */}
    </Layout>
  );
};
