import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
   state: () => ({
    todoList: [
        {
            id: 1,
            item: 'Make a to-do list in vue #1',
            date: new Date().toLocaleDateString(),
        },
        {
            id: 2,
            item: 'Make a to-do list in vue #2',
            date: new Date().toLocaleDateString(),
        }
    ],
    id: 3,
   }),
   actions: {
    addTodo(item) {
        this.todoList.push({
            item,
            id: this.id++,
            completed: false,
            important: false,
            veryimportant: false,
            date: new Date().toLocaleDateString()
        })
    },
    deleteTodo(index) {
        this.todoList.splice(index, 1)
    },
    toggleCompeted(idToFind) {
        const todo = this.todoList.find((obj) => obj.id === idToFind);
        if(todo) {
            todo.completed = !todo.completed;
        }
    }
   } 
})