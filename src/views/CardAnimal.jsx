const React = require('react');
const Layout = require('./Layout');

module.exports = function CardAnimal({ One }) {
  console.log('jdfghkdsrghdkrg', One);
  return (
    <Layout>
      <h1> odfghodfghdofg</h1>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={One.photo1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={One.photo2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={One.photo3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card" style={{ width: '65rem', margin: '40px' }}>
        <div className="card-body">
          <h5 className="card-title">{One.species}</h5>
          <p className="card-text">{One.short}</p>
          <p className="card-text">{One.description}</p>
          <a href={`/animal/${One.id}`}>Редактировать</a>
          <a href={`/animal/${One.id}`}>Удалить</a>
        </div>
      </div>

    </Layout>
  );
};
