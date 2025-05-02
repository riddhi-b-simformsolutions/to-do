import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  tasks: { name: string; completed: boolean; isEditing: boolean }[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false, isEditing: false });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    const confirmDelete = confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      this.tasks.splice(index, 1);
    }
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  editTask(index: number) {
    this.tasks[index].isEditing = true;
  }

  saveTask(index: number) {
    this.tasks[index].isEditing = false;
  }
}