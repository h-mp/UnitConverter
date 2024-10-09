/**
 * Module for the converter baseclass.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from "../InputValidator"
import { ConversionStrategy } from "../strategies/ConvesionStrategy"

// Some of the methods and fields in this class are intended to be protected.

export class Converter {
  #inputValidator

  _availableConversions

  _unitAbbreviationConversions

  constructor() {
    this.#inputValidator = new InputValidator()
  }

  /**
   * Validates the number input.
   * 
   * @param {*} numberInput - The input number
   * @throws {Error} - If the input is not a number
   * @throws {Error} - If the input is not a positive number
   */
  _validateNumberInput(numberInput) {
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
  _validateStringInputs(convertFromInput, convertToInput) {
    this.#inputValidator.validateInputTypeString(convertFromInput)
    this.#inputValidator.validateInputTypeString(convertToInput)
  }

  /**
   * Normalizes the unit abbreviation.
   * 
   * @param {string} unitAbbreviation - The unit abbreviation
   * @returns {string} - The normalized unit name
   */
  _normalizeAbbreviation(unitAbbreviation) {
    const normalizedUnit = this._unitAbbreviationConversions[unitAbbreviation.toLowerCase()]

    // For names that are already normalized
    if (!normalizedUnit) {
      return unitAbbreviation
    }

    return normalizedUnit
  }

  /**
   * Converts the number.
   * 
   * @param {string} normalizedFrom - The normalized unit to convert from
   * @param {string} normalizedTo - The normalized unit to convert to
   * @param {Number} number - The number to convert
   * @returns {Number} - The converted number
   */
  _convertValue(normalizedFrom, normalizedTo, number) {
    const converter = this.#selectConverter(normalizedFrom, normalizedTo)
    return converter.convert(number)
  }

  /**
   * Selects the correct converter to use.
   * 
   * @param {string} normalizedFrom - The normalized unit to convert from
   * @param {string} normalizedTo - The normalized unit to convert to
   * @returns {ConversionStrategy} - The selected converter
   */
  #selectConverter(normalizedFrom, normalizedTo) {
    const key = `${normalizedFrom}-${normalizedTo}`
    const converter = this._availableConversions[key]

    this.#checkAvailability(converter)

    return converter
  }

  /**
   * Checks if the conversion / converter is available.
   * 
   * @param {ConversionStrategy} converter - The converter to check
   * @throws {Error} - If the conversion is not available
   */
  #checkAvailability(converter) {
    if (!converter) {
      throw new Error('Conversion not available')
    }
  }
}