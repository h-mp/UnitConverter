/**
 * Tests for the WeightConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { WeightConverter } from '../src/WeightConverter'

const weightConverter = new WeightConverter()

// Test case to check kilogram to pound conversion
test('Converting kilograms to pounds', () => {
  expect(weightConverter.kilogramsToPounds(5)).toBeCloseTo(11.02, 2)

  expect(weightConverter.kilogramsToPounds(21)).toBeCloseTo(46.297, 2)
})

// Test case to check pound to kilogram conversion
test('Converting pounds to kilograms', () => {
  expect(weightConverter.poundsToKilograms(14)).toBeCloseTo(6.35, 2)

  expect(weightConverter.poundsToKilograms(1.5)).toBeCloseTo(0.68, 2)
})

// Test case to check gram to ounce conversion
test('Converting grams to ounces', () => {
  expect(weightConverter.gramsToOunces(119)).toBeCloseTo(4.197, 2)

  expect(weightConverter.gramsToOunces(567)).toBeCloseTo(20, 2)
})

// Test case to check ounce to gram conversion
test('Converting ounces to grams', () => {
  expect(weightConverter.ouncesToGrams(16)).toBeCloseTo(453.59, 2)

  expect(weightConverter.ouncesToGrams(5.5)).toBeCloseTo(155.92, 2)
})

// Test case to check input validation
test('Validating input', () => {
  expect(() => weightConverter.kilogramsToPounds('string')).toThrowError('Input must be a number')

  expect(() => weightConverter.gramsToOunces(NaN)).toThrowError('Input must be a number')

  expect(() => weightConverter.ouncesToGrams(-1)).toThrowError('Number must be positive')
})
