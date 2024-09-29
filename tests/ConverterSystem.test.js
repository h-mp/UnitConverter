/**
 * Tests for the ConverterSystem class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConverterSystem } from '../src/ConverterSystem'

const converterSystem = new ConverterSystem()

// Test cases for temperature conversion

// Test case to check temperature conversion from Celsius
test('Converting temperature from Celsius', () => {
  expect(converterSystem.convertTemperature('c', 'fahrenheit', 18)).toBe(64.4)

  expect(converterSystem.convertTemperature('celsius', 'fahrenheit', -25)).toBe(-13)

  expect(() => converterSystem.convertTemperature('c', 'f', -300)).toThrowError('Temperature must be greater than or equal to -273.15°C')

  expect(() => converterSystem.convertTemperature('celsius', 'kelvin', 21)).toThrowError('Conversion not available')
})

// Test case to check temperature conversion from Fahrenheit
test('Converting temperature from Fahrenheit', () => {
  expect(converterSystem.convertTemperature('f', 'celsius', 68)).toBe(20)

  expect(converterSystem.convertTemperature('fahrenheit', 'celsius', -22)).toBe(-30)

  expect(() => converterSystem.convertTemperature('f', 'c', -500)).toThrowError('Temperature must be greater than or equal to -459.67°F')

  expect(() => converterSystem.convertTemperature('fahrenheit', 'k', 97)).toThrowError('Conversion not available')
})

// Test case to check input validation in temperature conversion
test('Check input validation in temperature conversion', () => {
  expect(() => converterSystem.convertTemperature('f', 'celsius', 'string')).toThrowError('Input must be a number')

  expect(() => converterSystem.convertTemperature('f', 'celsius', NaN)).toThrowError('Input must be a number')

  expect(() => converterSystem.convertTemperature(2, 'celsius', 3)).toThrowError('Input must be a string')

  expect(() => converterSystem.convertTemperature('f', [], 3)).toThrowError('Input must be a string')
})

// Test cases for length conversion

// Test case to check length conversion from meters
test('Converting length from meters', () => {
  expect(converterSystem.convertLength('m', 'feet', 2)).toBeCloseTo(6.561, 2)

  expect(() => converterSystem.convertLength('meters', 'in', 21)).toThrowError('Conversion not available')
})

// Test case to check length conversion from feet
test('Converting length from feet', () => {
  expect(converterSystem.convertLength('ft', 'meters', 23)).toBeCloseTo(7.010, 2)

  expect(() => converterSystem.convertLength('feet', 'cm', 93)).toThrowError('Conversion not available')
})

// Test case to check length conversion from centimeters
test('Converting length from centimeters', () => {
  expect(converterSystem.convertLength('cm', 'inches', 70)).toBeCloseTo(27.559, 2)

  expect(() => converterSystem.convertLength('centimeters', 'm', 55)).toThrowError('Conversion not available')
})

// Test case to check length conversion from inches
test('Converting length from inches', () => {
  expect(converterSystem.convertLength('in', 'centimeters', 9)).toBeCloseTo(22.86, 2)

  expect(() => converterSystem.convertLength('inches', 'feet', 24)).toThrowError('Conversion not available')
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

// Test case to check weight conversion from kilograms 
test('Converting weight from kilograms', () => {
  expect(converterSystem.convertWeight('kg', 'Pounds', 12)).toBeCloseTo(26.455, 2)

  expect(() => converterSystem.convertWeight('kilograms', 'grams', 12)).toThrowError('Conversion not available')
})

// Test case to check weight conversion from pounds 
test('Converting weight from pounds', () => {
  expect(converterSystem.convertWeight('pounds', 'kg', 6)).toBeCloseTo(2.721, 2)

  expect(() => converterSystem.convertWeight('pounds', 'ounces', 2)).toThrowError('Conversion not available')
})

// Test case to check weight conversion from grams 
test('Converting weight from grams', () => {
  expect(converterSystem.convertWeight('g', 'ounces', 56)).toBeCloseTo(1.975, 2)

  expect(() => converterSystem.convertWeight('grams', 'pounds', 101)).toThrowError('Conversion not available')
})

// Test case to check weight conversion from ounces 
test('Converting weight from ounces', () => {
  expect(converterSystem.convertWeight('oz', 'Grams', 7)).toBeCloseTo(198.446, 2)

  expect(() => converterSystem.convertWeight('ounces', 'kilograms', 3)).toThrowError('Conversion not available')
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

// Test case to check volume conversion from liters 
test('Converting volume from liters', () => {
  expect(converterSystem.convertVolume('l', 'gallons', 12)).toBeCloseTo(3.170, 2)

  expect(converterSystem.convertVolume('l', 'pints', 19)).toBeCloseTo(40.154, 2)

  expect(() => converterSystem.convertVolume('liters', 'cups', 3)).toThrowError('Conversion not available')
})

// Test case to check volume conversion from gallons 
test('Converting volume from gallons', () => {
  expect(converterSystem.convertVolume('gal', 'liters', 6)).toBeCloseTo(22.712, 2)

  expect(() => converterSystem.convertVolume('gallons', 'dl', 8)).toThrowError('Conversion not available')
})

// Test case to check volume conversion from pints 
test('Converting volume from pints', () => {
  expect(converterSystem.convertVolume('pt', 'liters', 31)).toBeCloseTo(14.668, 2)

  expect(() => converterSystem.convertVolume('pints', 'cups', 28)).toThrowError('Conversion not available')
})

// Test case to check volume conversion from deciliters 
test('Converting volume from deciliters', () => {
  expect(converterSystem.convertVolume('dl', 'cups', 35)).toBeCloseTo(14.793, 2)

  expect(() => converterSystem.convertVolume('deciliters', 'liters', 62)).toThrowError('Conversion not available')
})

// Test case to check volume conversion from cups 
test('Converting volume from cups', () => {
  expect(converterSystem.convertVolume('c', 'deciliters', 25)).toBeCloseTo(59.147, 2)

  expect(() => converterSystem.convertVolume('cups', 'liters', 17)).toThrowError('Conversion not available')
})

// Test case to check input validation in volume conversion
test('Check input validation in volume conversion', () => {
  expect(() => converterSystem.convertVolume('l', 'gal', -10)).toThrowError('Number must be positive')

  expect(() => converterSystem.convertVolume('l', 'gal', 'string')).toThrowError('Input must be a number')

  expect(() => converterSystem.convertVolume('dl', 'cups', NaN)).toThrowError('Input must be a number')

  expect(() => converterSystem.convertVolume(2, 'l', 3)).toThrowError('Input must be a string')

  expect(() => converterSystem.convertVolume('pints', [], 3)).toThrowError('Input must be a string')
})