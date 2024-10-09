/**
 * Module for the feet/second to meters/second converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class FpsToMsConverter extends ConversionStrategy {
  /**
   * Conversion rate from feet/second to meters/second.
   */
  #fpsToMsConversionRate

  constructor() {
    super()
    this.#fpsToMsConversionRate = 3.280840
  }

  /**
   * Converts the number from feet/second to meters/second.
   * 
   * @param {Number} meters - The number to convert in meters/second
   * @returns {Number} - The converted number
   */
  convert(feetPerSecond) {
    return feetPerSecond / this.#fpsToMsConversionRate
  }
}
