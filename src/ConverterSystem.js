/**
 * Module for the converter system class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from './InputValidator.js'
import { LengthConverter } from './converters/LengthConverter.js'
import { TemperatureConverter } from './converters/TemperatureConverter.js'
import { VolumeConverter } from './converters/VolumeConverter.js'
import { WeightConverter } from './converters/WeightConverter.js'

/**
 * A class to handle all conversions.
 */
export class ConverterSystem {
  #inputValidator

  #lengthConverter

  #temperatureConverter

  #volumeConverter

  #weightConverter

  constructor() {
    this.#inputValidator = new InputValidator()
    this.#lengthConverter = new LengthConverter()
    this.#temperatureConverter = new TemperatureConverter()
    this.#volumeConverter = new VolumeConverter()
    this.#weightConverter = new WeightConverter()
  }

  /**
   * Validates the inputs
   * 
   * @param {*} convertFrom - The input for the unit to convert from
   * @param {*} convertTo - The input for the unit to convert to
   * @param {*} numberToConvert - The input for the number to convert
   */
  #validateInputs(convertFrom, convertTo, numberToConvert) {
    this.#inputValidator.validateInputTypeString(convertFrom)
    this.#inputValidator.validateInputTypeString(convertTo)
    this.#inputValidator.validateInputTypeNumber(numberToConvert)
  }

  /**
   * Handles temperature conversion selection and converts the number.
   *
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertTemperature(convertFrom, convertTo, numberToConvert) {
    this.#validateInputs(convertFrom, convertTo, numberToConvert)

    switch (convertFrom.toLowerCase()) {
      case 'celsius':
      case 'c':
        this.#inputValidator.validateCelsiusRange(numberToConvert)
        return this.#convertFromCelsius(convertTo, numberToConvert)
      case 'fahrenheit':
      case 'f':
        this.#inputValidator.validateFahrenheitRange(numberToConvert)
        return this.#convertFromFahrenheit(convertTo, numberToConvert)
      default:
        throw new Error('Conversion not available')
      }
    }

  /**
   * Handles length conversion selection and converts the number.
   *
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertLength(convertFrom, convertTo, numberToConvert) {
    this.#validateInputs(convertFrom, convertTo, numberToConvert)
    this.#inputValidator.validatePositiveNumber(numberToConvert)

    switch (convertFrom.toLowerCase()) {
      case 'meters':
      case 'm':
        return this.#convertFromMeters(convertTo, numberToConvert)
      case 'feet':
      case 'ft':
        return this.#convertFromFeet(convertTo, numberToConvert)
      case 'centimeters':
      case 'cm':
        return this.#convertFromCentimeters(convertTo, numberToConvert)
      case 'inches':
      case 'in':
        return this.#convertFromInches(convertTo, numberToConvert)
      default:
        throw new Error('Conversion not available')
      }
    }

  /**
   * Handles weight conversion selection and converts the number.
   *
   * @param {String} convertFrom - The unit to convert from
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  convertWeight(convertFrom, convertTo, numberToConvert) {
    this.#validateInputs(convertFrom, convertTo, numberToConvert)
    this.#inputValidator.validatePositiveNumber(numberToConvert)

    switch (convertFrom.toLowerCase()) {
      case 'kilograms':
      case 'kg':
        return this.#convertFromKilograms(convertTo, numberToConvert)
      case 'pounds':
      case 'lb':
        return this.#convertFromPounds(convertTo, numberToConvert)
      case 'grams':
      case 'g':
        return this.#convertFromGrams(convertTo, numberToConvert)
      case 'ounces':
      case 'oz':
        return this.#convertFromOunces(convertTo, numberToConvert)
      default:
        throw new Error('Conversion not available')
      }
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
  convertVolume(convertFrom, convertTo, numberToConvert) {
    this.#validateInputs(convertFrom, convertTo, numberToConvert)
    this.#inputValidator.validatePositiveNumber(numberToConvert)

    switch (convertFrom.toLowerCase()) {
      case 'liters':
      case 'l':
        return this.#convertFromLiters(convertTo, numberToConvert)
      case 'gallons':
      case 'gal':
        return this.#convertFromGallons(convertTo, numberToConvert)
      case 'pints':
      case 'pt':
        return this.#convertFromPints(convertTo, numberToConvert)
      case 'deciliters':
      case 'dl':
        return this.#convertFromDeciliters(convertTo, numberToConvert)
      case 'cups':
      case 'c':
        return this.#convertFromCups(convertTo, numberToConvert)
      default:
        throw new Error('Conversion not available')
      }
    }

  /**
   * Converts the temperature in Celsius to the selected unit.
   * 
   * @param {String} convertTo - The unit to convert to
   * @param {Number} numberToConvert - The number to convert
   * @throws {Error} - If the conversion is not available
   * @returns {Number} - The converted number
   */
  #convertFromCelsius(convertTo, numberToConvert) {
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
  #convertFromFahrenheit(convertTo, numberToConvert) {
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
  #convertFromMeters(convertTo, numberToConvert) {
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
  #convertFromFeet(convertTo, numberToConvert) {
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
  #convertFromCentimeters(convertTo, numberToConvert) {
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
  #convertFromInches(convertTo, numberToConvert) {
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
  #convertFromKilograms(convertTo, numberToConvert) {
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
  #convertFromPounds(convertTo, numberToConvert) {
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
  #convertFromGrams(convertTo, numberToConvert) {
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
  #convertFromOunces(convertTo, numberToConvert) {
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
  #convertFromLiters(convertTo, numberToConvert) {
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
  #convertFromGallons(convertTo, numberToConvert) {
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
  #convertFromPints(convertTo, numberToConvert) {
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
  #convertFromDeciliters(convertTo, numberToConvert) {
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
  #convertFromCups(convertTo, numberToConvert) {
    switch(convertTo.toLowerCase()) {
      case 'deciliters':
      case 'dl':
        return this.#volumeConverter.cupsToDeciliters(numberToConvert)
      default:
        throw new Error('Conversion not available')
    }
  }
}
