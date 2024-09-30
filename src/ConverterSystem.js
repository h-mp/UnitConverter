/**
 * Module for the converter system class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from './InputValidator.js'
import { ConverterSelector } from './ConverterSelector.js'

export class ConverterSystem {
  #inputValidator

  #converterSelector

  constructor() {
    this.#inputValidator = new InputValidator()
    this.#converterSelector = new ConverterSelector()
  }

  /**
   * Validates the inputs.
   * 
   * @param {*} convertFrom - The input for the unit to convert from
   * @param {*} convertTo - The input for the unit to convert to
   * @param {*} numberToConvert - The input for the number to convert
   */
  #validateInputs(convertFrom, convertTo, numberToConvert) {
    this.#inputValidator.validateInputTypeString(convertFrom)
    this.#inputValidator.validateInputTypeString(convertTo)
    this.#inputValidator.validateInputTypeNumber(numberToConvert)
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
  convertTemperature(convertFrom, convertTo, numberToConvert) {
    this.#validateInputs(convertFrom, convertTo, numberToConvert)

    switch (convertFrom.toLowerCase()) {
      case 'celsius':
      case 'c':
        this.#inputValidator.validateCelsiusRange(numberToConvert)

        return this.#converterSelector.convertFromCelsius(convertTo, numberToConvert)
      case 'fahrenheit':
      case 'f':
        this.#inputValidator.validateFahrenheitRange(numberToConvert)

        return this.#converterSelector.convertFromFahrenheit(convertTo, numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
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
  convertLength(convertFrom, convertTo, numberToConvert) {
    this.#validateInputs(convertFrom, convertTo, numberToConvert)
    this.#inputValidator.validatePositiveNumber(numberToConvert)

    switch (convertFrom.toLowerCase()) {
      case 'meters':
      case 'm':
        return this.#converterSelector.convertFromMeters(convertTo, numberToConvert)
      case 'feet':
      case 'ft':
        return this.#converterSelector.convertFromFeet(convertTo, numberToConvert)
      case 'centimeters':
      case 'cm':
        return this.#converterSelector.convertFromCentimeters(convertTo, numberToConvert)
      case 'inches':
      case 'in':
        return this.#converterSelector.convertFromInches(convertTo, numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Handles weight conversion selection and converts the number.
   *
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertWeight(convertFrom, convertTo, numberToConvert) {
    this.#validateInputs(convertFrom, convertTo, numberToConvert)
    this.#inputValidator.validatePositiveNumber(numberToConvert)

    switch (convertFrom.toLowerCase()) {
      case 'kilograms':
      case 'kg':
        return this.#converterSelector.convertFromKilograms(convertTo, numberToConvert)
      case 'pounds':
      case 'lb':
        return this.#converterSelector.convertFromPounds(convertTo, numberToConvert)
      case 'grams':
      case 'g':
        return this.#converterSelector.convertFromGrams(convertTo, numberToConvert)
      case 'ounces':
      case 'oz':
        return this.#converterSelector.convertFromOunces(convertTo, numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Handles volume conversion selection and converts the number.
   *
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertVolume(convertFrom, convertTo, numberToConvert) {
    this.#validateInputs(convertFrom, convertTo, numberToConvert)
    this.#inputValidator.validatePositiveNumber(numberToConvert)

    switch (convertFrom.toLowerCase()) {
      case 'liters':
      case 'l':
        return this.#converterSelector.convertFromLiters(convertTo, numberToConvert)
      case 'gallons':
      case 'gal':
        return this.#converterSelector.convertFromGallons(convertTo, numberToConvert)
      case 'pints':
      case 'pt':
        return this.#converterSelector.convertFromPints(convertTo, numberToConvert)
      case 'deciliters':
      case 'dl':
        return this.#converterSelector.convertFromDeciliters(convertTo, numberToConvert)
      case 'cups':
      case 'c':
        return this.#converterSelector.convertFromCups(convertTo, numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Handles multiple value conversion selection and converts the numbers.
   * 
   * @param {String} conversionType - The type of conversion i.e. temperature, length, weight, volume
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Array} numbersToConvert - The numbers to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Array} - The converted numbers
   */
  convertMultipleValues(conversionType, convertFrom, convertTo, numbersToConvert) {
    switch (conversionType.toLowerCase()) {
      case 'temperature':
        return numbersToConvert.map(number => this.convertTemperature(convertFrom, convertTo, number))
      case 'length':
        return numbersToConvert.map(number => this.convertLength(convertFrom, convertTo, number))
      case 'weight':
        return numbersToConvert.map(number => this.convertWeight(convertFrom, convertTo, number))
      case 'volume':
        return numbersToConvert.map(number => this.convertVolume(convertFrom, convertTo, number))
      default:
        throw new Error('Conversion not available')
    }
  }
}
