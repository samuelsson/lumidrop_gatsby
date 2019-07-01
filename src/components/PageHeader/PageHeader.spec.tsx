import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PageHeader from './PageHeader';

describe('<PageHeader />', (): void => {
  beforeEach(cleanup);

  it('renders the title', (): void => {
    const title = 'Header';
    const { getByText } = render(<PageHeader />);
    expect(getByText(title).tagName).toBeTruthy();
  });
});
