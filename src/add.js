export default function Add({ ToDoArray, CreateOb, displayOnScreen }) {
  document.querySelector('#Add').addEventListener('change', () => {
    ToDoArray = JSON.parse(localStorage.getItem('ToDoArray') || '[]');
    const index = ToDoArray.length + 1;
    const description = document.querySelector('#Add').value;
    const obj = { description, index };
    ToDoArray.push(new CreateOb(obj));
    document.querySelector('#Add').value = '';
    document.querySelector('.Activity-list').classList.remove('hidden');
    displayOnScreen(ToDoArray[index - 1], index);
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
  });
}
