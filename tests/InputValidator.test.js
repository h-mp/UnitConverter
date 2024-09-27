/**
 * Tests for the InputValidator class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../src/InputValidator.js'

const inputValidator = new InputValidator()

// Test case to check input type validation
test('Validating input type', () => {
  expect(() => inputValidator.validateInputType('string')).toThrowError('Input must be a number')

  expect(() => inputValidator.validateInputType(NaN)).toThrowError('Input must be a number')

  expect(() => inputValidator.validateInputType(null)).toThrowError('Input must be a number')

  expect(() => inputValidator.validateInputType(undefined)).toThrowError('Input must be a number')
})

// Test case to check positive number validation
test('Validating positive number', () => {
  expect(() => inputValidator.validatePositiveNumber(-1)).toThrowError('Number must be positive')
})
