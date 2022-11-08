const React = require('react');
const Layout = require('./Layout');

module.exports = function ChangeAnimals({ title }) {
  return (
    <Layout title={title}>
      <h3>Страница изменения животных</h3>
      <div className="container">
        <h4>Текущий список животных:</h4>

        <p>
          Название
          <a href=""><button type="button" className="btn btn-warning">Редактировать животное</button></a>
          {' '}
          <button type="button" className="btn btn-warning">Удалить животное</button>
        </p>
        <h4>Добавить животное</h4>
        <form>
          <div className="mb-3">
            <input name="name" placeholder="name" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            Список фотографий?
          </div>
          <div className="mb-3">
            <input name="description" placeholder="Description" type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-info">Submit</button>
          <p id="regErr"> </p>
        </form>

      </div>

    </Layout>
  );
};
