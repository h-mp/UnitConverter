/**
 * Tests for the ConverterSystem class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConverterSystem } from '../src/ConverterSystem'

const converterSystem = new ConverterSystem()

// Test cases for temperature conversion

// Test case to check input validation in temperature conversion
test('Check input validation in temperature conversion', () => {
  expect(() => converterSystem.convertTemperature('f', 'celsius', 'string')).toThrowError('Input must be a number')

  expect(() => converterSystem.convertTemperature('f', 'celsius', NaN)).toThrowError('Input must be a number')

  expect(() => converterSystem.convertTemperature(2, 'celsius', 3)).toThrowError('Input must be a string')

  expect(() => converterSystem.convertTemperature('f', [], 3)).toThrowError('Input must be a string')
})

// Test cases for length conversion

// Test case to check input validation in length conversion
test('Check input validation in length conversion', () => {
  expect(() => converterSystem.convertVolume('m', 'ft', -10)).toThrowError('Number must be positive')

  expect(() => converterSystem.convertLength('ft', 'm', 'string')).toThrowError('Input must be a number')

  expect(() => converterSystem.convertLength('ft', 'm', NaN)).toThrowError('Input must be a number')

  expect(() => converterSystem.convertLength(2, 'inches', 3)).toThrowError('Input must be a string')

  expect(() => converterSystem.convertLength('m', [], 3)).toThrowError('Input must be a string')
})

// Test cases for weight conversion

// Test case to check input validation in weight conversion
test('Check input validation in weight conversion', () => {
  expect(() => converterSystem.convertVolume('lb', 'kg', -10)).toThrowError('Number must be positive')

  expect(() => converterSystem.convertWeight('kg', 'pounds', 'string')).toThrowError('Input must be a number')

  expect(() => converterSystem.convertWeight('kg', 'lb', NaN)).toThrowError('Input must be a number')

  expect(() => converterSystem.convertWeight(2, 'g', 3)).toThrowError('Input must be a string')

  expect(() => converterSystem.convertWeight('oz', [], 3)).toThrowError('Input must be a string')
})

// Test cases for volume conversion

// Test case to check input validation in volume conversion
test('Check input validation in volume conversion', () => {
  expect(() => converterSystem.convertVolume('l', 'gal', -10)).toThrowError('Number must be positive')

  expect(() => converterSystem.convertVolume('l', 'gal', 'string')).toThrowError('Input must be a number')

  expect(() => converterSystem.convertVolume('dl', 'cups', NaN)).toThrowError('Input must be a number')

  expect(() => converterSystem.convertVolume(2, 'l', 3)).toThrowError('Input must be a string')

  expect(() => converterSystem.convertVolume('pints', [], 3)).toThrowError('Input must be a string')
})