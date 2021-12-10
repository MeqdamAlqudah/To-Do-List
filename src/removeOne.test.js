jest.mock('./index.js');
const { removeOne } = require('./removeOne.js');

test('array containing elements should be empty', () => {
  document.body.innerHTML = '<main>'
    + '<div class="container">'
    + '<input type="text" id="whatToDo" name="Title" placeholder="To-do list" />'
    + '<input type="text" id="Add" name="Add" placeholder="Add to your list..."/>'
    + '<form class="Activity-list">'
    + ' <ul class="form_">'
    + '<li class="toDo" style="padding: 9px;"><input type="checkbox" name="check">'
    + '<label for="check" style="margin-left: 1rem;">'
    + '<input type="text">'
    + '<img src="/To-Do-List/4cf85250644be08b0e98.png" style="width: 1rem; float: right; margin-top: 7px;">'
    + '</label>'
    + '<br>'
    + '</li>'
    + '</ul>'
    + '</form>'
    + '<button id="removeAll" type = "reset">Clear all completed</button>'
    + '</div>'
    + '</main>';
  const ToDoArray = [];
  const index = 1;
  const completed = false;
  const description = 'This is wrong';
  const image = document.querySelector('.form_ li label img');
  const li = document.querySelector('.form_ li');
  const ul = document.querySelector('.form_');
  const element = { description, index, completed };
  ToDoArray.push(element);
  const library = {
    element, li, ToDoArray, image, ul,
  };
  removeOne(library);
  const event = new Event('click');
  image.dispatchEvent(event);
  expect(document.querySelector('.form_').childNodes.length).toBe(0);
});