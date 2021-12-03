const removeAll = (displayOnScreen) => {
  let ToDoArray = JSON.parse(localStorage.getItem('ToDoArray') || '[]');
  document.querySelector('#removeAll').addEventListener('click', () => {
    console.log('befor filtering', ToDoArray);
    ToDoArray = ToDoArray.filter((el) => (el.completed === false));
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
    document.querySelector('.form_').innerHTML = '';
    console.log('After removing:', ToDoArray);
    if (ToDoArray.length) {
      for (let i = 0; i < ToDoArray.length; i += 1) {
        displayOnScreen(ToDoArray[i]);
        ToDoArray[i].index = i + 1;
        localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
      }
    }
    console.log(ToDoArray);
    if (!ToDoArray.length) {
      document.querySelector('.Activity-list').classList.add('hidden');
    } else {
      document.querySelector('.Activity-list').classList.remove('hidden');
    }
  });
};


export default removeAll;