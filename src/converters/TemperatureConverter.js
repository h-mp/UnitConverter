/**
 * Module for the temperature converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../InputValidator.js'

export class TemperatureConverter {
  #inputValidator

  /**
   * Conversion factor from Fahrenheit to Celsius.
   */
  #FToCConversionFactor

  /**
   * Conversion offset from Fahrenheit to Celsius.
   */
  #FToCConversionOffset

  constructor() {
    this.#inputValidator = new InputValidator()
    this.#FToCConversionFactor = 1.8
    this.#FToCConversionOffset = 32
  }

  /**
   * Validates the input.
   * 
   * @param {*} input - The input
   * @throws {Error} - If the input is not a number
   */
  #validateInput(input) {
    this.#inputValidator.validateInputTypeNumber(input)
  }

  /**
   * Handles temperature conversion selection and converts the number.
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
      case 'celsius':
      case 'c':
        switch (convertToInLowerCase) {
          case 'fahrenheit':
          case 'f':
            return this.#celsiusToFahrenheit(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'fahrenheit':
      case 'f':
        switch (convertToInLowerCase) {
          case 'celsius':
          case 'c':
            return this.#fahrenheitToCelsius(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the temperature from Fahrenheit to Celsius.
   *
   * @param {Number} fahrenheit - The temperature in Fahrenheit
   * @returns {Number} - The temperature in Celsius
   * @throws {Error} - If the temperature is not within the valid range
   */
  #fahrenheitToCelsius(fahrenheit) {
    this.#inputValidator.validateFahrenheitRange(fahrenheit)

    return (fahrenheit - this.#FToCConversionOffset) / this.#FToCConversionFactor
  }

  /**
   * Converts the temperature from Celsius to Fahrenheit.
   *
   * @param {Number} celsius - The temperature in Celsius
   * @return {Number} - The temperature in Fahrenheit
   * @throws {Error} - If the temperature is not within the valid range
   */
  #celsiusToFahrenheit(celsius) {
    this.#inputValidator.validateCelsiusRange(celsius)

    return (celsius * this.#FToCConversionFactor) + this.#FToCConversionOffset
  }
}
