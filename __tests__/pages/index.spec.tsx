import React from 'react';

import { render, screen } from 'test-utils';

import Home from '@/pages/index';

describe('home', () => {
  it('renders Home', () => {
    expect.hasAssertions();
    render(<Home />);

    expect(document.title).toBe('Create Next App');
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /welcome to next\.js!/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Vercel Logo');
  });
});
