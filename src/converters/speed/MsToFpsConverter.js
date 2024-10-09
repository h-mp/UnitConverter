/**
 * Module for the meters/second to feet/second converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class MsToFpsConverter extends ConversionStrategy {
  /**
   * Conversion rate from meters/second to feet/second.
   */
  #msToFpsConversionRate

  constructor() {
    super()
    this.#msToFpsConversionRate = 3.280840
  }

  /**
   * Converts the speed from meters/second to feet/second
   *
   * @param {Number} metersPerSecond - The speed to be converted
   * @return {Number} - The speed in feet/second
   */
  convert(metersPerSecond) {
    return metersPerSecond * this.#msToFpsConversionRate
  }
}