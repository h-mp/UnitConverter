/**
 * Module for the centimeters to inches converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class CentimetersToInchesConverter extends ConversionStrategy {
  /**
   * Conversion rate from centimeters to inches.
   */
  #cmToInConversionRate

  constructor() {
    super()
    this.#cmToInConversionRate = 0.39370
  }

  /**
   * Converts the number from centimeters to inches.
   * 
   * @param {Number} centimeters - The number to convert in centimeters
   * @returns {Number} - The converted number
   */
  convert(centimeters) {
    return centimeters * this.#cmToInConversionRate
  }
}
