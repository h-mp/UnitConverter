/**
 * Module for the temperature converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { Converter } from '../Converter.js'
import { CelsiusToFahrenheitConverter } from './CelsiusToFahrenheitConverter.js'
import { FahrenheitToCelsiusConverter } from './FahrenheitToCelsiusConverter.js'

export class TemperatureConverter extends Converter {

  constructor() {
    super() 

    this._unitAbbreviationConversions = {
      "c": "celsius",
      "f": "fahrenheit"
    }

    this._availableConversions = {
      "celsius-fahrenheit": new CelsiusToFahrenheitConverter(),
      "fahrenheit-celsius": new FahrenheitToCelsiusConverter()
    }
  }

  /**
   * Validates the input.
   * 
   * @param {*} input - The input
   * @throws {Error} - If the input is not a number
   */
  #validateTemperatureNumberInput(input) {
    this._inputValidator.validateInputTypeNumber(input)
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
    this.#validateTemperatureNumberInput(numberToConvert)
    this._validateStringInputs(convertFrom, convertTo)

    const normalizedFrom = this._normalizeAbbreviation(convertFrom)
    const normalizedTo = this._normalizeAbbreviation(convertTo)

    return this._convertValue(normalizedFrom, normalizedTo, numberToConvert)
  }
}
