import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  tasks: { name: string; completed: boolean; isEditing: boolean; selected: boolean }[] = [];
  newTask: string = '';
  showConfirmModal = false;
  selectedCount = 0;

  get hasSelectedTasks(): boolean {
    return this.selectedCount > 0;
  }

  updateSelectedCount() {
    this.selectedCount = this.tasks.filter(task => task.selected).length;
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false, isEditing: false, selected: false });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    const confirmDelete = confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      this.tasks.splice(index, 1);
      this.updateSelectedCount();
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

  openBulkDeleteModal() {
    this.showConfirmModal = true;
  }

  cancelBulkDelete() {
    this.showConfirmModal = false;
  }

  confirmBulkDelete() {
    this.tasks = this.tasks.filter(task => !task.selected);
    this.updateSelectedCount();
    this.showConfirmModal = false;
  }
}