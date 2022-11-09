const React = require('react');
const Layout = require('./Layout');

module.exports = function ChangeTariffs({ title, childrenWeekEnd, childrenWeekDay, adultWeekEnd, adultWeekDay, username }) {
  return (
    <Layout username={username} title={title}>
      <script defer src="/js/test.js" />
      <h3>Change Tariffs</h3>
      <br />
      <br />
      <div className="mainDivEditTariff">
        <hr />
        <h5>Изменить возраст</h5>
        <hr />
        <div>
        <form className='test'>
        <p>изменить возраст adult</p>
        <p className="testP" >значение: {adultWeekDay.age}</p>
        <input type="text" name="changeAgeAdultWD" placeholder="введите возраст"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form>
        <p>изменить возраст children</p>
        <p>значение: {childrenWeekDay.age}</p>
        <input type="text" name="changeAgeChildrenWD" placeholder="введите возраст"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <h5>Изменить цену на единый билет</h5>
        <hr />
        <h5>Будний день</h5>
        <hr />
        <div>
        <form>
        <p>изменить цену adult</p>
        <p>значение: {adultWeekDay.basicPrice}</p>
        <input type="text" name="changeAgeAdultEnd" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form>
        <p>изменить цену children</p>
        <p>значение: {childrenWeekDay.basicPrice}</p>
        <input type="text" name="changeAgeChildrenEnd" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <h5>Выходной день</h5>
        <hr />
        <div>
        <form>
        <p>изменить цену adult</p>
        <p>значение: {adultWeekEnd.basicPrice}</p>
        <input type="text" name="changeAgeAdultEnd" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form>
        <p>изменить цену children</p>
        <p>значение: {childrenWeekEnd.basicPrice}</p>
        <input type="text" name="changeAgeChildrenEnd" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <h5>Изменить цену на билет "Зооэкзотариум"</h5>
        <hr />
        <h5>Будний день</h5>
        <hr />
        <div>
        <form>
        <p>изменить цену adult</p>
        <p>значение: {adultWeekDay.additionalTicket}</p>
        <input type="text" name="changeAgeAdultEnd" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form>
        <p>изменить цену children</p>
        <p>значение: {childrenWeekDay.additionalTicket}</p>
        <input type="text" name="changeAgeChildrenEnd" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <h5>Выходной день</h5>
        <hr />
        <div>
        <form>
        <p>изменить цену adult</p>
        <p>значение: {adultWeekEnd.additionalTicket}</p>
        <input type="text" name="changeAgeAdultEnd" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form>
        <p>изменить цену children</p>
        <p>значение: {childrenWeekEnd.additionalTicket}</p>
        <input type="text" name="changeAgeChildrenEnd" placeholder="введите цену"/>
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
        <form>
        <p>изменить цену adult</p>
        <p>значение: {adultWeekDay.ridePrice}</p>
        <input type="text" name="changeAgeAdultEnd" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form>
        <p>изменить цену children</p>
        <p>значение: {childrenWeekDay.ridePrice}</p>
        <input type="text" name="changeAgeChildrenEnd" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <h5>Выходной день</h5>
        <hr />
        <div>
        <form>
        <p>изменить цену adult</p>
        <p>значение: {adultWeekEnd.ridePrice}</p>
        <input type="text" name="changeAgeAdultEnd" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
        <div>
        <form>
        <p>изменить цену children</p>
        <p>значение: {childrenWeekEnd.ridePrice}</p>
        <input type="text" name="changeAgeChildrenEnd" placeholder="введите цену"/>
        <button type='submit'>Применить</button>
        </form>
        </div>
        <hr />
      </div>

    </Layout>
  );
};
