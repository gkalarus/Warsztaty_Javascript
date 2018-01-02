/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {
    var inputTask = document.querySelector('#taskInput');
    var addTaskButton = document.querySelector('#addTaskButton');
    var taskList = document.querySelector('#taskList');
    var removeButton = document.querySelector('#removeFinishedTasksButton');
    var taskCounter = document.querySelector('#counter');
    var body = document.querySelector('body');
    var counterElement = document.createElement('h3');
    body.insertBefore(counterElement, taskList);
    var counter = 0;

    function newTask () {
        var newLi = document.createElement('li');
        var newHeader = document.createElement('h1');
        var deleteButton = document.createElement('button');
        var completeButton = document.createElement('button');
        var doneTasks = document.querySelectorAll('.done');
        var val = inputTask.value;

        if (val.length > 5 && val.length < 100) {
            taskList.appendChild(newLi);
            newLi.appendChild(newHeader);
            newLi.appendChild(deleteButton);
            newLi.appendChild(completeButton);
            newHeader.innerText = inputTask.value;
            deleteButton.innerText = 'Delete';
            completeButton.innerText = 'Complete';
            inputTask.value = '';
            counterElement.innerText ='Liczba zadań do zrobienia : ' + ++counter;
        }

        completeButton.addEventListener('click', function (event) {
            this.parentElement.classList.toggle('done');
            if (this.parentElement.className === 'done') {
                counterElement.innerText ='Liczba zadań do zrobienia : ' + --counter;
            } else {
                counterElement.innerText ='Liczba zadań do zrobienia : ' + ++counter;
            }
        });

        deleteButton.addEventListener('click', function (event) {
            var targetedLi = this.parentElement;
            targetedLi.parentElement.removeChild(targetedLi);
            counterElement.innerText ='Liczba zadań do zrobienia : ' + --counter;
        });
    }

    addTaskButton.addEventListener('click', newTask);

    removeButton.addEventListener('click', function (event) {
        var targets = document.querySelector('#taskList').querySelectorAll('.done');
        if (targets.length > 0) {
            targets.forEach(function (target) {
                target.parentElement.removeChild(target);
            })
        }
    });
});