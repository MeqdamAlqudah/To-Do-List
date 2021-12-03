import 'lodash';
import './style.css';
import elementChanges from './check.js';
import icon from './delete.png';
import Add from './add.js';
import edit from './editDes.js';
import removeAll from './remove.js';

let ToDoArray = JSON.parse(localStorage.getItem('ToDoArray') || '[]');
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
  ToDoArray = JSON.parse(localStorage.getItem('ToDoArray') || '[]');
  image.addEventListener('click', () => {
    ToDoArray = ToDoArray.filter((el) => (el !== element));
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
    console.log('After removing one element', ToDoArray, element);
    ul.removeChild(li);
    console.log(localStorage);
  });
};

if (ToDoArray) {
  for (let i = 0; i < ToDoArray.length; i += 1) {
    ToDoArray[i].index = i + 1;
    displayOnScreen(ToDoArray[i]);
  }
}
const objects = { ToDoArray, CreateOb, displayOnScreen };
Add(objects);
document.querySelector('#whatToDo').addEventListener('change', () => {
  title = document.querySelector('#whatToDo').value;
});
console.log('befor access the remove function', ToDoArray);
removeAll(displayOnScreen, ToDoArray);