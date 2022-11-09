const input1 = document.querySelector('.input1');
const p1 = document.querySelector('.p1');

const input2 = document.querySelector('.input2');
const p2 = document.querySelector('.p2');

const input3 = document.querySelector('.input3');
const p3 = document.querySelector('.p3');

const input4 = document.querySelector('.input4');
const p4 = document.querySelector('.p4');

const input5 = document.querySelector('.input5');
const p5 = document.querySelector('.p5');

const input6 = document.querySelector('.input6');
const p6 = document.querySelector('.p6');

const input7 = document.querySelector('.input7');
const p7 = document.querySelector('.p7');

// ? ------------------------------------------------
// todo изменение возраста взрослого человека

input1.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name1 } = event.target;
    const response = await fetch('/changeTariffs/1', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
            JSON.stringify({
              name1: name1.value,
            }),
    });
    const data = await response.json();
    p1.innerHTML = `значение: ${data.age}`;
    name1.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo изменение возраста ребенка

input2.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name2 } = event.target;
    const response = await fetch('/changeTariffs/2', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
            JSON.stringify({
              name2: name2.value,
            }),
    });
    const data = await response.json();
    p2.innerHTML = `значение: ${data.age}`;
    name2.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo Изменить цену на единый билет
// todo Будний день, adult

input3.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name3 } = event.target;
    const response = await fetch('/changeTariffs/3', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
            JSON.stringify({
              name3: name3.value,
            }),
    });
    const data = await response.json();
    p3.innerHTML = `значение: ${data.basicPrice}`;
    name3.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo Изменить цену на единый билет
// todo Будний день, children

input4.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name4 } = event.target;
    const response = await fetch('/changeTariffs/4', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
            JSON.stringify({
              name4: name4.value,
            }),
    });
    const data = await response.json();
    p4.innerHTML = `значение: ${data.basicPrice}`;
    name4.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo Выходной день день, adult

input5.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name5 } = event.target;
    const response = await fetch('/changeTariffs/5', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
            JSON.stringify({
              name5: name5.value,
            }),
    });
    const data = await response.json();
    p5.innerHTML = `значение: ${data.basicPrice}`;
    name5.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo Выходной день день, children

input6.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name6 } = event.target;
    const response = await fetch('/changeTariffs/6', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
            JSON.stringify({
              name6: name6.value,
            }),
    });
    const data = await response.json();
    p6.innerHTML = `значение: ${data.basicPrice}`;
    name6.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo Изменить цену на "Зооэкзотариум"
// todo Будний день, adult

input7.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name7 } = event.target;
    const response = await fetch('/changeTariffs/7', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
            JSON.stringify({
              name7: name7.value,
            }),
    });
    const data = await response.json();
    p7.innerHTML = `значение: ${data.additionalTicket}`;
    name7.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});
