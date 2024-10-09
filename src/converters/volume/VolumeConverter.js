/**
 * Module for the volume converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../../InputValidator.js'

export class VolumeConverter {
  #inputValidator

  /**
   * Conversion rate from gallons to liters.
   */
  #galToLConversionRate

  /**
   * Conversion rate from pints to liters.
   */
  #ptToLConversionRate

  /**
   * Conversion rate from cups to deciliters.
   */
  cToDlConversionRate

  constructor() {
    this.#inputValidator = new InputValidator()
    this.#galToLConversionRate = 0.26417
    this.#ptToLConversionRate = 2.1134
    this.cToDlConversionRate = 2.3658
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
   * Handles volume conversion selection and converts the number.
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
      case 'liters':
      case 'l':
        switch (convertToInLowerCase) {
          case 'gallons':
          case 'gal':
            return this.#litersToGallons(numberToConvert)
          case 'pints':
          case 'pt':
            return this.#litersToPints(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'gallons':
      case 'gal':
        switch (convertToInLowerCase) {
          case 'liters':
          case 'l':
            return this.#gallonsToLiters(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'pints':
      case 'pt':
        switch (convertToInLowerCase) {
          case 'liters':
          case 'l':
            return this.#pintsToLiters(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'cups':
      case 'c':
        switch (convertToInLowerCase) {
          case 'deciliters':
          case 'dl':
            return this.#cupsToDeciliters(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      case 'deciliters':
      case 'dl':
        switch (convertToInLowerCase) {
          case 'cups':
          case 'c':
            return this.#decilitersToCups(numberToConvert)
          default:
            throw new Error('Conversion not available')
        }
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   *Converts the volume from liters to gallons.
   *
   * @param {Number} gallons - The volume to be converted
   * @return {Number} - The volume in liters
   */
  #gallonsToLiters(gallons) {
    return gallons / this.#galToLConversionRate
  }

  /**
   * Converts the volume from liters to gallons.
   *
   * @param {Number} liters - The volume to be converted
   * @return {Number} - The volume in gallons 
   */
  #litersToGallons(liters) {
    return liters * this.#galToLConversionRate
  }

  /**
   * Converts the volume from pints to liters.
   *
   * @param {Number} pints - The volume to be converted
   * @return {Number} - The volume in liters
   */
  #pintsToLiters(pints) {
    return pints / this.#ptToLConversionRate
  }

  /**
   * Converts the volume from liters to pints.
   *
   * @param {Number} liters - The volume to be converted
   * @return {Number} - The volume in pints
   */
  #litersToPints(liters) {
    return liters * this.#ptToLConversionRate
  }

  /**
   * Converts the volume from cups to deciliters.
   * 
   * @param {Number} cups - The volume to be converted
   * @return {Number} - The volume in deciliters
   */
  #cupsToDeciliters(cups) {
    return cups * this.cToDlConversionRate
  }

  /**
   * Converts the volume from deciliters to cups.
   *
   * @param {Number} deciliters - The volume to be converted
   * @return {Number} - The volume in cups
   */
  #decilitersToCups(deciliters) {
    return deciliters / this.cToDlConversionRate
  }
}
