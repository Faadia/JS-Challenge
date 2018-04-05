const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  setFullname(getName(), getSurname());
});