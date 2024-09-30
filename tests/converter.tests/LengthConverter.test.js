/**
 * Tests for the LengthConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { LengthConverter } from '../../src/converters/LengthConverter.js'

const lengthConverter = new LengthConverter()

// Test case to check meters to feet conversion
test('Convert meters to feet', () => {
  expect(lengthConverter.metersToFeet(24)).toBeCloseTo(78.74,2)

  expect(lengthConverter.metersToFeet(9.5)).toBeCloseTo(31.17,2)
})

// Test case to check feet to meters conversion
test('Convert feet to meters', () => {
  expect(lengthConverter.feetToMeters(40)).toBeCloseTo(12.19,2)

  expect(lengthConverter.feetToMeters(151.4)).toBeCloseTo(46.146, 2)
})

// Test case to check centimeters to inches conversion
test('Convert centimeters to inches', () => {
  expect(lengthConverter.centimetersToInches(16.7)).toBeCloseTo(6.574, 2)

  expect(lengthConverter.centimetersToInches(159)).toBeCloseTo(62.598, 2)
})

// Test case to check inches to centimeters conversion
test('Convert inches to centimeters', () => {
  expect(lengthConverter.inchesToCentimeters(28)).toBeCloseTo(71.12, 2)

  expect(lengthConverter.inchesToCentimeters(0.5)).toBeCloseTo(1.27, 2)
})

// Test case to check input validation
test('Validate input', () => {
  expect(() => lengthConverter.metersToFeet('string')).toThrowError('Input must be a number')

  expect(() => lengthConverter.feetToMeters(NaN)).toThrowError('Input must be a number')

  expect(() => lengthConverter.centimetersToInches(-1)).toThrowError('Number must be positive')
})
