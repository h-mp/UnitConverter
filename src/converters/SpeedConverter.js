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
   * @throws {Error} - If the input is not a number
   * @throws {Error} - If the input is not a positive number
   */
  #validateInput(input) {
    this.#inputValidator.validateInputTypeNumber(input)
    this.#inputValidator.validatePositiveNumber(input)
  }

  /**
   * Handles speed conversion selection and converts the number.
   * 
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convert(convertFrom, convertTo, numberToConvert) {
    this.#validateInput(numberToConvert)
    const convertToInLowerCase = convertTo.toLowerCase()

    switch (convertFrom.toLowerCase()) {
      case 'miles per hour':
      case 'mph':
        switch (convertToInLowerCase) {
          case 'kilometers per hour':
          case 'km/h':
            return this.#milesPerHourToKilometersPerHour(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'kilometers per hour':
      case 'km/h':
        switch (convertToInLowerCase) {
          case 'miles per hour':
          case 'mph':
            return this.#kilometersPerHourToMilesPerHour(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'feet per second':
      case 'fps':
        this.#validateInput(numberToConvert)

        switch (convertToInLowerCase) {
          case 'meters per second':
          case 'm/s':
            return this.#feetPerSecondToMetersPerSecond(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'meters per second':
      case 'm/s':
        switch (convertToInLowerCase) {
          case 'feet per second':
          case 'fps':
            return this.#metersPerSecondToFeetPerSecond(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the speed from miles/hour to kilometers/hour.
   *
   * @param {Number} milesPerHour - The speed to be converted
   * @return {Number} - The speed in km/h
   */
  #milesPerHourToKilometersPerHour(milesPerHour) {
    return milesPerHour * this.#mphToKmphConversionRate
  }

  /**
   * Converts the speed from kilometers/hour to miles/hour.
   *
   * @param {Number} kilometersPerHour - The speed to be converted
   * @return {Number} - The speed in mph
   */
  #kilometersPerHourToMilesPerHour(kilometersPerHour) {
    return kilometersPerHour / this.#mphToKmphConversionRate
  }

  /**
   * Converts the speed from feet/second to meters/second.
   *
   * @param {Number} feetPerSecond - The speed to be converted
   * @return {Number} - The speed in m/s
   */
  #feetPerSecondToMetersPerSecond(feetPerSecond) {
    return feetPerSecond / this.#fpsToMpsConversionRate
  }

  /**
   * Converts the speed from meters/second to feet/second
   *
   * @param {Number} metersPerSecond - The speed to be converted
   * @return {Number} - The speed in fps
   */
  #metersPerSecondToFeetPerSecond(metersPerSecond) {
    return metersPerSecond * this.#fpsToMpsConversionRate
  }
}
