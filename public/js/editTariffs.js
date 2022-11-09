const input1 = document.querySelector('.input1');
const p1 = document.querySelector('.p1');

input1.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { name1 } = event.target;
    const response = await fetch('/changeTariffs', {
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
