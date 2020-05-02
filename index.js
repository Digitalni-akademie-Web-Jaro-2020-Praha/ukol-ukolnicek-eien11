'use strict';

let tasks = [];

const updateTasks = () => {
  let tasksElm = document.querySelector('.todo__tasks');
  tasksElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    tasksElm.innerHTML += `<div class="task">${tasks[i]}</div>`
  }
}

const addTask = () => {
  const inputElm = document.querySelector('#new-task');
  if (inputElm.value) {
    tasks.push(inputElm.value);
    updateTasks();
    inputElm.value = '';
  }
}

document.querySelector('.btn-add').addEventListener('click', addTask);

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    addTask();
  }
})
