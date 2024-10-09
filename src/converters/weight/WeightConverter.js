/**
 * Module for the weight converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../../InputValidator.js'

export class WeightConverter {
  #inputValidator

  /**
   * Conversion rate from kilograms to pounds.
   */
  #kgToLbConversionRate

  /**
   * Conversion rate from kilograms to ounces.
   */
  #gToOzConversionRate

  constructor() {
    this.#inputValidator = new InputValidator()
    this.#kgToLbConversionRate = 2.2046
    this.#gToOzConversionRate = 0.035274
  }

  /**
   * Validates the input.
   *
   * @param {*} input - The input
   * @throws {Error} - If the input is not a number
   * @throws {Error} - If the input is not a positive number
   */
  #validateInput(input) {
    this.#inputValidator.validateInputTypeNumber(input)
    this.#inputValidator.validatePositiveNumber(input)
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
      case 'kilograms':
      case 'kg':
        switch (convertToInLowerCase) {
          case 'pounds':
          case 'lb':
            return this.#kilogramsToPounds(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'pounds':
      case 'lb':
        switch (convertToInLowerCase) {
          case 'kilograms':
          case 'kg':
            return this.#poundsToKilograms(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'ounces':
      case 'oz':
        switch (convertToInLowerCase) {
          case 'grams':
          case 'g':
            return this.#ouncesToGrams(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'grams':
      case 'g':
        switch (convertToInLowerCase) {
          case 'ounces':
          case 'oz':
            return this.#gramsToOunces(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the weight from kilograms to pounds.
   *
   * @param {Number} kilograms - The weight to be converted
   * @returns {Number} - The weight in pounds
   */
  #kilogramsToPounds(kilograms) {
    return kilograms * this.#kgToLbConversionRate
  }

  /**
   * Converts the weight from pounds to kilograms.
   *
   * @param {Number} pounds - The weight to be converted
   * @returns {Number} - The weight in kilograms
   */
  #poundsToKilograms(pounds) {
    return pounds / this.#kgToLbConversionRate
  }

  /**
   * Converts the weight from grams to ounces.
   *
   * @param {Number} grams - The weight to be converted
   * @returns {Number} - The weight in ounces
   */
  #gramsToOunces(grams) {
    return grams * this.#gToOzConversionRate
  }

  /**
   * Converts the weight from ounces to grams.
   *
   * @param {Number} ounces - The weight to be converted
   * @returns {Number} - The weight in grams
   */
  #ouncesToGrams(ounces) {
    return ounces / this.#gToOzConversionRate
  }
}
