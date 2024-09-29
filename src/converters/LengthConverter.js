/**
 * Module for the length converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../InputValidator.js'

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
   */
  #validateInput(input) {
    this.#inputValidator.validateInputTypeNumber(input)
    this.#inputValidator.validatePositiveNumber(input)
  }

  /**
   * Converts the length from meters to feet.
   *
   * @param {Number} meters - The length to be converted
   * @return {Number} - The length in feet
   */
  metersToFeet(meters) {
    this.#validateInput(meters)

    const feet = meters * this.#mToFtConversionRate
    return feet
  }

  /**
   * Converts the length from feet to meters.
   *
   * @param {Number} feet - The length to be converted
   * @return {Number} - The length in meters
   */
  feetToMeters(feet) {
    this.#validateInput(feet)

    const meters = feet / this.#mToFtConversionRate
    return meters
  }

  /**
   * Converts the length from centimeters to inches.
   *
   * @param {Number} feet - The length to be converted
   * @return {Number} - The length in inches
   */
  centimetersToInches(centimeters) {
    this.#validateInput(centimeters)

    const inches = centimeters * this.#cmToInConversionRate
    return inches
  }

  /**
   * Converts the length from inches to centimeters.
   *
   * @param {Number} feet - The length to be converted
   * @return {Number} - The length in centimeters
   */
  inchesToCentimeters(inches) {
    this.#validateInput(inches)

    const centimeters = inches / this.#cmToInConversionRate
    return centimeters
  }
}
