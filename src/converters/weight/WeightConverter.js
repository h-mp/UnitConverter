/**
 * Module for the weight converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { Converter } from '../Converter.js'
import { KilogramsToPoundsConverter } from './KilogramsToPoundsConverter.js'
import { PoundsToKilogramsConverter } from './PoundsToKilogramsConverter.js'
import { GramsToOuncesConverter } from './GramsToOuncesConverter.js'
import { OuncesToGramsConverter } from './OuncesToGramsConverter.js'

export class WeightConverter extends Converter {

  constructor() {
    super()

    this._unitAbbreviationConversions = {
      "kg": "kilograms",
      "lb": "pounds",
      "g": "grams",
      "oz": "ounces"
    }

    this._availableConversions = {
      "kilograms-pounds": new KilogramsToPoundsConverter(),
      "pounds-kilograms": new PoundsToKilogramsConverter(),
      "grams-ounces": new GramsToOuncesConverter(),
      "ounces-grams": new OuncesToGramsConverter()
    }
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
    this._validateNumberInput(numberToConvert)
    this._validateStringInputs(convertFrom, convertTo)

    const normalizedFrom = this._normalizeAbbreviation(convertFrom)
    const normalizedTo = this._normalizeAbbreviation(convertTo)

    return this._convertValue(normalizedFrom, normalizedTo, numberToConvert)
  }
}
