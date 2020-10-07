import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DropdownComponent from './DropdownComponent';

describe('<DropdownComponent />', () => {
  test('it should mount', () => {
    render(<DropdownComponent />);
    
    const dropdownComponent = screen.getByTestId('DropdownComponent');

    expect(dropdownComponent).toBeInTheDocument();
  });
});