/**
 * Module for the miles/hour to kilometers/hour converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class MphToKmhConverter extends ConversionStrategy {
  /**
   * Conversion rate from miles/hour to kilometers/hour.
   */
  #mphToKmhConversionRate

  constructor() {
    super()
    this.#mphToKmhConversionRate = 1.609344
  }

  /**
   * Converts the speed from miles/hour to kilometers/hour.
   *
   * @param {Number} milesPerHour - The speed to be converted
   * @return {Number} - The speed in km/h
   */
  convert(milesPerHour) {
    return milesPerHour * this.#mphToKmhConversionRate
  }
}