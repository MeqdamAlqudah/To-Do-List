const edit = ({ input, element, ToDoArray }) => {
  input.addEventListener('change', () => {
    element.description = input.value;
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
  });
  input.value = element.description;
};

exports.edit = edit;
