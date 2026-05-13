import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
      imports: [FormsModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addTask', () => {
    it('should add a task with selected=false', () => {
      component.newTask = 'Test task';
      component.addTask();
      expect(component.tasks.length).toBe(1);
      expect(component.tasks[0].selected).toBe(false);
    });
  });

  describe('hasSelectedTasks', () => {
    it('should return false when no tasks are selected', () => {
      component.tasks = [
        { name: 'Task 1', completed: false, isEditing: false, selected: false },
      ];
      expect(component.hasSelectedTasks).toBe(false);
    });

    it('should return true when at least one task is selected', () => {
      component.tasks = [
        { name: 'Task 1', completed: false, isEditing: false, selected: true },
        { name: 'Task 2', completed: false, isEditing: false, selected: false },
      ];
      expect(component.hasSelectedTasks).toBe(true);
    });
  });

  describe('openBulkDeleteModal', () => {
    it('should show the confirmation modal', () => {
      component.openBulkDeleteModal();
      expect(component.showConfirmModal).toBe(true);
    });
  });

  describe('cancelBulkDelete', () => {
    it('should hide the confirmation modal without deleting', () => {
      component.tasks = [
        { name: 'Task 1', completed: false, isEditing: false, selected: true },
      ];
      component.showConfirmModal = true;
      component.cancelBulkDelete();
      expect(component.showConfirmModal).toBe(false);
      expect(component.tasks.length).toBe(1);
    });
  });

  describe('confirmBulkDelete', () => {
    it('should delete only selected tasks and close the modal', () => {
      component.tasks = [
        { name: 'Task 1', completed: false, isEditing: false, selected: true },
        { name: 'Task 2', completed: false, isEditing: false, selected: false },
        { name: 'Task 3', completed: false, isEditing: false, selected: true },
      ];
      component.showConfirmModal = true;
      component.confirmBulkDelete();
      expect(component.tasks.length).toBe(1);
      expect(component.tasks[0].name).toBe('Task 2');
      expect(component.showConfirmModal).toBe(false);
    });

    it('should not delete tasks that are not selected', () => {
      component.tasks = [
        { name: 'Task 1', completed: false, isEditing: false, selected: false },
        { name: 'Task 2', completed: true, isEditing: false, selected: false },
      ];
      component.showConfirmModal = true;
      component.confirmBulkDelete();
      expect(component.tasks.length).toBe(2);
    });
  });
});
