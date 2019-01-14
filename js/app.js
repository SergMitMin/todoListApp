// Класс таски
 class Task {
     constructor(content) {
         this.content = content;
     }
 }

 // Класс UI: будет обрабатывать UI задачи
 class UI {
    static displayTasks() {
        let StoredTasks = [
            {
                content: 'Task One'
            },
            {
                content: 'Task two'
            }
        ];

        let tasks = StoredTasks;

        tasks.forEach((task) => UI.addTaskToList(task));
    }
    
    static addTaskToList(task){
        let list = document.querySelector('#task-list')

        let row = document.createElement('tr');

        row.innerHTML= `
        <td><a href="#" class="btn btn-success btn-sm success">Completed</a></td>
        <td>${task.content}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row).ushift;
    }

    static crossTask(el) {
        if(el.classList.contains('success')) {
            el.parentElement.parentElement.className = 'deleted';
        }
    }

    static removeTask(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
 }

 // Local storage class

 //Ивент: отображения таски
document.addEventListener('DOMContentLoaded', UI.displayTasks);
 //Ивент: добавление таски
document.addEventListener('submit', (e) => {
    //Prevent default action
    e.preventDefault;
    //Получаем значение инпута
    let mission = document.querySelector('#task').value;

    //validation
    if(document.querySelector('#task').value == '') {
        alert('Введите задачу');
    } else {

    //Создаём экземплр класса таски
    let task = new Task(mission);
    
    //Добавление таски в Ui
    UI.addTaskToList(task);

    // Очистка инпута
    document.querySelector('#task').value = '';
    }

});
 //зачёркивание таски
 document.querySelector('#task-list').addEventListener('click', (e) => {
     //Зачёркивание в юи
     UI.crossTask(e.target);
 });
 //Ивент: удаление таски
 document.querySelector('#task-list').addEventListener('click', (e) => {
    UI.removeTask(e.target);
 });