const edit = ({ input, element }) => {
  const ToDoArray = JSON.parse(localStorage.getItem('ToDoArray') || '[]');
  input.addEventListener('change', () => {
    element.description = input.value;
  });
  input.value = element.description;
  localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
};

export default edit;