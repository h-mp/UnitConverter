/**
 * Module for the conversion strategy interface.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

export class ConversionStrategy {
  /**
   * Converts the number.
   * 
   * @param {Number} number - The number to convert
   */
  convert(number) {
    throw new Error('You have to implement the method convert!')
  }
}