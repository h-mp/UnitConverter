/**
 * Module for the temperature converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

/**
 * A class to convert temperatures.
 */
export class TemperatureConverter {
  /**
   * Validates the input.
   *
   * @param {Number} temperature - The temperature to be converted
   * @throws {Error} - If the temperature is not a number
   */
  #inputValidation(temperature) {
    if (typeof temperature !== 'number' || isNaN(temperature)) {
      throw new Error('Temperature must be a number')
    }
  }

  /**
   * Converts the temperature from Fahrenheit to Celsius.
   *
   * @param {Number} fahrenheit - The temperature in Fahrenheit
   * @returns {Number} - The temperature in Celsius
   */
  fahrenheitToCelsius(fahrenheit) {
    this.#inputValidation(fahrenheit)

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
    this.#inputValidation(celsius)

    const fahrenheit = (celsius * 1.8) + 32
    return fahrenheit
  }
}
