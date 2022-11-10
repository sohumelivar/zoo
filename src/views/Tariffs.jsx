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
      <link rel="stylesheet" href="/css/tariffs.css" />
      <div className="container-fluid">
        <div className="row bgimg">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" />
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <h1 className="title">Стоимость посещения зоопарка</h1>
            <p className="text" />
            <p className="text">Работаем с 9.00-20.00</p>
          </div>
          <div className="row" />
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 opacity">
              <h1 className="invite">Единый билет на все экспозиции Урюпинского зоопарка </h1>
              <p className="info"> Единый взрослый ( c {adultWeekDay.age} лет) - {adultWeekDay.basicPrice} ₽ Единый детский (с 7 до {childrenWeekDay.age}) - {childrenWeekDay.basicPrice} ₽ <i>(Будние дни)</i>  <br />
                Единый взрослый ( c {adultWeekEnd.age} лет) - {adultWeekEnd.basicPrice} ₽ Единый детский (с 7 до {childrenWeekEnd.age}) - {childrenWeekEnd.basicPrice} ₽ <i> (Выходные дни)</i>
                <br />
                <i> Дети до 7 лет - Бесплатно</i>
              </p>
              <h1 className="invite">Экспозиция "Зооэкзотариум" (Животные с 5 континентов планеты Земля) </h1>
              <p className="info"><i>(при приобретении билета на основную территорию) </i><br />
                Единый взрослый ( c {adultWeekDay.age} лет) - {adultWeekDay.additionalTicket} ₽ Единый детский (с 7 до {childrenWeekDay.age}) - {childrenWeekDay.additionalTicket} ₽ <i>(Будние дни)</i> <br />
                Единый взрослый ( c {adultWeekEnd.age} лет) - {adultWeekEnd.additionalTicket} ₽ Единый детский (с 7 до {childrenWeekDay.age}) - {childrenWeekDay.additionalTicket} ₽ <i>(Выходные дни) </i>
              </p>
              <h1 className="invite">Катание на конном экипаже или электромобиле по зоопарку</h1>
              <p className="info"><i>(при приобретении билета на основную территорию) </i><br />
                Взрослый ( c {adultWeekDay.age} лет) - {adultWeekDay.ridePrice} ₽ Детский (с 7 до {childrenWeekDay.age}) - {childrenWeekDay.ridePrice} ₽ <i>(Будние дни)</i> <br />
                Взрослый ( c {adultWeekEnd.age} лет) - {adultWeekEnd.ridePrice} ₽ Детский (с 7 до {childrenWeekEnd.age}) - {childrenWeekEnd.ridePrice} ₽ <i>(Выходные дни) </i>
              </p>
              <p className="info"> </p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
          </div>
        </div>
        <footer className="row bg-2">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 link">
            <a href="" rel="noreferrer">Картинки</a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 link">
            <a href="" rel="noreferrer">Зоопарк</a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 link">
            <a href="" rel="noreferrer">Контакты</a>
          </div>
        </footer>
      </div>
      <div className="container-fluid">
        <div className="row bgimg1">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" />
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <h1 className="title">Льготные категории посетителей </h1>
          </div>
          <div className="row" />
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 opacity">

              <h1 className="invite">Льготы предоставляем </h1>
              <p className="info">
                Инвалидам 1-й группы (с одним сопровождающим)
                <br />
                Учаcтникам Великой Отечественной войны;
                <br />
                Военнослужащам срочной службы;
                <br />
                Членам многодетных семей;
                <br />
                Детям из интернатов и детских домов;
                <br />
                Детям-инвалидам (до 18 лет включительно)
              </p>
              <h1 className="invite">Важная информация для посетителей!</h1>
              <p className="info">
                Запрещено посещение зоопарка детьми до 14 лет без сопровождения родителей;
                <br />
                Запрещено проносить/провозить любые транспортные средства (в т.ч. велосипеды, самокаты, беговелы, скейтборды, сегвеи, гироскутеры и моноколеса. Возможно посещение основной территории зоопарка с детскими колясками);
                <br />
                Запрещено посещать зоопарк в состоянии алкогольного, наркотического опьянения;
                <br />
                Запрещено проносить с собой летательные аппараты, в т.ч. мультикоптеры и квадрокоптеры;
                <br />
                Запрещено посещение зоопарка с домашними животными любого вида и размера
              </p>
              <p className="info">
                <i><b>Мы разработали для вас оптимальный маршрут, который позволит не только безопасно наслаждаться прогулкой по территории зоопарка, но и увидеть всех наших обитателей.
                  Мы ждем вас!
                 </b>
                </i>
              </p>
              <p className="info"> </p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
