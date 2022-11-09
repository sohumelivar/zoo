const React = require('react');
const Layout = require('./Layout');

module.exports = function ChangeTariffs({ title, childrenWeekEnd, childrenWeekDay, adultWeekEnd, adultWeekDay, username }) {
  return (
    <Layout username={username} title={title}>
      <script defer src="/js/editTariffs.js" />
      <script defer src="/js/editTariffsDEV.js" />
      <h3>Change Tariffs</h3>
      <br />
      <br />
      <div className="mainDivEditTariff">
        <hr />
        <h5>Изменить возраст</h5>
        <hr />
        <div>
        <form className="input1">
        <p>изменить возраст adult</p>
        <p className='p1'>значение: {adultWeekDay.age}</p>
        <input type="text" name="name1" placeholder="введите возраст"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form className="input2">
        <p>изменить возраст children</p>
        <p className='p2'>значение: {childrenWeekDay.age}</p>
        <input type="text" name="name2" placeholder="введите возраст"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <h5>Изменить цену на единый билет</h5>
        <hr />
        <h5>Будний день</h5>
        <hr />
        <div>
        <form className="input3">
        <p>изменить цену adult</p>
        <p className='p3'>значение: {adultWeekDay.basicPrice}</p>
        <input type="text" name="name3" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form className="input4">
        <p>изменить цену children</p>
        <p className='p4'>значение: {childrenWeekDay.basicPrice}</p>
        <input type="text" name="name4" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <h5>Выходной день</h5>
        <hr />
        <div>
        <form className="input5">
        <p>изменить цену adult</p>
        <p className='p5'>значение: {adultWeekEnd.basicPrice}</p>
        <input type="text" name="name5" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form className="input6">
        <p>изменить цену children</p>
        <p className='p6'>значение: {childrenWeekEnd.basicPrice}</p>
        <input type="text" name="name6" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <h5>Изменить цену на билет "Зооэкзотариум"</h5>
        <hr />
        <h5>Будний день</h5>
        <hr />
        <div>
        <form className="input7">
        <p>изменить цену adult</p>
        <p className='p7'>значение: {adultWeekDay.additionalTicket}</p>
        <input type="text" name="name7" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form className="input8">
        <p>изменить цену children</p>
        <p className='p8'>значение: {childrenWeekDay.additionalTicket}</p>
        <input type="text" name="name8" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <h5>Выходной день</h5>
        <hr />
        <div>
        <form className="input9">
        <p>изменить цену adult</p>
        <p className='p9'>значение: {adultWeekEnd.additionalTicket}</p>
        <input type="text" name="name9" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form className="input10">
        <p>изменить цену children</p>
        <p className='p10'>значение: {childrenWeekEnd.additionalTicket}</p>
        <input type="text" name="name10" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <hr />
        <h5>Изменить цену на катание на конном экипаже или электромрбиле по зоопарку</h5>
        <hr />
        <h5>Будний день</h5>
        <hr />
        <div>
        <form className="input11">
        <p>изменить цену adult</p>
        <p className='p11'>значение: {adultWeekDay.ridePrice}</p>
        <input type="text" name="name11" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form className="input12">
        <p>изменить цену children</p>
        <p className='p12'>значение: {childrenWeekDay.ridePrice}</p>
        <input type="text" name="name12" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <h5>Выходной день</h5>
        <hr />
        <div>
        <form className="input13">
        <p>изменить цену adult</p>
        <p className='p13'>значение: {adultWeekEnd.ridePrice}</p>
        <input type="text" name="name13" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form className="input14">
        <p>изменить цену children</p>
        <p className='p14'>значение: {childrenWeekEnd.ridePrice}</p>
        <input type="text" name="name14" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
      </div>

    </Layout>
  );
};
