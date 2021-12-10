jest.mock('./index.js');
const { edit } = require('./editDes.js');

test('should Add new item to the toDo list', () => {
  document.body.innerHTML = '<main>'
    + '<div class="container">'
    + '<input type="text" id="whatToDo" name="Title" placeholder="To-do list" />'
    + '<input type="text" id="Add" name="Add" placeholder="Add to your list..."/>'
    + '<form class="Activity-list">'
    + ' <ul class="form_">'
    + '<li class="toDo" style="padding: 9px;"><input type="checkbox" name="check">'
    + '<label for="check" style="margin-left: 1rem;">'
    + '<input type="text">'
    + '</label>'
    + '<br>'
    + '</li>'
    + '</ul>'
    + '</form>'
    + '<button id="removeAll" type = "reset">Clear all completed</button>'
    + '</div>'
    + '</main>';
  const ToDoArray = [];
  const input = document.querySelector('.form_ li label input');
  const index = 1;
  const completed = false;
  const description = 'This is wrong';
  const element = { description, index, completed };
  const library = { input, element, ToDoArray };
  edit(library);
  input.value = 'This  is true';
  const event = new Event('change');
  document.querySelector('.form_ li label input').dispatchEvent(event);
  expect(element.description).toBe('This  is true');
});