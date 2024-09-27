/**
 * Module for the volume converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

/**
 * A class to convert volumes.
 */
export class VolumeConverter {
  /**
   * Private field for the conversion rate from gallons to liters.
   */
  #galToLConversionRate

  /**
   * Private field for the conversion rate from pints to liters.
   */
  #ptToLConversionRate

  /**
   * The constructor.
   */
  constructor() {
    this.#galToLConversionRate = 0.26417
    this.#ptToLConversionRate = 2.1134
  }

  /**
   * Validates the input.
   *
   * @param {Number} temperature - The volume to be converted
   * @throws {Error} - If the volume is not a number
   */
  #inputValidation(volume) {
    if (typeof volume !== 'number' || isNaN(volume)) {
      throw new Error('Volume must be a number')
    }
  }

  /**
   *Converts the volume from liters to gallons.
   *
   * @param {Number} gallons - The volume to be converted
   * @return {Number} - The volume in liters
   */
  gallonsToLiters(gallons) {
    this.#inputValidation(gallons)

    const liters = gallons / this.#galToLConversionRate
    return liters
  }

  /**
   * Converts the volume from liters to gallons.
   *
   * @param {Number} liters - The volume to be converted
   * @return {Number} - The volume in gallons 
   */
  litersToGallons(liters) {
    this.#inputValidation(liters)

    const gallons = liters * this.#galToLConversionRate
    return gallons
  }

  /**
   * Converts the volume from pints to liters.
   *
   * @param {Number} pints - The volume to be converted
   * @return {Number} - The volume in liters
   */
  pintsToLiters(pints) {
    this.#inputValidation(pints)

    const liters = pints / this.#ptToLConversionRate
    return liters
  }

  /**
   * Converts the volume from liters to pints.
   *
   * @param {Number} liters - The volume to be converted
   * @return {Number} - The volume in pints
   */
  litersToPints(liters) {
    this.#inputValidation(liters)

    const pints = liters * this.#ptToLConversionRate
    return pints
  }
}
