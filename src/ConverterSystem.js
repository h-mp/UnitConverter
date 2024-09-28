/**
 * Module for the converter system class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from './InputValidator.js'
import { LengthConverter } from './converters/LengthConverter.js'
import { TemperatureConverter } from './converters/TemperatureConverter.js'
import { VolumeConverter } from './converters/VolumeConverter.js'
import { WeightConverter } from './converters/WeightConverter.js'

/**
 * A class to handle all conversions.
 */
export class ConverterSystem {
  #inputValidator

  #lengthConverter

  #temperatureConverter

  #volumeConverter

  #weightConverter

  constructor() {
    this.#inputValidator = new InputValidator()
    this.#lengthConverter = new LengthConverter()
    this.#temperatureConverter = new TemperatureConverter()
    this.#volumeConverter = new VolumeConverter()
    this.#weightConverter = new WeightConverter()
  }

  /**
   * Handles weight conversion selection.
   *
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertWeight(convertFrom, convertTo, numberToConvert) {
    switch (convertFrom.toLowerCase()) {
      case 'kilograms':
      case 'kg':
        return this.#convertFromKilograms(convertTo, numberToConvert)
      case 'pounds':
      case 'lb':
        return this.#convertFromPounds(convertTo, numberToConvert)
      case 'grams':
      case 'g':
        return this.#convertFromGrams(convertTo, numberToConvert)
      case 'ounces':
      case 'oz':
        return this.#convertFromOunces(convertTo, numberToConvert)
      default:
        throw new Error('Conversion not available')
      }
    }

  /**
   * Converts the kilograms to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  #convertFromKilograms(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'pounds':
      case 'lb':
        return this.#weightConverter.kilogramsToPounds(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the pounds to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  #convertFromPounds(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'kilograms':
      case 'kg':
        return this.#weightConverter.poundsToKilograms(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the grams to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  #convertFromGrams(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'ounces':
      case 'oz':
        return this.#weightConverter.gramsToOunces(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the ounces to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  #convertFromOunces(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'grams':
      case 'g':
        return this.#weightConverter.ouncesToGrams(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }
}
