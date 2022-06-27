'use strict'

// const input = document.querySelector('.new-task__input');
// const addButton = document.querySelector('.new-task__button');
// const taskList = document.querySelector('.task-list__items');
// const clearButton = document.querySelector('.task-list__clear-button');
// const emptyMark = document.querySelector('.task-list__empty');
// const taskArray =[];
// let counter = 0;
// let deleteTask = [];

// addButton.addEventListener('click', () => {
//     let task = document.createElement('label');
//     task.className = `task-list__item-${counter} tasks`;
//     task.innerHTML = `
//     <input type="checkbox">
//     <span class="tasks__name">
//       ${input.value}
//     </span>
//     <button class="tasks__delete-${counter} task-delete" onclick="deleteHandler(${counter})">delete</button>`;
//     taskList.append(task);

//     deleteTask.push(document.querySelector(`.tasks__delete-${counter}`));

//     input.value = '';
//     counter++;
//     taskArray.push(task);

//     clearButton.classList.remove('hidden');
//     emptyMark.classList.add('hidden');

// });

// function deleteHandler(i) {
//   deleteTask[i].parentElement.remove();
//   // if (!taskList.childNodes.length) {
//   //   clearButton.classList.add('hidden');
//   //   emptyMark.classList.remove('hidden');
//   // }

//   console.log(deleteTask);
// }



// clearButton.addEventListener('click', () => {
//   taskList.innerHTML = '';
//   clearButton.classList.add('hidden');
//   emptyMark.classList.remove('hidden');
// });


function getSum( a,b )
{
   if (a === b) {
     return a;
   } else if (a < b) {
     let sum = 0;
     for (let i = a; i <= b; i++) {
       sum = sum + i;
     }
     return sum;
   } else if (a > b) {
     let sum = 0;
     for (let i = b; i <= a; i++) {
       sum = sum + i;
     }
     return sum;
    }
}

console.log(getSum(-1,2));
