/**
 * Tests for the InputValidator class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../src/InputValidator.js'

const inputValidator = new InputValidator()

// Test case to check input type number validation
test('Validating input type number', () => {
  expect(() => inputValidator.validateInputTypeNumber('string')).toThrowError('Input must be a number')

  expect(() => inputValidator.validateInputTypeNumber(NaN)).toThrowError('Input must be a number')

  expect(() => inputValidator.validateInputTypeNumber(null)).toThrowError('Input must be a number')

  expect(() => inputValidator.validateInputTypeNumber(undefined)).toThrowError('Input must be a number')
})

// Test case to check input type string validation
test('Validating input type string', () => {
  expect(() => inputValidator.validateInputTypeString(1)).toThrowError('Input must be a string')

  expect(() => inputValidator.validateInputTypeString([])).toThrowError('Input must be a string')

  expect(() => inputValidator.validateInputTypeString(undefined)).toThrowError('Input must be a string')
})

// Test case to check positive number validation
test('Validating positive number', () => {
  expect(() => inputValidator.validatePositiveNumber(-1)).toThrowError('Number must be positive')
})
