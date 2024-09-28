/**
 * Tests for the ConverterSystem class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConverterSystem } from '../src/ConverterSystem'

const converterSystem = new ConverterSystem()

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