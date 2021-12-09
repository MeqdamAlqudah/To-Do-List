const { edit } = require('../editDes.js');

const ToDoArray = [];
const CreateOb = ({ description, index }) => ({ description, index, completed: false });

const displayOnScreen = (element) => {
  const ul = document.querySelector('.form_');
  const li = document.createElement('li');
  li.classList.add('toDo');
  const checkbox = document.createElement('input');
  const br = document.createElement('br');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'check');
  li.style.padding = '9px';
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  const label = document.createElement('label');
  label.setAttribute('for', 'check');
  const library = { input, element, ToDoArray };
  edit(library);
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(br);
  ul.appendChild(li);
};

const objects = { CreateOb, displayOnScreen, ToDoArray };
exports.objects = objects;
