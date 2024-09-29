/**
 * Module for the volume converter class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../InputValidator.js'

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
   */
  #validateInput(input) {
    this.#inputValidator.validateInputTypeNumber(input)
    this.#inputValidator.validatePositiveNumber(input)
  }

  /**
   *Converts the volume from liters to gallons.
   *
   * @param {Number} gallons - The volume to be converted
   * @return {Number} - The volume in liters
   */
  gallonsToLiters(gallons) {
    this.#validateInput(gallons)

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
    this.#validateInput(liters)

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
    this.#validateInput(pints)

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
    this.#validateInput(liters)

    const pints = liters * this.#ptToLConversionRate
    return pints
  }

  /**
   * Converts the volume from cups to deciliters.
   * 
   * @param {Number} cups - The volume to be converted
   * @return {Number} - The volume in deciliters
   */
  cupsToDeciliters(cups) {
    this.#validateInput(cups)

    const deciliters = cups * this.cToDlConversionRate
    return deciliters
  }

  /**
   * Converts the volume from deciliters to cups.
   *
   * @param {Number} deciliters - The volume to be converted
   * @return {Number} - The volume in cups
   */
  decilitersToCups(deciliters) {
    this.#validateInput(deciliters)

    const cups = deciliters / this.cToDlConversionRate
    return cups
  }
}
