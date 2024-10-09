/**
 * Module for the meters to feet converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class MetersToFeetConverter extends ConversionStrategy {
  /**
   * Conversion rate from meters to feet.
   */
  #mToFtConversionRate

  constructor() {
    super()
    this.#mToFtConversionRate = 3.2808
  }

  /**
   * Converts the number from meters to feet.
   * 
   * @param {Number} meters - The number to convert in meters
   * @returns {Number} - The converted number
   */
  convert(meters) {
    return meters * this.#mToFtConversionRate
  }
}
