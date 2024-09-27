/**
 * Tests for the VolumeConverter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { VolumeConverter } from '../src/VolumeConverter'

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

// Test case to check cups to deciliters conversion
test('Converting cups to deciliters', () => {
  expect(volumeConverter.cupsToDeciliters(3)).toBeCloseTo(7.097, 2)

  expect(volumeConverter.cupsToDeciliters(8.1)).toBeCloseTo(19.163, 2)
})

// Test case to check deciliters to cups conversion
test('Converting deciliters to cups', () => {
  expect(volumeConverter.decilitersToCups(14)).toBeCloseTo(5.917, 2)

  expect(volumeConverter.decilitersToCups(22.7)).toBeCloseTo(9.594, 2)
})

// Test case to check input validation
test('Validating input', () => {
  expect(() => volumeConverter.litersToGallons('string')).toThrowError('Input must be a number')

  expect(() => volumeConverter.decilitersToCups(NaN)).toThrowError('Input must be a number')

  expect(() => volumeConverter.pintsToLiters(-1)).toThrowError('Number must be positive')
})
