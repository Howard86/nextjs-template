import { render, screen } from '@testing-library/react';

import GlobalProviders from './GlobalProviders';

describe('global providers', () => {
  it('should render children', () => {
    expect.hasAssertions();
    render(
      <GlobalProviders>
        <div data-testid="children" />
      </GlobalProviders>,
    );

    expect(screen.getByTestId('children')).toBeInTheDocument();
  });
});
