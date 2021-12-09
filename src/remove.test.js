jest.mock('./index.js');

const { Add } = require('./add.js');
const { objects } = require('./index.js');
const { removeAll } = require('./remove.js');

test('should remove All completed items', () => {
  document.body.innerHTML = '<main>'
    + '<div class="container">'
    + '<input type="text" id="whatToDo" name="Title" placeholder="To-do list" />'
    + '<input type="text" id="Add" name="Add" placeholder="Add to your list..."/>'
    + '<form class="Activity-list">'
    + ' <ul class="form_"></ul>'
    + '</form>'
    + '<button id="removeAll" type = "reset">Clear all completed</button>'
    + '</div>'
    + '</main>';
  Add(objects);
  document.querySelector('#Add').value = 'hi';
  const event = new Event('change');
  document.querySelector('#Add').dispatchEvent(event);

  const { displayOnScreen, ToDoArray } = objects;
  ToDoArray.forEach((element) => {
    element.completed = true;
  });
  removeAll(displayOnScreen, ToDoArray);
  const eventTwo = new Event('click');
  document.querySelector('#removeAll').dispatchEvent(eventTwo);
  const list = document.querySelector('.form_');
  expect(list.childNodes).toHaveLength(0);
});