const React = require('react');
const Layout = require('./Layout');

module.exports = function Page404({ title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/page404.css" />
        <title>Document</title>
      </head>
      <body>
        <main className="bl_page404">
          <h1>Error 404. The page does not exist</h1>
          <p>
            Sorry! The page you are looking for can not be found. Perhaps the page you requested was moved or deleted. It is also possible that you made a small typo when entering the address. Go to the main page.
          </p>
          <div className="bl_page404__wrapper">
            <img src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true" alt="cloud_warmcasino.png" />
            <div className="bl_page404__el1" />
            <div className="bl_page404__el2" />
            <div className="bl_page404__el3" />
            <a className="bl_page404__link" href="/">go home</a>
          </div>
        </main>
      </body>
    </html>
  );
};
