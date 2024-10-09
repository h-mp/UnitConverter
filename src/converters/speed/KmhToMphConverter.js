/**
 * Module for the kilometers/hour to miles/hour converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { ConversionStrategy } from '../../strategies/ConvesionStrategy.js'

export class KmhToMphConverter extends ConversionStrategy {
  /**
   * Conversion rate from kilometers/hour to miles/hour.
   */
  #kmhToMphConversionRate

  constructor() {
    super()
    this.#kmhToMphConversionRate = 1.609344
  }

  /**
   * Converts the speed from kilometers/hour to miles/hour.
   *
   * @param {Number} kilometersPerHour - The speed to be converted
   * @return {Number} - The speed in mph
   */
  convert(kilometersPerHour) {
    return kilometersPerHour / this.#kmhToMphConversionRate
  }
}