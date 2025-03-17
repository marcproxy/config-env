/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../components/HelloWorld';

describe('App Component', () => {
  test('should render Hello World text', () => {
    render(<App />);
    const headingElement = screen.getByText(/Hello World!/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('should render environment information', () => {
    render(<App />);
    const environmentElement = screen.getByText(/Current environment/i);
    expect(environmentElement).toBeInTheDocument();
  });
});