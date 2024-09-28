/**
 * Tests for the ConverterSystem class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConverterSystem } from '../src/ConverterSystem'

const converterSystem = new ConverterSystem()

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