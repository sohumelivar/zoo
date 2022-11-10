const React = require('react');

module.exports = function Layout({ children, username}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
        <link rel="stylesheet" href="/css/main.css" />
        <title>Zoo</title>
      </head>
      <body>
        <a href="/"><button type="button" className="btn btn-outline-dark">Главная</button></a>
        {' '}
        <a href="/animal"><button type="button" className="btn btn-outline-dark">Наши животные</button></a>
        {' '}
        <a href="/tariffs"><button type="button" className="btn btn-outline-dark">Тарифы и услуги</button></a>
        {' '}
        {!username
          ? (
            <>
              <button id="adminBtn" type="button" className="btn btn-outline-dark">Вход для администратора</button>
              {' '}
            </>
          ) : (
            <>
              <a href="/admin"><button type="button" className="btn btn-outline-dark">Страница админа</button></a>
              {' '}
              <a href="/logout"><button type="button" className="btn btn-outline-dark">Выход</button></a>
            </>
          )}
        <nav className="navMenu" />
        {children}
      </body>
    </html>
  );
};
