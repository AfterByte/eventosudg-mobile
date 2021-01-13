/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
//import EventDetails from '../src/views/EventDetails';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('Mock functions', () => {
  it('can create mock functions', () => {
    const fn = jest.fn();
    fn.mockReturnValueOnce(5);
    
    const result = fn(10);
    expect(result).toBe(5);               // TRUE
    expect(fn).toHaveBeenCalled();        // TRUE
    expect(fn).toHaveBeenCalledWith(10);  // TRUE
  });
  it('renders correctly', () => {
    renderer.create(<App />);
  });
});


