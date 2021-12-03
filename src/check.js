const elementChanges = ({
  checkbox, input, element, li, ToDoArray,
}) => {
  checkbox.addEventListener('click', () => {
    if (!element.completed) {
      input.style.webkitTextDecorationLine = 'line-through';
      input.style.textDecorationLine = 'line-through';
      element.completed = true;
      input.style.color = '#616275';
      li.classList.add('remove');
    } else {
      input.style.webkitTextDecorationLine = 'none';
      input.style.textDecorationLine = 'none';
      element.completed = false;
      input.style.color = 'black';
      li.classList.remove('remove');
    }
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
  });
};

export default elementChanges;
