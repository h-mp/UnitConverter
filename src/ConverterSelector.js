/**
 * Module for the converter selector class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { LengthConverter } from './converters/LengthConverter.js'
import { TemperatureConverter } from './converters/TemperatureConverter.js'
import { VolumeConverter } from './converters/VolumeConverter.js'
import { WeightConverter } from './converters/WeightConverter.js'

export class ConverterSelector {
  #lengthConverter

  #temperatureConverter

  #volumeConverter

  #weightConverter

  constructor() {
    this.#lengthConverter = new LengthConverter()
    this.#temperatureConverter = new TemperatureConverter()
    this.#volumeConverter = new VolumeConverter()
    this.#weightConverter = new WeightConverter()
  }

  /**
   * Converts the temperature in Celsius to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromCelsius(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'fahrenheit':
      case 'f':
        return this.#temperatureConverter.celsiusToFahrenheit(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the temperature in Fahrenheit to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromFahrenheit(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'celsius':
      case 'c':
        return this.#temperatureConverter.fahrenheitToCelsius(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the meters to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromMeters(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'feet':
      case 'ft':
        return this.#lengthConverter.metersToFeet(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the feet to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromFeet(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'meters':
      case 'm':
        return this.#lengthConverter.feetToMeters(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the centimeters to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromCentimeters(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'inches':
      case 'in':
        return this.#lengthConverter.centimetersToInches(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the inches to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromInches(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'centimeters':
      case 'cm':
        return this.#lengthConverter.inchesToCentimeters(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the kilograms to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromKilograms(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'pounds':
      case 'lb':
        return this.#weightConverter.kilogramsToPounds(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the pounds to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromPounds(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'kilograms':
      case 'kg':
        return this.#weightConverter.poundsToKilograms(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the grams to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromGrams(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'ounces':
      case 'oz':
        return this.#weightConverter.gramsToOunces(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the ounces to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromOunces(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'grams':
      case 'g':
        return this.#weightConverter.ouncesToGrams(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the liters to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromLiters(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'gallons':
      case 'gal':
        return this.#volumeConverter.litersToGallons(numberToConvert)
      case 'pints':
      case 'pt':
        return this.#volumeConverter.litersToPints(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the gallons to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromGallons(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'liters':
      case 'l':
        return this.#volumeConverter.gallonsToLiters(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the pints to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromPints(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'liters':
      case 'l':
        return this.#volumeConverter.pintsToLiters(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the deciliters to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromDeciliters(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'cups':
      case 'c':
        return this.#volumeConverter.decilitersToCups(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }

  /**
   * Converts the cups to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertFromCups(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'deciliters':
      case 'dl':
        return this.#volumeConverter.cupsToDeciliters(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }
}
