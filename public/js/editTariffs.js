const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const input4 = document.querySelector('.input4');
const input5 = document.querySelector('.input5');
const input6 = document.querySelector('.input6');
const input7 = document.querySelector('.input7');
const input8 = document.querySelector('.input8');
const input9 = document.querySelector('.input9');
const input10 = document.querySelector('.input10');
const input11 = document.querySelector('.input11');
const input12 = document.querySelector('.input12');
const input13 = document.querySelector('.input13');
const input14 = document.querySelector('.input14');

const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');
const p5 = document.querySelector('.p5');
const p6 = document.querySelector('.p6');
const p7 = document.querySelector('.p7');
const p8 = document.querySelector('.p8');
const p9 = document.querySelector('.p9');
const p10 = document.querySelector('.p10');
const p11 = document.querySelector('.p11');
const p12 = document.querySelector('.p12');
const p13 = document.querySelector('.p13');
const p14 = document.querySelector('.p14');

const error1 = document.querySelector('#error1');
const error2 = document.querySelector('#error2');
const error3 = document.querySelector('#error3');
const error4 = document.querySelector('#error4');
const error5 = document.querySelector('#error5');
const error6 = document.querySelector('#error6');
const error7 = document.querySelector('#error7');
const error8 = document.querySelector('#error8');
const error9 = document.querySelector('#error9');
const error10 = document.querySelector('#error10');
const error11 = document.querySelector('#error11');
const error12 = document.querySelector('#error12');
const error13 = document.querySelector('#error13');
const error14 = document.querySelector('#error14');

// ? ------------------------------------------------
// todo ?????????????????? ???????????????? ?????????????????? ????????????????

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
    if (data.status === 'error') {
      error1.innerHTML = data.message;
    } else {
      p1.innerHTML = `????????????????: ${data.age} ??????`;
      name1.value = null;
    }
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo ?????????????????? ???????????????? ??????????????

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
    if (data.status === 'error') {
      error2.innerHTML = data.message;
    } else {
      p2.innerHTML = `????????????????: ${data.age} ??????`;
      name2.value = null;
    }
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo ???????????????? ???????? ???? ???????????? ??????????
// todo ???????????? ????????, adult

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
    if (data.status === 'error') {
      error3.innerHTML = data.message;
    } else {
      p3.innerHTML = `????????????????: ${data.basicPrice} ???`;
      name3.value = null;
    }
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo ???????????????? ???????? ???? ???????????? ??????????
// todo ???????????? ????????, children

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
    if (data.status === 'error') {
      error4.innerHTML = data.message;
    } else {
      p4.innerHTML = `????????????????: ${data.basicPrice} ???`;
      name4.value = null;
    }
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo ???????????????? ???????? ????????, adult

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
    if (data.status === 'error') {
      error5.innerHTML = data.message;
    } else {
      p5.innerHTML = `????????????????: ${data.basicPrice} ???`;
      name5.value = null;
    }
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo ???????????????? ???????? ????????, children

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
    if (data.status === 'error') {
      error6.innerHTML = data.message;
    } else {
      p6.innerHTML = `????????????????: ${data.basicPrice} ???`;
      name6.value = null;
    }
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo ???????????????? ???????? ???? "??????????????????????????"
// todo ???????????? ????????, adult

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
    if (data.status === 'error') {
      error7.innerHTML = data.message;
    } else {
      p7.innerHTML = `????????????????: ${data.additionalTicket} ???`;
      name7.value = null;
    }
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});

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
    if (data.status === 'error') {
      error8.innerHTML = data.message;
    } else {
      p8.innerHTML = `????????????????: ${data.additionalTicket} ???`;
      name8.value = null;
    }
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
    if (data.status === 'error') {
      error9.innerHTML = data.message;
    } else {
      p9.innerHTML = `????????????????: ${data.additionalTicket} ???`;
      name9.value = null;
    }
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
    if (data.status === 'error') {
      error10.innerHTML = data.message;
    } else {
      p10.innerHTML = `????????????????: ${data.additionalTicket} ???`;
      name10.value = null;
    }
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
    if (data.status === 'error') {
      error11.innerHTML = data.message;
    } else {
      p11.innerHTML = `????????????????: ${data.ridePrice} ???`;
      name11.value = null;
    }
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
    if (data.status === 'error') {
      error12.innerHTML = data.message;
    } else {
      p12.innerHTML = `????????????????: ${data.ridePrice} ???`;
      name12.value = null;
    }
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
    if (data.status === 'error') {
      error13.innerHTML = data.message;
    } else {
      p13.innerHTML = `????????????????: ${data.ridePrice} ???`;
      name13.value = null;
    }
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
    if (data.status === 'error') {
      error14.innerHTML = data.message;
    } else {
      p14.innerHTML = `????????????????: ${data.ridePrice} ???`;
      name14.value = null;
    }
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});
