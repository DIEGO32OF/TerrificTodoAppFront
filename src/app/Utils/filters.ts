import { Todo } from '../Interface/todo-interface';

export class TodoFilters {
    /**
     * Filtra una lista de tareas por su estado.
     * @param todos - Lista de tareas.
     * @param filter - Tipo de filtro ('all' | 'completed' | 'pending').
     * @returns Lista filtrada de tareas.
     */
    static filterByStatus(todos: Todo[], filter: 'all' | 'completed' | 'pending'): Todo[] {
      switch (filter) {
        case 'completed':
          return todos.filter(todo => todo.completed);
        case 'pending':
          return todos.filter(todo => !todo.completed);
        default:
          return todos;
      }
    }
  
    /**
     * Ordena una lista de tareas por un campo.
     * @param todos - Lista de tareas.
     * @param field - Campo por el que ordenar ('date' | 'status').
     * @returns Lista ordenada de tareas.
     */
    static sortTodos(todos: Todo[], field: 'date' | 'status'): Todo[] {
      if (field === 'date') {
        return [...todos].sort((a, b) => new Date(a.id).getTime() - new Date(b.id).getTime());
      } else if (field === 'status') {
        return [...todos].sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? -1 : 1));
      }
      return todos;
    }
  }
  