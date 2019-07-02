const allTasks = document.querySelectorAll('.allTasks');

const removeTask = e => {
  console.log(e.target.parentNode.remove());
};

document
  .querySelectorAll('li button')
  .forEach(item => item.addEventListener('click', removeTask));
