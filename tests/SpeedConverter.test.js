/**
 * Tests for the SpeedConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { SpeedConverter } from '../src/converters/SpeedConverter'

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

// Test case to check input validation
test('Validate input', () => {
  expect(() => speedConverter.milesPerHourToKilometersPerHour('string')).toThrowError('Input must be a number')

  expect(() => speedConverter.kilometersPerHourToMilesPerHour(NaN)).toThrowError('Input must be a number')
})
