/**
 * Module for the temperature converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from './InputValidator.js'

/**
 * A class to convert temperatures.
 */
export class TemperatureConverter {
  /**
   * The input validator.
   */
  #inputValidator

  /**
   * The constructor.
   */
  constructor() {
    this.#inputValidator = new InputValidator()
  }

  /**
   * Converts the temperature from Fahrenheit to Celsius.
   *
   * @param {Number} fahrenheit - The temperature in Fahrenheit
   * @returns {Number} - The temperature in Celsius
   */
  fahrenheitToCelsius(fahrenheit) {
    this.#inputValidator.validateInputType(fahrenheit)

    const celsius = (fahrenheit - 32) / 1.8
    return celsius
  }

  /**
   * Converts the temperature from Celsius to Fahrenheit.
   *
   * @param {Number} celsius - The temperature in Celsius
   * @return {Number} - The temperature in Fahrenheit
   */
  celsiusToFahrenheit(celsius) {
    this.#inputValidator.validateInputType(celsius)

    const fahrenheit = (celsius * 1.8) + 32
    return fahrenheit
  }
}
