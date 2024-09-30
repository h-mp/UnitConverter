/**
 * Tests for the ConverterSelector class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConverterSelector } from '../src/ConverterSelector.js'

const converterSelector = new ConverterSelector()

// Test cases for temperature conversion

// Test case to check temperature conversion from Celsius
test('Convert temperature from Celsius', () => {
  expect(converterSelector.convertFromCelsius('fahrenheit', 18)).toBe(64.4)

  expect(converterSelector.convertFromCelsius('fahrenheit', -25)).toBe(-13)

  expect(() => converterSelector.convertFromCelsius('kelvin', 21)).toThrowError('Conversion not available')
})

// Test case to check temperature conversion from Fahrenheit
test('Convert temperature from Fahrenheit', () => {
  expect(converterSelector.convertFromFahrenheit('celsius', 68)).toBe(20)

  expect(converterSelector.convertFromFahrenheit('celsius', -22)).toBe(-30)

  expect(() => converterSelector.convertFromFahrenheit('kelvin', 97)).toThrowError('Conversion not available')
})

// Test cases for length conversion

// Test case to check length conversion from meters
test('Convert length from meters', () => {
  expect(converterSelector.convertFromMeters('feet', 2)).toBeCloseTo(6.561, 2)

  expect(() => converterSelector.convertFromMeters('in', 21)).toThrowError('Conversion not available')
})

// Test case to check length conversion from feet
test('Convert length from feet', () => {
  expect(converterSelector.convertFromFeet('meters', 23)).toBeCloseTo(7.010, 2)

  expect(() => converterSelector.convertFromFeet('cm', 93)).toThrowError('Conversion not available')
})

// Test case to check length conversion from centimeters
test('Convert length from centimeters', () => {
  expect(converterSelector.convertFromCentimeters('inches', 70)).toBeCloseTo(27.559, 2)

  expect(() => converterSelector.convertFromCentimeters('m', 55)).toThrowError('Conversion not available')
})

// Test case to check length conversion from inches
test('Convert length from inches', () => {
  expect(converterSelector.convertFromInches('centimeters', 9)).toBeCloseTo(22.86, 2)

  expect(() => converterSelector.convertFromInches('feet', 24)).toThrowError('Conversion not available')
})

// Test cases for speed conversion

// Test case to check speed conversion from miles per hour
test('Convert speed from miles per hour', () => {
  expect(converterSelector.convertFromMilesPerHour('kilometers per hour', 60)).toBeCloseTo(96.56, 2)

  expect(() => converterSelector.convertFromMilesPerHour('meters per second', 60)).toThrowError('Conversion not available')
})

// Test case to check speed conversion from kilometers per hour
test('Convert speed from kilometers per hour', () => {
  expect(converterSelector.convertFromKilometersPerHour('miles per hour', 100)).toBeCloseTo(62.14, 2)

  expect(() => converterSelector.convertFromKilometersPerHour('feet per second', 60)).toThrowError('Conversion not available')
})

// Test case to check speed conversion from feet per second
test('Convert speed from feet per second', () => {
  expect(converterSelector.convertFromFeetPerSecond('meters per second', 60)).toBeCloseTo(18.288, 2)

  expect(() => converterSelector.convertFromFeetPerSecond('feet per hour', 60)).toThrowError('Conversion not available')
})

// Test case to check speed conversion from meters per second
test('Convert speed from meters per second', () => {
  expect(converterSelector.convertFromMetersPerSecond('feet per second', 60)).toBeCloseTo(196.85, 2)

  expect(() => converterSelector.convertFromMetersPerSecond('miles per hour', 60)).toThrowError('Conversion not available')
})

// Test cases for weight conversion

// Test case to check weight conversion from kilograms 
test('Convert weight from kilograms', () => {
  expect(converterSelector.convertFromKilograms('Pounds', 12)).toBeCloseTo(26.455, 2)

  expect(() => converterSelector.convertFromKilograms('grams', 12)).toThrowError('Conversion not available')
})

// Test case to check weight conversion from pounds 
test('Convert weight from pounds', () => {
  expect(converterSelector.convertFromPounds('kg', 6)).toBeCloseTo(2.721, 2)

  expect(() => converterSelector.convertFromPounds('ounces', 2)).toThrowError('Conversion not available')
})

// Test case to check weight conversion from grams 
test('Convert weight from grams', () => {
  expect(converterSelector.convertFromGrams('ounces', 56)).toBeCloseTo(1.975, 2)

  expect(() => converterSelector.convertFromGrams('pounds', 101)).toThrowError('Conversion not available')
})

// Test case to check weight conversion from ounces 
test('Convert weight from ounces', () => {
  expect(converterSelector.convertFromOunces('Grams', 7)).toBeCloseTo(198.446, 2)

  expect(() => converterSelector.convertFromOunces('kilograms', 3)).toThrowError('Conversion not available')
})

// Test cases for volume conversion

// Test case to check volume conversion from liters 
test('Convert volume from liters', () => {
  expect(converterSelector.convertFromLiters('gallons', 12)).toBeCloseTo(3.170, 2)

  expect(converterSelector.convertFromLiters('pints', 19)).toBeCloseTo(40.154, 2)

  expect(() => converterSelector.convertFromLiters('cups', 3)).toThrowError('Conversion not available')
})

// Test case to check volume conversion from gallons 
test('Convert volume from gallons', () => {
  expect(converterSelector.convertFromGallons('liters', 6)).toBeCloseTo(22.712, 2)

  expect(() => converterSelector.convertFromGallons('dl', 8)).toThrowError('Conversion not available')
})

// Test case to check volume conversion from pints 
test('Convert volume from pints', () => {
  expect(converterSelector.convertFromPints('liters', 31)).toBeCloseTo(14.668, 2)

  expect(() => converterSelector.convertFromPints('cups', 28)).toThrowError('Conversion not available')
})

// Test case to check volume conversion from deciliters 
test('Convert volume from deciliters', () => {
  expect(converterSelector.convertFromDeciliters('cups', 35)).toBeCloseTo(14.793, 2)

  expect(() => converterSelector.convertFromDeciliters('liters', 62)).toThrowError('Conversion not available')
})

// Test case to check volume conversion from cups 
test('Convert volume from cups', () => {
  expect(converterSelector.convertFromCups('deciliters', 25)).toBeCloseTo(59.147, 2)

  expect(() => converterSelector.convertFromCups('liters', 17)).toThrowError('Conversion not available')
})