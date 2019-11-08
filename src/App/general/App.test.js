import React from 'react';
import App from './App';

test('load main nav', () => {
  // Arrange
  const wrapper = mount(<App />);
  // Act
  // Assert
  expect(wrapper.exists('.main-nav')).toBe(true);
});
