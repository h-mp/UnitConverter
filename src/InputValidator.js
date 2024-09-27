/**
 * Module for the input validator class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

/**
 * A class to validate input.
 */
export class InputValidator {
  /**
   * Validates the input type.
   *
   * @param {*} input - The input
   * @throws {Error} - If the input is not a number
   */
  validateInputType(input) {
    if (typeof input !== 'number' || isNaN(input)) {
      throw new Error('Input must be a number')
    }
  }

  /**
   * Validates the input type.
   *
   * @param {Number} input - The input
   * @throws {Error} - If the input is not a number
   */
    validatePositiveNumber(input) {
      if (input < 0) {
        throw new Error('Number must be positive')
      }
    }
}
