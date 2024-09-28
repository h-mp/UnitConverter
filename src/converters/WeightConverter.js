/**
 * Module for the weight converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../InputValidator.js'

/**
 * A class to convert weights.
 */
export class WeightConverter {
  /**
   * The input validator.
   */
  #inputValidator

  /**
   * Conversion rate from kilograms to pounds.
   */
  #kgToLbConversionRate

  /**
   * Conversion rate from kilograms to ounces.
   */
  #gToOzConversionRate

  /**
   * The constructor.
   */
  constructor() {
    this.#inputValidator = new InputValidator()
    this.#kgToLbConversionRate = 2.2046
    this.#gToOzConversionRate = 0.035274
  }

  /**
   * Validates the input.
   *
   * @param {*} input - The input
   */
  #validateInput(input) {
    this.#inputValidator.validateInputType(input)
    this.#inputValidator.validatePositiveNumber(input)
  }

  /**
   * Converts the weight from kilograms to pounds.
   *
   * @param {Number} kilograms - The weight to be converted
   * @returns {Number} - The weight in pounds
   */
  kilogramsToPounds(kilograms) {
    this.#validateInput(kilograms)

    const pounds = kilograms * this.#kgToLbConversionRate
    return pounds
  }

  /**
   * Converts the weight from pounds to kilograms.
   *
   * @param {Number} pounds - The weight to be converted
   * @returns {Number} - The weight in kilograms
   */
  poundsToKilograms(pounds) {
    this.#validateInput(pounds)

    const kilograms = pounds / this.#kgToLbConversionRate
    return kilograms
  }

  /**
   * Converts the weight from grams to ounces.
   *
   * @param {Number} grams - The weight to be converted
   * @returns {Number} - The weight in ounces
   */
  gramsToOunces(grams) {
    this.#validateInput(grams)

    const ounces = grams * this.#gToOzConversionRate
    return ounces
  }

  /**
   * Converts the weight from ounces to grams.
   *
   * @param {Number} ounces - The weight to be converted
   * @returns {Number} - The weight in grams
   */
  ouncesToGrams(ounces) {
    this.#validateInput(ounces)

    const grams = ounces / this.#gToOzConversionRate
    return grams
  }
}
