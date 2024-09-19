/**
 * Module for the weight converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

/**
 * A class to convert weights.
 */
export class WeightConverter {
  /**
   * Private field for the conversion rate from kilograms to pounds.
   */
  #kgToLbConversionRate

  /**
   * Private field for the conversion rate from kilograms to ounces.
   */
  #gToOzConversionRate

  /**
   * The constructor.
   */
  constructor() {
    this.#kgToLbConversionRate = 2.2046
    this.#gToOzConversionRate = 0.035274
  }

  /**
   * Validates the input weight.
   * 
   * @param {Number} weight - The weight to be converted
   * @throws {Error} - If the weight is not a number
   */
  #inputValidation(weight) {
    if (typeof weight !== 'number' || isNaN(weight)) {
      throw new Error('Weight must be a number')
    }
  }

  /**
   * Converts the weight from kilograms to pounds.
   *
   * @param {Number} kilograms - The weight to be converted
   * @returns {Number} - The weight in pounds
   */
  kilogramsToPounds(kilograms) {
    this.#inputValidation(kilograms)

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
    this.#inputValidation(pounds)

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
    this.#inputValidation(grams)

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
    this.#inputValidation(ounces)

    const grams = ounces / this.#gToOzConversionRate
    return grams
  }
}
