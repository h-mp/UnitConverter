/**
 * Tests for the SpeedConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { SpeedConverter } from '../../src/converters/SpeedConverter'

const speedConverter = new SpeedConverter()

// Test case to check miles per hour to kilometers per hour conversion
test('Convert miles per hour to kilometers per hour', () => {
  expect(speedConverter.milesPerHourToKilometersPerHour(60)).toBeCloseTo(96.56, 2)

  expect(speedConverter.milesPerHourToKilometersPerHour(100)).toBeCloseTo(160.93, 2)
})

// Test case to check kilometers per hour to miles per hour conversion
test('Convert kilometers per hour to miles per hour', () => {
  expect(speedConverter.kilometersPerHourToMilesPerHour(100)).toBeCloseTo(62.14, 2)

  expect(speedConverter.kilometersPerHourToMilesPerHour(200)).toBeCloseTo(124.274, 2)
})

// Test case to check feet per second to meters per second conversion
test('Convert feet per second to meters per second', () => {
  expect(speedConverter.feetPerSecondToMetersPerSecond(60)).toBeCloseTo(18.288, 2)

  expect(speedConverter.feetPerSecondToMetersPerSecond(100)).toBeCloseTo(30.48, 2)
})

// Test case to check meters per second to feet per second conversion
test('Convert meters per second to feet per second', () => {
  expect(speedConverter.metersPerSecondToFeetPerSecond(60)).toBeCloseTo(196.85, 2)

  expect(speedConverter.metersPerSecondToFeetPerSecond(100)).toBeCloseTo(328.08, 2)
})

// Test case to check input validation
test('Validate input', () => {
  expect(() => speedConverter.milesPerHourToKilometersPerHour('string')).toThrowError('Input must be a number')

  expect(() => speedConverter.kilometersPerHourToMilesPerHour(NaN)).toThrowError('Input must be a number')

  expect(() => speedConverter.feetPerSecondToMetersPerSecond(-10)).toThrowError('Number must be positive')
})
