import 'lodash';
import './style.css';
import elementChanges from './check.js';
import icon from './delete.png';
import removeAll from './remove.js';

let ToDoArray = JSON.parse(localStorage.getItem('ToDoArray') || '[]');
let title = JSON.parse(localStorage.getItem('title'));
if (!ToDoArray.length) {
  document.querySelector('.Activity-list').classList.add('hidden');
} else {
  document.querySelector('.Activity-list').classList.remove('hidden');
}
document.querySelector('#whatToDo').value = title;

function CreateOb({ description, index }) {
  this.description = description;
  this.completed = false;
  this.index = index;
}

function displayOnScreen(element) {
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
  input.addEventListener('change', () => {
    element.description = input.value;
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
  });
  input.value = element.description;

  label.style.marginLeft = '1rem';
  const obj = {
    checkbox, input, element, li, ToDoArray,
  };
  elementChanges(obj);
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(br);
  label.appendChild(input);
  label.appendChild(image);
  ul.appendChild(li);
  image.addEventListener('click', () => {
    ToDoArray = ToDoArray.filter((el) => el !== element);
    ul.removeChild(li);
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
  });
}

if (ToDoArray) {
  for (let i = 0; i < ToDoArray.length; i += 1) {
    ToDoArray[i].index = i + 1;
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
    displayOnScreen(ToDoArray[i]);
  }
}
document.querySelector('#Add').addEventListener('change', () => {
  ToDoArray = JSON.parse(localStorage.getItem('ToDoArray') || '[]');
  const index = ToDoArray.length + 1;
  const description = document.querySelector('#Add').value;
  const obj = { description, index };
  ToDoArray.push(new CreateOb(obj));
  document.querySelector('#Add').value = '';
  document.querySelector('.Activity-list').classList.remove('hidden');
  displayOnScreen(ToDoArray[index - 1], index);
  localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
});
document.querySelector('#whatToDo').addEventListener('change', () => {
  title = document.querySelector('#whatToDo').value;
  localStorage.setItem('title', JSON.stringify(title));
});

removeAll(displayOnScreen, ToDoArray);