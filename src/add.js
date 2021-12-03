const Add = ({ CreateOb, displayOnScreen }) => {
  const ToDoArray = JSON.parse(localStorage.getItem('ToDoArray') || '[]');
  document.querySelector('#Add').addEventListener('change', () => {
    const index = ToDoArray.length + 1;
    const description = document.querySelector('#Add').value;
    const obj = { description, index };
    ToDoArray.push(CreateOb(obj));
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
    document.querySelector('#Add').value = '';
    document.querySelector('.Activity-list').classList.remove('hidden');
    displayOnScreen(ToDoArray[index - 1], index);
  });
};

export default Add;