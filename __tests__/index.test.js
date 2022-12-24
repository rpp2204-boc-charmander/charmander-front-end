import { render, screen } from '@testing-library/react';
import Exercise from '../pages/exercise';
import Home from '../pages/index';

import '@testing-library/jest-dom';

describe('Exercise', () => {
  it('renders an exercise heading', () => {
    render(<Exercise />);

    const heading = screen.getByRole('heading', {
      name: /exercise/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders an exercise item', () => {
    render(<Exercise />);

    const item = screen.getByRole('heading', {
      name: /pull ups/i,
    });

    expect(item).toBeInTheDocument();
  });
});

it('adding 1 + 1 returns 2', () => {
  const a = 1 + 1;
  expect(a).toBe(2);
});
