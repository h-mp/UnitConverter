/**
 * Module for the length converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../../InputValidator.js'
import { CentimetersToInchesConverter } from './CentimetersToInchesConverter.js'
import { FeetToMetersConverter } from './FeetToMetersConverter.js'
import { InchesToCentimetersConverter } from './InchesToCentimetersConverter.js'
import { MetersToFeetConverter } from './MetersToFeetConverter.js'

export class LengthConverter {
  #inputValidator

  /**
   * Unit abbreviation conversions.
   */
  #unitAbbreviationConversions

  /**
   * Available converters for length.
   */
  #availableConversions

  constructor() {
    this.#inputValidator = new InputValidator()

    this.#unitAbbreviationConversions = {
      'm': 'meters',
      'ft': 'feet',
      'cm': 'centimeters',
      'in': 'inches'
    }

    this.#availableConversions = {
      "meters-feet": new MetersToFeetConverter(),
      "feet-meters": new FeetToMetersConverter(),
      "centimeters-inches": new CentimetersToInchesConverter(),
      "inches-centimeters": new InchesToCentimetersConverter()
    }
  }

  /**
   * Validates the number input.
   * 
   * @param {*} numberInput - The input number
   * @throws {Error} - If the input is not a number
   * @throws {Error} - If the input is not a positive number
   */
  #validateNumberInput(numberInput) {
    this.#inputValidator.validateInputTypeNumber(numberInput)
    this.#inputValidator.validatePositiveNumber(numberInput)
  }

  /**
   * Validates the string inputs.
   * 
   * @param {*} convertFromInput - The input string to convert from
   * @param {*} convertToInput - The input string to convert to
   * @throws {Error} - If the inputs are not strings
   */
  #validateStringInputs(convertFromInput, convertToInput) {
    this.#inputValidator.validateInputTypeString(convertFromInput)
    this.#inputValidator.validateInputTypeString(convertToInput)
  }

  /**
   * Normalizes the unit abbreviation.
   * 
   * @param {string} unitAbbreviation - The unit abbreviation
   * @returns {string} - The normalized unit name
   */
  #normalizeAbbreviation(unitAbbreviation) {
    return this.#unitAbbreviationConversions[unitAbbreviation.toLowerCase()]
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
    this.#validateNumberInput(numberToConvert)
    this.#validateStringInputs(convertFrom, convertTo)

    const normalizedFrom = this.#normalizeAbbreviation(convertFrom.toLowerCase())
    const normalizedTo = this.#normalizeAbbreviation(convertTo.toLowerCase())
    
    const key = `${normalizedFrom}-${normalizedTo}`
    const converter = this.#availableConversions[key]

    if (!converter) {
      throw new Error('Conversion not available')
    }

    return converter.convert(numberToConvert)
  }
}
