import { render, screen } from '@testing-library/react';
import Card from '../src/component/Card';

describe('Card Component', () => {
  const mockPost = {
    id: 101,
    userId: 7,
    title: 'Test Post Title',
    body: 'This is a test post body for the Card component.',
  };

  it('renders post title, body, ID, and user ID', () => {
    render(<Card post={mockPost} />);

    // Title
    expect(screen.getByText(mockPost.title)).toBeInTheDocument();

    // Body
    expect(screen.getByText(mockPost.body)).toBeInTheDocument();

    expect(screen.getByText((content, element) => {
        return element?.textContent === `Post ID: ${mockPost.id}`;
      })).toBeInTheDocument();
      
      expect(screen.getByText((content, element) => {
        return element?.textContent === `User ID: ${mockPost.userId}`;
      })).toBeInTheDocument();
  });
});
