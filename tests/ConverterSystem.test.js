/**
 * Tests for the ConverterSystem class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConverterSystem } from '../src/ConverterSystem'

const converterSystem = new ConverterSystem()

// Test cases for temperature conversion

// Test case to check temperature conversion
test('Check temperature conversion', () => {
  expect(converterSystem.convertTemperature('fahrenheit', 'celsius', 32)).toBe(0)

  expect(converterSystem.convertTemperature('Celsius', 'Fahrenheit', 0)).toBe(32)

  expect(converterSystem.convertTemperature('f', 'c', -40)).toBe(-40)

  expect(converterSystem.convertTemperature('C', 'F', -40)).toBe(-40)

  expect(() => converterSystem.convertTemperature('kelvin', 'celsius', 21)).toThrowError('Conversion not available')
})

// Test case to check input validation in temperature conversion
test('Check input validation in temperature conversion', () => {
  expect(() => converterSystem.convertTemperature('f', 'celsius', 'string')).toThrowError('Input must be a number')

  expect(() => converterSystem.convertTemperature('f', 'celsius', NaN)).toThrowError('Input must be a number')

  expect(() => converterSystem.convertTemperature(2, 'celsius', 3)).toThrowError('Input must be a string')

  expect(() => converterSystem.convertTemperature('f', [], 3)).toThrowError('Input must be a string')
})

// Test cases for length conversion

// Test case to check length conversion
test('Check length conversion', () => {
  expect(converterSystem.convertLength('meters', 'feet', 2)).toBeCloseTo(6.561, 2)

  expect(converterSystem.convertLength('ft', 'm', 23)).toBeCloseTo(7.010, 2)

  expect(converterSystem.convertLength('cm', 'inches', 70)).toBeCloseTo(27.559, 2)

  expect(converterSystem.convertLength('in', 'centimeters', 9)).toBeCloseTo(22.86, 2)

  expect(() => converterSystem.convertLength('m', 'in', 21)).toThrowError('Conversion not available')
})

// Test case to check input validation in length conversion
test('Check input validation in length conversion', () => {
  expect(() => converterSystem.convertVolume('m', 'ft', -10)).toThrowError('Number must be positive')

  expect(() => converterSystem.convertLength('ft', 'm', 'string')).toThrowError('Input must be a number')

  expect(() => converterSystem.convertLength('ft', 'm', NaN)).toThrowError('Input must be a number')

  expect(() => converterSystem.convertLength(2, 'inches', 3)).toThrowError('Input must be a string')

  expect(() => converterSystem.convertLength('m', [], 3)).toThrowError('Input must be a string')
})

// Test cases for weight conversion

// Test case to check weight conversion
test('Check weight conversion', () => {
  expect(converterSystem.convertWeight('kg', 'pounds', 2)).toBeCloseTo(4.409, 2)

  expect(converterSystem.convertWeight('lb', 'kilograms', 3)).toBeCloseTo(1.361, 2)

  expect(converterSystem.convertWeight('oz', 'grams', 28)).toBeCloseTo(793.786, 2)

  expect(converterSystem.convertWeight('g', 'ounces', 56)).toBeCloseTo(1.975, 2)

  expect(() => converterSystem.convertWeight('kg', 'oz', 12)).toThrowError('Conversion not available')
})

// Test case to check input validation in weight conversion
test('Check input validation in weight conversion', () => {
  expect(() => converterSystem.convertVolume('lb', 'kg', -10)).toThrowError('Number must be positive')

  expect(() => converterSystem.convertWeight('kg', 'pounds', 'string')).toThrowError('Input must be a number')

  expect(() => converterSystem.convertWeight('kg', 'lb', NaN)).toThrowError('Input must be a number')

  expect(() => converterSystem.convertWeight(2, 'g', 3)).toThrowError('Input must be a string')

  expect(() => converterSystem.convertWeight('oz', [], 3)).toThrowError('Input must be a string')
})

// Test cases for volume conversion

// Test case to check volume conversion
test('Check volume conversion', () => {
  expect(converterSystem.convertVolume('l', 'gallons', 2)).toBeCloseTo(0.528, 2)

  expect(converterSystem.convertVolume('gal', 'liters', 3)).toBeCloseTo(11.356, 2)

  expect(converterSystem.convertVolume('l', 'pints', 2)).toBeCloseTo(4.23, 2)

  expect(converterSystem.convertVolume('pt', 'liters', 3)).toBeCloseTo(1.42, 2)

  expect(converterSystem.convertVolume('dl', 'cups', 28)).toBeCloseTo(11.835, 2)

  expect(converterSystem.convertVolume('c', 'deciliters', 2)).toBeCloseTo(4.73, 2)

  expect(() => converterSystem.convertVolume('dl', 'l', 12)).toThrowError('Conversion not available')
})

// Test case to check input validation in volume conversion
test('Check input validation in volume conversion', () => {
  expect(() => converterSystem.convertVolume('l', 'gal', -10)).toThrowError('Number must be positive')

  expect(() => converterSystem.convertVolume('l', 'gal', 'string')).toThrowError('Input must be a number')

  expect(() => converterSystem.convertVolume('dl', 'cups', NaN)).toThrowError('Input must be a number')

  expect(() => converterSystem.convertVolume(2, 'l', 3)).toThrowError('Input must be a string')

  expect(() => converterSystem.convertVolume('pints', [], 3)).toThrowError('Input must be a string')
})

// Test cases for multiple value conversion

// Test case to check multiple temperature value conversion
test('Check multiple temperature value conversion', () => {
  const result = converterSystem.convertMultipleValues('temperature', 'f', 'c', [32, 0, -40])
  const expected = [0, -17.778, -40]
  result.forEach((value, index) => {
    expect(value).toBeCloseTo(expected[index], 2)
  })
})

// Test case to check multiple length value conversion
test('Check multiple length value conversion', () => {
  const result = converterSystem.convertMultipleValues('length', 'm', 'ft', [2, 23, 28])
  const expected = [6.561, 75.459, 91.863]
  result.forEach((value, index) => {
    expect(value).toBeCloseTo(expected[index], 2)
  })
})

// Test case to check multiple weight value conversion
test('Check multiple weight value conversion', () => {
  const result = converterSystem.convertMultipleValues('weight', 'kg', 'pounds', [2, 3, 28])
  const expected = [4.409, 6.614, 61.729]
  result.forEach((value, index) => {
    expect(value).toBeCloseTo(expected[index], 2)
  })
})

// Test case to check multiple volume value conversion
test('Check multiple volume value conversion', () => {
  const result = converterSystem.convertMultipleValues('volume', 'l', 'gallons', [2, 13, 28])
  const expected = [0.528, 3.434, 7.396]
  result.forEach((value, index) => {
    expect(value).toBeCloseTo(expected[index], 2)
  })
})