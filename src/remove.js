const removeAll = (displayOnScreen, ToDoArray) => {
  document.querySelector('#removeAll').addEventListener('click', () => {
    ToDoArray = ToDoArray.filter((el) => (el.completed === false));
    document.querySelector('.form_').innerHTML = '';
    if (ToDoArray.length) {
      for (let i = 0; i < ToDoArray.length; i += 1) {
        displayOnScreen(ToDoArray[i]);
        ToDoArray[i].index = i + 1;
      }
    }
    if (!ToDoArray.length) {
      document.querySelector('.Activity-list').classList.add('hidden');
    } else {
      document.querySelector('.Activity-list').classList.remove('hidden');
    }
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
  });
};

export default removeAll;