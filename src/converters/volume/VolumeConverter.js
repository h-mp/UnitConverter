/**
 * Module for the volume converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { Converter } from '../Converter.js'
import { CupsToDecilitersConverter } from './CupsToDecilitersConverter.js'
import { DecilitersToCupsConverter } from './DecilitersToCupsConverter.js'
import { GallonsToLitersConverter } from './GallonsToLitersConverter.js'
import { LitersToGallonsConverter } from './LitersToGallonsConverter.js'
import { PintsToLitersConverter } from './PintsToLitersConverter.js'
import { LitersToPintsConverter } from './LitersToPintsConverter.js'

export class VolumeConverter extends Converter {

  constructor() {
    super()

    this._unitAbbreviationConversions = {
      "c": "cups",
      "dl": "deciliters",
      "gal": "gallons",
      "l": "liters",
      "pt": "pints"
    }

    this._availableConversions = {
      "cups-deciliters": new CupsToDecilitersConverter(),
      "deciliters-cups": new DecilitersToCupsConverter(),
      "gallons-liters": new GallonsToLitersConverter(),
      "liters-gallons": new LitersToGallonsConverter(),
      "pints-liters": new PintsToLitersConverter(),
      "liters-pints": new LitersToPintsConverter()
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
  convert(convertFrom, convertTo, numberToConvert) {
    this._validateNumberInput(numberToConvert)
    this._validateStringInputs(convertFrom, convertTo)

    const normalizedFrom = this._normalizeAbbreviation(convertFrom)
    const normalizedTo = this._normalizeAbbreviation(convertTo)

    return this._convertValue(normalizedFrom, normalizedTo, numberToConvert)
  }
}
