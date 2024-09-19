/**
 * Tests for the TemperatureConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { TemperatureConverter } from '../src/TemperatureConverter.js'

const temperatureConverter = new TemperatureConverter()

// Test case to check Fahrenheit to Celsius conversion
test('converting Fahrenheit to Celsius', () => {
  expect(temperatureConverter.fahrenheitToCelsius(32)).toBe(0)
  expect(temperatureConverter.fahrenheitToCelsius(100)).toBeCloseTo(37.78, 2)
})

// Test case to check Celsius to Fahrenheit conversion
test('converting Celsius to Fahrenheit', () => {
  expect(temperatureConverter.celsiusToFahrenheit(95)).toBe(203)
  expect(temperatureConverter.celsiusToFahrenheit(42)).toBeCloseTo(107.6, 2)
})

// Test case to check input validation for both methods
test('input validation', () => {
  expect(() => temperatureConverter.fahrenheitToCelsius('string')).toThrowError('Temperature must be a number')
  expect(() => temperatureConverter.celsiusToFahrenheit(NaN)).toThrowError('Temperature must be a number')
  expect(() => temperatureConverter.fahrenheitToCelsius(null)).toThrowError('Temperature must be a number')
  expect(() => temperatureConverter.celsiusToFahrenheit(undefined)).toThrowError('Temperature must be a number')
})