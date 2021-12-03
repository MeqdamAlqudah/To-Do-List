const Add = ({ CreateOb, displayOnScreen, ToDoArray }) => {
  document.querySelector('#Add').addEventListener('change', () => {
    const index = ToDoArray.length + 1;
    const description = document.querySelector('#Add').value;
    const obj = { description, index };
    ToDoArray.push(CreateOb(obj));
    document.querySelector('#Add').value = '';
    document.querySelector('.Activity-list').classList.remove('hidden');
    displayOnScreen(ToDoArray[index - 1], index);
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
  });
};

export default Add;