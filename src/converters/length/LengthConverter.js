/**
 * Module for the length converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../../InputValidator.js'

export class LengthConverter {
  #inputValidator

  /**
   * Conversion rate from meters to feet.
   */
  #mToFtConversionRate

  /**
   * Conversion rate from centimeters to inches.
   */
  #cmToInConversionRate

  constructor() {
    this.#inputValidator = new InputValidator()

    this.#mToFtConversionRate = 3.2808
    this.#cmToInConversionRate = 0.39370
  }

  /**
   * Validates the input.
   * 
   * @param {*} input - The input
   * @throws {Error} - If the input is not a number
   * @throws {Error} - If the input is not a positive number
   */
  #validateInput(input) {
    this.#inputValidator.validateInputTypeNumber(input)
    this.#inputValidator.validatePositiveNumber(input)
  }

  /**
   * Handles length conversion selection and converts the number.
   * 
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convert(convertFrom, convertTo, numberToConvert) {
    this.#validateInput(numberToConvert)
    const convertToInLowerCase = convertTo.toLowerCase()

    switch (convertFrom.toLowerCase()) {
      case 'meters':
      case 'm':
        switch (convertToInLowerCase) {
          case 'feet':
          case 'ft':
            return this.#metersToFeet(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'feet':
      case 'ft':
        switch (convertToInLowerCase) {
          case 'meters':
          case 'm':
            return this.#feetToMeters(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'centimeters':
      case 'cm':
        switch (convertToInLowerCase) {
          case 'inches':
          case 'in':
            return this.#centimetersToInches(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'inches':
      case 'in':
        switch (convertToInLowerCase) {
          case 'centimeters':
          case 'cm':
            return this.#inchesToCentimeters(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the length from meters to feet.
   *
   * @param {Number} meters - The length to be converted
   * @return {Number} - The length in feet
   */
  #metersToFeet(meters) {
    return meters * this.#mToFtConversionRate
  }

  /**
   * Converts the length from feet to meters.
   *
   * @param {Number} feet - The length to be converted
   * @return {Number} - The length in meters
   */
  #feetToMeters(feet) {
    return feet / this.#mToFtConversionRate
  }

  /**
   * Converts the length from centimeters to inches.
   *
   * @param {Number} feet - The length to be converted
   * @return {Number} - The length in inches
   */
  #centimetersToInches(centimeters) {
    return centimeters * this.#cmToInConversionRate
  }

  /**
   * Converts the length from inches to centimeters.
   *
   * @param {Number} feet - The length to be converted
   * @return {Number} - The length in centimeters
   */
  #inchesToCentimeters(inches) {
    return inches / this.#cmToInConversionRate
  }
}