const React = require('react');
const Layout = require('./Layout');

module.exports = function CreateAnimal() {
  return (
    <Layout>
      <h1> Создание карточки животного</h1>
      <form action="/createanimal" method="POST">
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
        <button className="btn btn-primary" type="submit">Создать карточку</button>
      </form>
    </Layout>
  );
};
