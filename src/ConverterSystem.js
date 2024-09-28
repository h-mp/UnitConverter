/**
 * Module for the converter system class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { InputValidator } from '../InputValidator.js'
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
}
