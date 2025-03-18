/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../../components/HelloWorld';

describe('HelloWorld Component', () => {
  test('should render Hello World text', () => {
    render(<HelloWorld />);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });

  test('should render environment information', () => {
    render(<HelloWorld />);
    expect(screen.getByText(/Environnement/i)).toBeInTheDocument();
  });

  test('should render content within a container', () => {
    const { container } = render(<HelloWorld />);
    expect(container.querySelector('.container')).toBeInTheDocument();
  });

  test('should have a heading', () => {
    render(<HelloWorld />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});