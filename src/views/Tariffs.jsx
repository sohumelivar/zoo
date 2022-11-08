/* eslint-disable react/no-unescaped-entities */
const React = require('react');
const Layout = require('./Layout');

module.exports = function ChangeTariffs({ title }) {
  return (
    <Layout title={title}>
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
        <p> - Единый взрослый ( c 17 лет) - 300 ₽</p>
        <p> - Единый детский (с 7 до 17) - 200 ₽</p>
        <p> - Дети до 7 лет - Бесплатно</p>
        <h5>Выходной день</h5>
        <p> - Единый взрослый ( c 17 лет) - 600 ₽</p>
        <p> - Единый детский (с 7 до 17) - 400 ₽</p>
        <p> - Дети до 7 лет - Бесплатно</p>
      </div>
      <br />
      <br />
      <div>
        <h4>Экспозиция "Зооэкзотариум" (Животные с 5 континентов планеты Земля)</h4>
        <h6>(при приобретении билета на основную территорию)</h6>
        <h5>Будний день</h5>
        <p> - Единый взрослый ( c 17 лет) - 250 ₽</p>
        <p> - Единый детский (с 7 до 17) - 150 ₽</p>
        <p> - Дети до 7 лет - Бесплатно</p>
        <h5>Выходной день</h5>
        <p> - Единый взрослый ( c 17 лет) - 300 ₽</p>
        <p> - Единый детский (с 7 до 17) - 200 ₽</p>
        <p> - Дети до 7 лет - Бесплатно</p>
      </div>
      <br />
      <br />
      <div>
        <h4>Катание на конном экипаже или электромобиле по зоопарку</h4>
        <h6>(при приобретении билета на основную территорию)</h6>
        <h5>Будний день</h5>
        <p> - Взрослый ( c 17 лет) - 200 ₽</p>
        <p> - Детский (с 7 до 17) - 100 ₽</p>
        <p> - Дети до 7 лет - Бесплатно</p>
        <h5>Выходной день</h5>
        <p> - Взрослый ( c 17 лет) - 400 ₽</p>
        <p> - Детский (с 7 до 17) - 200 ₽</p>
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
