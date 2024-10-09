/**
 * Module for the length converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { Converter } from '../Converter.js'
import { CentimetersToInchesConverter } from './CentimetersToInchesConverter.js'
import { FeetToMetersConverter } from './FeetToMetersConverter.js'
import { InchesToCentimetersConverter } from './InchesToCentimetersConverter.js'
import { MetersToFeetConverter } from './MetersToFeetConverter.js'

export class LengthConverter extends Converter {
  constructor() {
    super()

    // The unit abbreviation conversions
    this._unitAbbreviationConversions = {
      'm': 'meters',
      'ft': 'feet',
      'cm': 'centimeters',
      'in': 'inches'
    }

    // The available conversions
    this._availableConversions = {
      "meters-feet": new MetersToFeetConverter(),
      "feet-meters": new FeetToMetersConverter(),
      "centimeters-inches": new CentimetersToInchesConverter(),
      "inches-centimeters": new InchesToCentimetersConverter()
    }
  }

  /**
   * Handles length conversion selection and converts the number.
   * 
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @returns {Number} - The converted number
   */
  convert(convertFrom, convertTo, numberToConvert) {
    this._validateNumberInput(numberToConvert)
    this._validateStringInputs(convertFrom, convertTo)

    const normalizedFrom = this._normalizeAbbreviation(convertFrom.toLowerCase())
    const normalizedTo = this._normalizeAbbreviation(convertTo.toLowerCase())
    
    return this._convertValue(normalizedFrom, normalizedTo, numberToConvert)
  }
}
