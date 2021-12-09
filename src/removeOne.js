const removeOne = ({
  element, li, ToDoArray, image, ul,
}) => {
  image.addEventListener('click', () => {
    ToDoArray = ToDoArray.filter((el) => (el !== element));
    element.completed = true;
    ul.removeChild(li);
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
  });
};

exports.removeOne = removeOne;