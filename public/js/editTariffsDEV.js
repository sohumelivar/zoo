const input8 = document.querySelector('.input8');
const input9 = document.querySelector('.input9');
const input10 = document.querySelector('.input10');
const input11 = document.querySelector('.input11');
const input12 = document.querySelector('.input12');
const input13 = document.querySelector('.input13');
const input14 = document.querySelector('.input14');
const p8 = document.querySelector('.p8');
const p9 = document.querySelector('.p9');
const p10 = document.querySelector('.p10');
const p11 = document.querySelector('.p11');
const p12 = document.querySelector('.p12');
const p13 = document.querySelector('.p13');
const p14 = document.querySelector('.p14');

// input 8
input8.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name8 } = event.target;
    const response = await fetch('/changeTariffs/8', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
        JSON.stringify({
          name8: name8.value,
        }),
    });
    const data = await response.json();
    console.log(data);
    p8.innerHTML = `значение: ${data.additionalTicket}`;
    name8.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// input 9
input9.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name9 } = event.target;
    const response = await fetch('/changeTariffs/9', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
        JSON.stringify({
          name9: name9.value,
        }),
    });
    const data = await response.json();
    console.log(data);
    p9.innerHTML = `значение: ${data.additionalTicket}`;
    name9.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// input 10

input10.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name10 } = event.target;
    const response = await fetch('/changeTariffs/10', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
        JSON.stringify({
          name10: name10.value,
        }),
    });
    const data = await response.json();
    console.log(data);
    p10.innerHTML = `значение: ${data.additionalTicket}`;
    name10.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// input 11

input11.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name11 } = event.target;
    const response = await fetch('/changeTariffs/11', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
        JSON.stringify({
          name11: name11.value,
        }),
    });
    const data = await response.json();
    console.log(data);
    p11.innerHTML = `значение: ${data.ridePrice}`;
    name11.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// input 12

input12.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name12 } = event.target;
    const response = await fetch('/changeTariffs/12', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
        JSON.stringify({
          name12: name12.value,
        }),
    });
    const data = await response.json();
    console.log(data);
    p12.innerHTML = `значение: ${data.ridePrice}`;
    name12.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// input 13

input13.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name13 } = event.target;
    const response = await fetch('/changeTariffs/13', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
        JSON.stringify({
          name13: name13.value,
        }),
    });
    const data = await response.json();
    console.log(data);
    p13.innerHTML = `значение: ${data.ridePrice}`;
    name13.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// input 14

input14.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name14 } = event.target;
    const response = await fetch('/changeTariffs/14', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
        JSON.stringify({
          name14: name14.value,
        }),
    });
    const data = await response.json();
    console.log(data);
    p14.innerHTML = `значение: ${data.ridePrice}`;
    name14.value = null;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});
