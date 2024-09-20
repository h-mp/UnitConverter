/**
 * Module for the length converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

/**
 * A class to convert lengths.
 */
export class LengthConverter {
  /**
   * Private field for the conversion rate from meters to feet.
   */
  #mToFtConversionRate

    /**
   * Private field for the conversion rate from centimeters to inches.
   */
  #cmToInConversionRate

  /**
   * The constructor.
   */
  constructor() {
    this.#mToFtConversionRate = 3.2808
    this.#cmToInConversionRate = 0.39370
  }

  /**
   * Validates the input length.
   * 
   * @param {Number} length - The length to be converted
   */
  #inputValidation(length) {
    if (typeof length !== 'number' || isNaN(length)) {
      throw new Error('Length must be a number')
    }
  }

  /**
   * Converts the length from meters to feet.
   *
   * @param {Number} meters - The length to be converted
   * @return {Number} - The length in feet
   */
  metersToFeet(meters) {
    this.#inputValidation(meters)

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
    this.#inputValidation(feet)

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
    this.#inputValidation(centimeters)

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
    this.#inputValidation(inches)

    const centimeters = inches / this.#cmToInConversionRate
    return centimeters
  }
}
