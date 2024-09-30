/**
 * Module for the speed converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../InputValidator.js'

export class SpeedConverter {
  #inputValidator

  /**
   * Conversion rate from miles/hour to kilometers/hour.
   */
  #mphToKmphConversionRate

  /**
   * Conversion rate fron feet/second to meters/second.
   */
  #fpsToMpsConversionRate

  constructor() {
    this.#inputValidator = new InputValidator()

    this.#mphToKmphConversionRate = 1.609344
    this.#fpsToMpsConversionRate = 3.280840
  }

  /**
   * Validates the input.
   * 
   * @param {*} input - The input
   */
  #validateInput(input) {
    this.#inputValidator.validateInputTypeNumber(input)
    this.#inputValidator.validatePositiveNumber(input)
  }

  /**
   * Converts the speed from miles/hour to kilometers/hour.
   *
   * @param {Number} milesPerHour - The speed to be converted
   * @return {Number} - The speed in km/h
   */
  milesPerHourToKilometersPerHour(milesPerHour) {
    this.#validateInput(milesPerHour)

    const kilometersPerHour = milesPerHour * this.#mphToKmphConversionRate
    return kilometersPerHour
  }

  /**
   * Converts the speed from kilometers/hour to miles/hour.
   *
   * @param {Number} kilometersPerHour - The speed to be converted
   * @return {Number} - The speed in mph
   */
  kilometersPerHourToMilesPerHour(kilometersPerHour) {
    this.#validateInput(kilometersPerHour)

    const milesPerHour = kilometersPerHour / this.#mphToKmphConversionRate
    return milesPerHour
  }

  /**
   * Converts the speed from feet/second to meters/second.
   *
   * @param {Number} feetPerSecond - The speed to be converted
   * @return {Number} - The speed in m/s
   */
  feetPerSecondToMetersPerSecond(feetPerSecond) {
    this.#validateInput(feetPerSecond)

    const metersPerSecond = feetPerSecond / this.#fpsToMpsConversionRate
    return metersPerSecond
  }

  /**
   * Converts the speed from meters/second to feet/second
   *
   * @param {Number} metersPerSecond - The speed to be converted
   * @return {Number} - The speed in ft/s
   */
  metersPerSecondToFeetPerSecond(metersPerSecond) {
    this.#validateInput(metersPerSecond)

    const feetPerSecond = metersPerSecond * this.#fpsToMpsConversionRate
    return feetPerSecond
  }
}
