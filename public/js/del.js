const ani = document.querySelector('#animals');


ani.addEventListener('click', async (e) => {
  if (e.target.dataset.post === 'delete') {
    const { id } = e.target;
    console.log(id);
    const response = await fetch('/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });
    if (response.status === 200) {
      const ch = document.getElementById(`${id}`);
      ani.removeChild(ch);
    } else {
      console.error();
    }
  }
});
