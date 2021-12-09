import icon from './delete.png';

require('lodash');

require('./style.css');
const { removeOne } = require('./removeOne.js');
const { edit } = require('./editDes.js');
const { elementChanges } = require('./check.js');
const { removeAll } = require('./remove.js');

const { Add } = require('./add.js');

const ToDoArray = JSON.parse(localStorage.getItem('ToDoArray') || '[]');
let title = JSON.parse(localStorage.getItem('title'));
if (!ToDoArray.length) {
  document.querySelector('.Activity-list').classList.add('hidden');
} else {
  document.querySelector('.Activity-list').classList.remove('hidden');
}
document.querySelector('#whatToDo').value = title;

const CreateOb = ({ description, index }) => ({ description, index, completed: false });

const displayOnScreen = (element) => {
  const ul = document.querySelector('.form_');
  const li = document.createElement('li');
  li.classList.add('toDo');
  const checkbox = document.createElement('input');
  const br = document.createElement('br');
  const image = document.createElement('img');
  image.setAttribute('src', icon);
  image.style.width = '1rem';
  image.style.float = 'right';
  image.style.marginTop = '7px';
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'check');
  li.style.padding = '9px';
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  const label = document.createElement('label');
  label.setAttribute('for', 'check');
  const library = { input, element, ToDoArray };
  edit(library);
  label.style.marginLeft = '1rem';
  if (element.completed && (ToDoArray.includes(element))) {
    checkbox.checked = true;
    input.style.webkitfTextDecorationLine = 'line-through';
    input.style.textDecorationLine = 'line-through';
    input.style.color = '#616275';
  }
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(br);
  label.appendChild(input);
  label.appendChild(image);
  ul.appendChild(li);
  const obj = {
    checkbox, input, element, li, ToDoArray, image, ul,
  };
  const objTwo = {
    element, li, ToDoArray, image, ul,
  };
  removeOne(objTwo);
  elementChanges(obj);
};
if (ToDoArray) {
  for (let i = 0; i < ToDoArray.length; i += 1) {
    ToDoArray[i].index = i + 1;
    displayOnScreen(ToDoArray[i]);
  }
}
const objects = { CreateOb, displayOnScreen, ToDoArray };
Add(objects);
document.querySelector('#whatToDo').addEventListener('change', () => {
  title = document.querySelector('#whatToDo').value;
  localStorage.setItem('title', JSON.stringify(title));
});

removeAll(displayOnScreen, ToDoArray);