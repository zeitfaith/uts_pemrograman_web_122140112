import { renderHook, act } from '@testing-library/react';
import useTodos from '../useTodos';

describe('useTodos Hook', () => {
  it('should add a new todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.setNewTodoTitle('Test Todo');
      result.current.handleAddTodo();
    });

    expect(result.current.todoList.length).toBe(1);
    expect(result.current.todoList[0].title).toBe('Test Todo');
    expect(result.current.todoList[0].completed).toBe(false);
  });

  it('should delete a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.setNewTodoTitle('To Delete');
      result.current.handleAddTodo();
      result.current.handleDelete(result.current.todoList[0].id);
    });

    expect(result.current.todoList.length).toBe(0);
  });

  it('should toggle completed', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.setNewTodoTitle('Toggle Me');
      result.current.handleAddTodo();
      const id = result.current.todoList[0].id;
      result.current.handleToggle(id);
    });

    expect(result.current.todoList[0].completed).toBe(true);
  });
});
