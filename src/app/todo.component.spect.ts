import { render, screen } from '@testing-library/angular';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  it('should render the title', async () => {
    await render(TodoComponent, {
      componentProperties: { title: 'My ToDo' },
    });

    expect(screen.getByText('My ToDo')).toBeTruthy();
  });
});
