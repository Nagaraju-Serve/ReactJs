import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RoutingComponent from './RoutingComponent';

describe('<RoutingComponent />', () => {
  test('it should mount', () => {
    render(<RoutingComponent />);
    
    const routingComponent = screen.getByTestId('RoutingComponent');

    expect(routingComponent).toBeInTheDocument();
  });
});