/**
 * Tests for the VolumeConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { VolumeConverter } from '../src/VolumeConverter.js'

const volumeConverter = new VolumeConverter()

// Test case to check gallons to liters conversion
test('Converting gallons to liters', () => {
  expect(volumeConverter.gallonsToLiters(3)).toBeCloseTo(11.356, 2)

  expect(volumeConverter.gallonsToLiters(1.7)).toBeCloseTo(6.435, 2)
})

// Test case to check liters to gallons conversion
test('Converting liters to gallons', () => {
  expect(volumeConverter.litersToGallons(15)).toBeCloseTo(3.962, 2)

  expect(volumeConverter.litersToGallons(9.2)).toBeCloseTo(2.430, 2)
})

// Test case to check pints to liters conversion
test('Converting pints to liters', () => {
  expect(volumeConverter.pintsToLiters(21)).toBeCloseTo(9.936, 2)

  expect(volumeConverter.pintsToLiters(12.9)).toBeCloseTo(6.103, 2)
})

// Test case to check liters to pints conversion
test('Converting liters to pints', () => {
  expect(volumeConverter.litersToPints(19)).toBeCloseTo(40.154, 2)

  expect(volumeConverter.litersToPints(4.6)).toBeCloseTo(9.721, 2)
})

// Test case to check input validation for both methods
test('Input validation', () => {
  expect(() => volumeConverter.gallonsToLiters('string')).toThrowError('Volume must be a number')

  expect(() => volumeConverter.litersToGallons(null)).toThrowError('Volume must be a number')

  expect(() => volumeConverter.pintsToLiters(NaN)).toThrowError('Volume must be a number')

  expect(() => volumeConverter.litersToPints(undefined)).toThrowError('Volume must be a number')
})