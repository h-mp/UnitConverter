# Unit Conversion Module
1dv610 Laboration 2
Version 1.0.0

## Introduktion
This module allows you to convert various units of measurement, currently temperature, weight, length, and volume, from units commonly used in the US to units typically used in Europe. 
The module is currently only available in english.

## Available conversions

### Temperature

| From | To |
|------|----|
| Celsius (C) | Fahrenheit (F) |
| Fahrenheit (F) | Celsius (C) |

### Length

| From | To |
|------|----|
| Meters (M) | Feet (Ft) |
| Feet (Ft) | Meters (M) |
| Centimeters (Cm) | Inches (In) |
| Inches (In) | Centimeters (Cm) |

### Weight

| From | To |
|------|----|
| Kilograms (Kg) | Pounds (Lb) |
| Pounds (Lb) | Kilograms (Kg) |
| Grams (G) | Ounces (Oz) |
| Ounces (Oz) | Grams (G) |

### Volume

| From | To |
|------|----|
| Liters (L) | Gallons (Gal) |
| Gallons (Gal) | Liters (L) |
| Liters (L) | Pints (Pt) |
| Pints (Pt) | Liters (L) |
| Deciliters (Dl) | Cups (c) |
| Cups (c) | Deciliters (Dl) |


## How to use

### Available methods
All available methods:
- convertTemperature( convertFrom, convertTo, numberToConvert )
- convertLength( convertFrom, convertTo, numberToConvert )
- convertWeight( convertFrom, convertTo, numberToConvert )
- convertVolume( convertFrom, convertTo, numberToConvert )

```sh
const converter = new ConverterSystem()

// All available methods:

const convertedTemperature = converter.convertTemperature('celsius', 'fahrenheit', 56)

const convertedLength = converter.convertLength('m', 'ft', 13)

const convertedWeight = converter.convertWeight('kg', 'lb', 24)

const convertedVolume = converter.convertVolume('deciliters', 'cups', 19)
```

### Parameters
All methods take three parameters
- String, the unit to convert from
- String, the unit to convert to
- Number, the number to convert

Send full unit names as parameters...
```sh
const convertedTemperature = converter.convertTemperature('celsius', 'fahrenheit', 56)
```
...or use abbreviations.
```sh
const convertedTemperature = converter.convertTemperature('C', 'F', 56)
```

Usage of upper or lower case letters does not matter.
This
```sh
const convertedWeight = converter.convertWeight('kg', 'lb', 24)
```
returns the same result as this
```sh
const convertedWeight = converter.convertWeight('Kg', 'Lb', 24)
```

### Restrictions
