const React = require('react');
const Layout = require('./Layout');

module.exports = function ChangeAnimals({ title }) {
  return (
    <Layout title={title}>
      <h3>Страница редактирования животного</h3>
      <div className="container">
        <form>
          <div className="mb-3">
            <input name="animalName" placeholder="Change name" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            Список фотографий?
          </div>
          <div className="mb-3">
            <textarea name="description" placeholder="Change description" type="text" className="form-control" id="" cols="3" rows="3" />
          </div>
          <button type="submit" className="btn btn-info">Submit</button>
          <p id="err"> </p>
        </form>

      </div>

    </Layout>
  );
};
