const React = require('react');
const Layout = require('./Layout');

module.exports = function ChangeAnimals({ id, species }) {
  return (
    <Layout>
      <h3>
        Страница изменения {`${species}`}
      </h3>
      <form action={`/updateanimal/${id}`} method="POST">
        <div className="input-group input-group-lg" style={{ margin: '30px' }}>
          <span className="input-group-text" id="inputGroup-sizing-lg">Название животного</span>
          <input name="species" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>

        <div className="input-group mb-3" style={{ margin: '30px' }}>
          <span className="input-group-text" id="inputGroup-sizing-default">Краткое описание</span>
          <input name="short" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>

        <div className="input-group mb-3" style={{ margin: '30px' }}>
          <span className="input-group-text" id="inputGroup-sizing-default">Oписание</span>
          <input name="description" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>
        <h3> Добавьте фотографии</h3>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Фото</span>
          <input name="photo1" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Фото</span>
          <input name="photo2" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Фото</span>
          <input name="photo3" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Фото</span>
          <input name="photo4" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <button className="btn btn-primary" type="submit">Редактировать карточку </button>
      </form>

    </Layout>
  );
};
