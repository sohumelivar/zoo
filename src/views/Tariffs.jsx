/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
const React = require('react');
const Layout = require('./Layout');

module.exports = function ChangeTariffs({
  title, childrenWeekEnd, childrenWeekDay, adultWeekEnd, adultWeekDay, username,
}) {
  return (
    <Layout username={username} title={title}>
      <h1>Стоимость посещения зоопарка</h1>
      <br />
      <br />
      <div>
        <h2>Стоимость билетов</h2>
      </div>
      <br />
      <br />
      <div>
        <h4>Единый билет на все экспозиции Урюпинского зоопарка</h4>
        <h5>Будний день</h5>
        <p> - Единый взрослый ( c {adultWeekDay.age} лет) - {adultWeekDay.basicPrice} ₽</p>
        <p> - Единый детский (с 7 до {childrenWeekDay.age}) - {childrenWeekDay.basicPrice} ₽</p>
        <p> - Дети до 7 лет - Бесплатно</p>
        <h5>Выходной день</h5>
        <p> - Единый взрослый ( c {adultWeekEnd.age} лет) - {adultWeekEnd.basicPrice} ₽</p>
        <p> - Единый детский (с 7 до {childrenWeekEnd.age}) - {childrenWeekEnd.basicPrice} ₽</p>
        <p> - Дети до 7 лет - Бесплатно</p>
      </div>
      <br />
      <br />
      <div>
        <h4>Экспозиция "Зооэкзотариум" (Животные с 5 континентов планеты Земля)</h4>
        <h6>(при приобретении билета на основную территорию)</h6>
        <h5>Будний день</h5>
        <p> - Единый взрослый ( c {adultWeekDay.age} лет) - {adultWeekDay.additionalTicket} ₽</p>
        <p> - Единый детский (с 7 до {childrenWeekDay.age}) - {childrenWeekDay.additionalTicket} ₽</p>
        <p> - Дети до 7 лет - Бесплатно</p>
        <h5>Выходной день</h5>
        <p> - Единый взрослый ( c {adultWeekEnd.age} лет) - {adultWeekEnd.additionalTicket} ₽</p>
        <p> - Единый детский (с 7 до {childrenWeekEnd.age}) - {childrenWeekEnd.additionalTicket} ₽</p>
        <p> - Дети до 7 лет - Бесплатно</p>
      </div>
      <br />
      <br />
      <div>
        <h4>Катание на конном экипаже или электромобиле по зоопарку</h4>
        <h6>(при приобретении билета на основную территорию)</h6>
        <h5>Будний день</h5>
        <p> - Взрослый ( c {adultWeekDay.age} лет) - {adultWeekDay.ridePrice} ₽</p>
        <p> - Детский (с 7 до {childrenWeekDay.age}) - {childrenWeekDay.ridePrice} ₽</p>
        <p> - Дети до 7 лет - Бесплатно</p>
        <h5>Выходной день</h5>
        <p> - Взрослый ( c {adultWeekEnd.age} лет) - {adultWeekEnd.ridePrice} ₽</p>
        <p> - Детский (с 7 до {childrenWeekEnd.age}) - {childrenWeekEnd.ridePrice} ₽</p>
        <p> - Дети до 7 лет - Бесплатно</p>
      </div>
      <br />
      <br />
      <div>
        <h4>Льготные категории посетителей</h4>
        <p> - Инвалиды 1-й группы (с одним сопровождающим);</p>
        <p> - Учаcтники Великой Отечественной войны;</p>
        <p> - Военнослужащие срочной службы;</p>
        <p> - Члены многодетных семей;</p>
        <p> - Дети из интернатов и детских домов;</p>
        <p> - Дети-инвалиды (до 18 лет включительно)</p>
      </div>
      <br />
      <br />
      <div>
        <h4>Важная информация для посетителей!</h4>
        <p> - Запрещено посещение зоопарка детьми до 14 лет без сопровождения родителей;</p>
        <p> - Запрещено проносить/провозить любые транспортные средства (в т.ч. велосипеды, самокаты, беговелы, скейтборды, сегвеи, гироскутеры и моноколеса). Возможно посещение основной территории зоопарка с детскими колясками;</p>
        <p> - Запрещено посещать зоопарк в состоянии алкогольного, наркотического опьянения;</p>
        <p> - Запрещено проносить с собой летательные аппараты, в т.ч. мультикоптеры и квадрокоптеры;</p>
        <p> - Запрещено посещение зоопарка с домашними животными любого вида и размера</p>
      </div>
      <br />
      <br />
      <div>
        <h5>Мы разработали для вас оптимальный маршрут, который позволит не только безопасно наслаждаться прогулкой по территории зоопарка, но и увидеть всех наших обитателей.</h5>
        <h5>Мы ждем вас!</h5>
      </div>
    </Layout>
  );
};
