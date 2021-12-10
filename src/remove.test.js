jest.mock('./index.js');

const { Add } = require('./add.js');
const { objects } = require('./index.js');
const { removeAll } = require('./remove.js');

describe('remove All completed element', () => {
  test('should remove All completed items from the screen', () => {
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
    expect(document.querySelector('.Activity-list').classList).toContain('hidden');
  });

  test('case list is empty: class list of activity-list should contain hidden', () => {
    document.body.innerHTML = '<main>'
      + '<div class="container">'
      + '<input type="text" id="whatToDo" name="Title" placeholder="To-do list" />'
      + '<input type="text" id="Add" name="Add" placeholder="Add to your list..."/>'
      + '<form class="Activity-list">'
      + ' <ul class="form_">'
      + '</ul>'
      + '</form>'
      + '<button id="removeAll" type = "reset">Clear all completed</button>'
      + '</div>'
      + '</main>';
    Add(objects);
    document.querySelector('#Add').value = 'hi';
    const event = new Event('change');
    document.querySelector('#Add').dispatchEvent(event);
    document.querySelector('#Add').value = 'first';
    const event2 = new Event('change');
    document.querySelector('#Add').dispatchEvent(event2);
    const { displayOnScreen, ToDoArray } = objects;
    ToDoArray[0].completed = true;
    removeAll(displayOnScreen, ToDoArray);
    const eventTwo = new Event('click');
    document.querySelector('#removeAll').dispatchEvent(eventTwo);
    expect(document.querySelector('.Activity-list').classList.contains('hidden')).toBe(false);
  });
});