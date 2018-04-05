import setFullname from './components/fullname';
import { getName, getSurname } from './components/user';
const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  setFullname(getName(), getSurname());
});