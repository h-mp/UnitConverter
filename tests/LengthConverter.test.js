/**
 * Tests for the LengthConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { LengthConverter } from '../src/LengthConverter'

const lengthConverter = new LengthConverter()

// Test case to check meters to feet conversion
test('Converting meters to feet', () => {
  expect(lengthConverter.metersToFeet(24)).toBeCloseTo(78.74,2)

  expect(lengthConverter.metersToFeet(9.5)).toBeCloseTo(31.17,2)
})

// Test case to check feet to meters conversion
test('Converting feet to meters', () => {
  expect(lengthConverter.feetToMeters(40)).toBeCloseTo(12.19,2)

  expect(lengthConverter.feetToMeters(151.4)).toBeCloseTo(46.146,2)
})

// Test case to check input validation for all methods
test('Input validation', () => {
  expect(() => lengthConverter.metersToFeet('string')).toThrowError('Length must be a number')

  expect(() => lengthConverter.metersToFeet(NaN)).toThrowError('Length must be a number')

  expect(() => lengthConverter.feetToMeters(undefined)).toThrowError('Length must be a number')

  expect(() => lengthConverter.feetToMeters(null)).toThrowError('Length must be a number')
})
