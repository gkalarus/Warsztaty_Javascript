/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function () {
    var inputTask = document.querySelector('#taskInput');
    var addTaskButton = document.querySelector('#addTaskButton');
    var taskList = document.querySelector('#taskList');
    var removeButton = document.querySelector('#removeFinishedTasksButton');
    var counter = 0;



    function newTask () {
        var newLi = document.createElement('li');
        var newHeader = document.createElement('h1');
        var newButton1 = document.createElement('button');
        var newButton2 = document.createElement('button');
        var doneTasks = document.querySelectorAll('.done');
        var val = inputTask.value;

        if (val.length > 5 && val.length < 100) {
            taskList.appendChild(newLi);
            newLi.appendChild(newHeader);
            newLi.appendChild(newButton1);
            newLi.appendChild(newButton2);
            newHeader.innerText = inputTask.value;
            newButton1.innerText = 'Delete';
            newButton2.innerText = 'Complete';
            inputTask.value = '';
        }


        newButton2.addEventListener('click', function (event) {
            newLi.classList.toggle('done');
        });

        newButton1.addEventListener('click', function (event) {
            var targetedLi = this.parentElement;
            targetedLi.parentElement.removeChild(targetedLi);
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










