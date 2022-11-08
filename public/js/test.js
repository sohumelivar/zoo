const testForm = document.querySelector('.test');
const testP = document.querySelector('.testP');

testForm.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const { changeAgeAdultWD } = event.target;
    console.log(changeAgeAdultWD);
    console.log(event.target);
    const response = await fetch('/changeTariffs', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:
            JSON.stringify({
              changeAgeAdultWD: changeAgeAdultWD.value,
            }),
      // body: JSON.stringify(obj),
    });
    const data = await response.json();
    console.log('DATA --- >>> ', data);
    testP.innerHTML = `значение: ${data}`;
  } catch (error) {
    console.log('ERROR TEST.JS --- >>> ', error);
  }
});
