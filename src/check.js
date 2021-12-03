const elementChanges = ({
  checkbox, input, element, li,
}) => {
  const ToDoArray = JSON.parse(localStorage.getItem('ToDoArray') || '[]');
  console.log('elementChanges', element);
  if (element.completed) {
    checkbox.checked = true;
    input.style.webkitTextDecorationLine = 'line-through';
    input.style.textDecorationLine = 'line-through';
    input.style.color = '#616275';
    li.classList.add('remove');
  }
  checkbox.addEventListener('click', () => {
    if (!element.completed) {
      input.style.webkitTextDecorationLine = 'line-through';
      input.style.textDecorationLine = 'line-through';
      element.completed = true;
      localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
      input.style.color = '#616275';
      li.classList.add('remove');
    } else {
      input.style.webkitTextDecorationLine = 'none';
      input.style.textDecorationLine = 'none';
      element.completed = false;
      localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
      input.style.color = 'black';
      li.classList.remove('remove');
    }
    console.log('After check', localStorage, ToDoArray);
  });
};

export default elementChanges;
