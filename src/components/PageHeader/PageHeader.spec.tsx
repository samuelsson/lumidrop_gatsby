import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PageHeader from './PageHeader';

describe('<PageHeader />', (): void => {
  afterEach(cleanup);

  it('renders the title', (): void => {
    const title = 'Header';
    const { getByText } = render(<PageHeader />);
    expect(getByText(title).tagName).toBeTruthy();
  });

  it('matches snapshot', (): void => {
    const { asFragment } = render(<PageHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
