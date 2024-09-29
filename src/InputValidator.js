/**
 * Module for the input validator class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

export class InputValidator {
  /**
   * Validates the input type number.
   *
   * @param {*} input - The input
   * @throws {Error} - If the input is not a number
   */
  validateInputTypeNumber(input) {
    if (typeof input !== 'number' || isNaN(input)) {
      throw new Error('Input must be a number')
    }
  }

  /**
   * Validates the input type.
   *
   * @param {*} input - The input
   * @throws {Error} - If the input is not a string
   */
  validateInputTypeString(input) {
    if (typeof input !== 'string') {
      throw new Error('Input must be a string')
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

  /**
   * Validates the Celsius temperature range.
   * 
   * @param {Number} celsius - The temperature in celsius
   * @throws {Error} - If the temperature is below absolute zero 
   */
  validateCelsiusRange(celsius) {
    if (celsius < -273.15) {
      throw new Error('Temperature must be greater than or equal to -273.15°C')
    }
  }

  /**
   * Validates the Fahrenheit temperature range.
   * 
   * @param {Number} fahrenheit - The temperature in fahrenheit
   * @throws {Error} - If the temperature is below absolute zero 
   */
  validateFahrenheitRange(fahrenheit) {
    if (fahrenheit < -459.67) {
      throw new Error('Temperature must be greater than or equal to -459.67°F')
    }
  }
}
