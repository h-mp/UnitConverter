/**
 * Module for the temperature converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../InputValidator.js'

export class TemperatureConverter {
  #inputValidator

  constructor() {
    this.#inputValidator = new InputValidator()
  }

  /**
   * Validates the input.
   * 
   * @param {*} input - The input
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
    console.log(convertFrom, convertTo)

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
   */
  #fahrenheitToCelsius(fahrenheit) {
    this.#inputValidator.validateFahrenheitRange(fahrenheit)

    return (fahrenheit - 32) / 1.8
  }

  /**
   * Converts the temperature from Celsius to Fahrenheit.
   *
   * @param {Number} celsius - The temperature in Celsius
   * @return {Number} - The temperature in Fahrenheit
   */
  #celsiusToFahrenheit(celsius) {
    this.#inputValidator.validateCelsiusRange(celsius)

    return (celsius * 1.8) + 32
  }
}
