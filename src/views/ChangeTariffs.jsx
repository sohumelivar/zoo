const React = require('react');
const Layout = require('./Layout');

module.exports = function ChangeTariffs({ title, childrenWeekEnd, childrenWeekDay, adultWeekEnd, adultWeekDay, username }) {
  return (
    <Layout username={username} title={title}>
      <link rel="stylesheet" href="/css/changeTariffsCss.css" />
      <script defer src="/js/editTariffs.js" />
      <div className="mainDivEditTariff">
        <div className='firstDiv'>
        <hr />
        <div className='article'>
        <h4>Изменить возраст</h4>
        </div>
        <hr />
        <div className="container1">
        <div>
        <form className="input1">
        <p>возраст для взрослых</p>
        <p className='p1'>значение: с {adultWeekDay.age} лет</p>
        <input type="text" className="form-control" name="name1" placeholder="введите возраст"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error1"></p>
        </form>
        </div>
        <hr />
        <div>
        <form className="input2">
        <p>возраст для детей</p>
        <p className='p2'>значение: до {childrenWeekDay.age} лет</p>
        <input type="text" className="form-control" name="name2" placeholder="введите возраст"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error2"></p>
        </form>
        </div>
        </div>
        <hr />
        <div className='article'>
        <h4>Изменить цену на единый билет</h4>
        </div>
        <hr />
        <div className='article'>
        <h5>Будний день</h5>
        </div>
        <hr />
        <div className="container1">
        <div>
        <form className="input3">
        <p>цена для взрослых</p>
        <p className='p3'>значение: {adultWeekDay.basicPrice} ₽</p>
        <input type="text" className="form-control" name="name3" placeholder="введите цену"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error3"></p>
        </form>
        </div>
        <hr />
        <div>
        <form className="input4">
        <p>цена для детей</p>
        <p className='p4'>значение: {childrenWeekDay.basicPrice} ₽</p>
        <input type="text" className="form-control" name="name4" placeholder="введите цену"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error4"></p>
        </form>
        </div>
        </div>
        <hr />
        <div className='article'>
        <h5>Выходной день</h5>
        </div>
        <hr />
        <div className="container1">
        <div>
        <form className="input5">
        <p>цена для взрослых</p>
        <p className='p5'>значение: {adultWeekEnd.basicPrice} ₽</p>
        <input type="text" className="form-control" name="name5" placeholder="введите цену"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error5"></p>
        </form>
        </div>
        <hr />
        <div>
        <form className="input6">
        <p>цена для детей</p>
        <p className='p6'>значение: {childrenWeekEnd.basicPrice} ₽</p>
        <input type="text" className="form-control" name="name6" placeholder="введите цену"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error6"></p>
        </form>
        </div>
        </div>
        <hr />
        </div>
        <div className='article'>
        <h4>Изменить цену на билет "Зооэкзотариум"</h4>
        </div>
        <div className="secondDiv">
        <hr />
        <div className='article'>
        <h5>Будний день</h5>
        </div>
        <hr />
        <div className="container1">
        <div>
        <form className="input7">
        <p>цена для взрослых</p>
        <p className='p7'>значение: {adultWeekDay.additionalTicket} ₽</p>
        <input type="text" className="form-control" name="name7" placeholder="введите цену"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error7"></p>
        </form>
        </div>
        <hr />
        <div>
        <form className="input8">
        <p>цена для детей</p>
        <p className='p8'>значение: {childrenWeekDay.additionalTicket} ₽</p>
        <input type="text" className="form-control" name="name8" placeholder="введите цену"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error8"></p>
        </form>
        </div>
        </div>
        <hr />
        <div className='article'>
        <h5>Выходной день</h5>
        </div>
        <hr />
        <div className="container1">
        <div>
        <form className="input9">
        <p>цена для взрослых</p>
        <p className='p9'>значение: {adultWeekEnd.additionalTicket} ₽</p>
        <input type="text" className="form-control" name="name9" placeholder="введите цену"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error9"></p>
        </form>
        </div>
        <hr />
        <div>
        <form className="input10">
        <p>цена для детей</p>
        <p className='p10'>значение: {childrenWeekEnd.additionalTicket} ₽</p>
        <input type="text" className="form-control" name="name10" placeholder="введите цену"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error10"></p>
        </form>
        </div>
        </div>
        <hr />
        <hr />
        </div>
        <div className='article'>
        <h4>Изменить цену на катание на конном экипаже или электромрбиле по зоопарку</h4>
        </div>
        <div className='thirdDiv'>
        <hr />
        <div className='article'>
        <h5>Будний день</h5>
        </div>
        <hr />
        <div className="container1">
        <div>
        <form className="input11">
        <p>цена для взрослых</p>
        <p className='p11'>значение: {adultWeekDay.ridePrice} ₽</p>
        <input type="text" className="form-control" name="name11" placeholder="введите цену"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error11"></p>
        </form>
        </div>
        <hr />
        <div>
        <form className="input12">
        <p>цена для детей</p>
        <p className='p12'>значение: {childrenWeekDay.ridePrice} ₽</p>
        <input type="text" className="form-control" name="name12" placeholder="введите цену"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error12"></p>
        </form>
        </div>
        </div>
        <hr />
        <div className='article'>
        <h5>Выходной день</h5>
        </div>
        <hr />
        <div className="container1 opacity">
        <div>
        <form className="input13">
        <p>цена для взрослых</p>
        <p className='p13'>значение: {adultWeekEnd.ridePrice} ₽</p>
        <input type="text" className="form-control" name="name13" placeholder="введите цену"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error13"></p>
        </form>
        </div>
        <hr />
        <div>
        <form className="input14">
        <p>цена для детей</p>
        <p className='p14'>значение: {childrenWeekEnd.ridePrice} ₽</p>
        <input type="text" className="form-control" name="name14" placeholder="введите цену"/>
        <button type='submit' className="btn btn-outline-dark">Применить</button>
        <p id="error14"></p>
        </form>
        </div>
        </div>
        </div>
        <hr />
      </div>

    </Layout>
  );
};
