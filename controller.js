"use strict";

function TodoController() {
    const vm = this;
    vm.total = 0;
    vm.toDoTasks = [
        {
            task: "Make Kefir.",
            completed: true
        },
        {
            task: "Read Books.",
            completed: false
        },
    ];
    vm.addTask = () => {
      vm.toDoTasks.push({
        task: vm.newTask.name,
        completed: false,
      });
      vm.newTask = {};
    }
    vm.clearInput = {};
    vm.removeTask = (index, task) => {
      vm.toDoTasks.splice(index, 1);
    };
    vm.completeTask = (index) => {
      vm.toDoTasks[index].completed = true;
    };
};


angular
  .module("toDoApp")
  .controller("TodoController", TodoController); 