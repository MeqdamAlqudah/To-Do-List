const edit = ({ input, element, ToDoArray }) => {
  input.addEventListener('change', () => {
    element.description = input.value;
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
  });
  input.value = element.description;
};

export default edit;