const tasksList = document.querySelector('.all-tasks');
let tasks = [...document.querySelectorAll('.task')];
const tasksCountSpan = document.querySelector('.tasks-count span');
const addTask = document.querySelector('.add-task');
const findButton = document.querySelector('.find-task');
const addTaskInput = document.querySelector('.add-task input');
const removeBtn = document.querySelectorAll('.task button');
const removeTask = e => {
  e.target.parentNode.remove();
  tasks = [...document.querySelectorAll('.task')];
  counter();
};

removeBtn.forEach(item => item.addEventListener('click', removeTask));

function counter() {
  tasksCountSpan.textContent = document.querySelectorAll('.task').length;
}

function handleAddTask(e) {
  // tasks = [...document.querySelectorAll('.task')];
  e.preventDefault();
  const value = addTaskInput.value.toLowerCase();
  if (value === '' || value.length < 3) {
    return alert('Wpisz nazwę zadanie o co najmniej 3 znakach');
  }
  const task = document.createElement('li');
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getSeconds();

  task.classList.add('task');
  task.innerHTML = `${value}<button>Usuń</button><span>${hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }, ${time.toLocaleDateString()}</span>`;
  task.children[0].addEventListener('click', removeTask);
  tasksList.appendChild(task);
  tasks = document.querySelectorAll('.task');
  addTaskInput.value = '';
  counter();
}

function handleSearch(e) {
  e.preventDefault();
  let value = e.target.value.toLowerCase();
  let tasksCopy = [...tasks];
  tasksCopy = tasksCopy.filter(task =>
    task.textContent.toLowerCase().includes(value)
  );
  tasksList.textContent = '';
  tasksCopy.forEach(item => tasksList.append(item));
  counter();
}

function handleModal() {}

addTask.addEventListener('submit', handleAddTask);
findButton.addEventListener('input', handleSearch);
counter();
