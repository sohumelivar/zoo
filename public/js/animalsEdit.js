// const allBtn = document.querySelectorAll('.btnEdit');
// const batman = document.querySelector('.roben');
// console.log(batman);

const container = document.querySelector('.btn-container');

container.addEventListener('click', async (event) => {
  if (event.target.tagName === 'BUTTON' && event.target.className === 'btnDel') {
    const { name } = event.target;
    console.log(name);
    const response = await fetch('/allAnimalsEdit', {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === 'success') {
      // container.removeChild(event.target.parentNode);
      console.log(event.target);
    }
  }
});

// for (let i = 0; i < allBtn.length; i += 1) {
//   allBtn[i].addEventListener('click', async (event) => {
//     event.preventDefault();
//     console.log(allBtn[i].name);
//     // const response = await fetch('/allAnimalsEdit', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-type': 'application/json',
//     //   },
//     //   body:
//     //     JSON.stringify(
//     //       batman.value,
//     //     ),
//     // });
//     // console.log(response);
//     // const data = await response.json();
//     // console.log(data);
//   });
// }
