/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../components/HelloWorld.js';

describe('App Component', () => {
  test('should render Hello World text', () => {
    render(<App />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });

  test('should render environment information', () => {
    render(<App />);
    expect(screen.getByText(/Current environment:/)).toBeInTheDocument();
    expect(screen.getByText(/API URL:/)).toBeInTheDocument();
  });
});