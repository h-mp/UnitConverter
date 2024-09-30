# Unit Conversion Module
1dv610 Laboration 2

Version 1.0.0

License MIT

## Introduktion
This module allows you to convert various units of measurement, including temperature, length, speed, weight, and volume, between metric units (commonly used in Europe) and imperial units (commonly used in the US). The module can also convert multiple values of the same conversion.

The module can be integrated into for example recipe, fitness and health, weather, and travel applications.

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

### Speed

| From | To |
|------|----|
| Miles per hour (Mph, Mi/h) | Kilometers per hour (Kmph, Km/h) |
| Kilometers per hour (Kmph, Km/h) | Miles per hour (Mph, Mi/h) |
| Feet per second (Fps, F/s) | Meters per second (Mps, M/s) |
| Meters per second (Mps, M/s) | Feet per second (Fps, F/s) |

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

## Installation


## How to use

The `ConverterSystem` class provides methods to convert various units of measurement between metric and imperial systems.

### Available methods

All available methods (more specific descriptions further down):
- **convertTemperature**( convertFrom, convertTo, numberToConvert )
- **convertLength**( convertFrom, convertTo, numberToConvert )
- **convertSpeed**( convertFrom, convertTo, numberToConvert )
- **convertWeight**( convertFrom, convertTo, numberToConvert )
- **convertVolume**( convertFrom, convertTo, numberToConvert )
- **convertMultipleValues**( conversionType, convertFrom, convertTo, numbersToConvert )

```javascript
const converter = new ConverterSystem()

// Examples of use for all available methods:

const convertedTemperature = converter.convertTemperature('celsius', 'fahrenheit', 56)

const convertedLength = converter.convertLength('m', 'ft', 13)

const convertedSpeed = converter.convertSpeed('mph', 'km/h', 56)

const convertedWeight = converter.convertWeight('kg', 'lb', 24)

const convertedVolume = converter.convertVolume('deciliters', 'cups', 19)

const convertedValues = converter.convertMultipleValues('length', 'cm', 'in', [7, 12, 35, 42])
```

More specific description for each method:

- **convertTemperature**( convertFrom, convertTo, numberToConvert )
  - **Parameters:**
    - `convertFrom` (String): The unit to convert from (e.g., 'C', 'F').
    - `convertTo` (String): The unit to convert to (e.g., 'F', 'C').
    - `numberToConvert` (Number): The number to convert.
  - **Returns:** (Number) The converted temperature.

- **convertLength**( convertFrom, convertTo, numberToConvert )
  - **Parameters:**
    - `convertFrom` (String): The unit to convert from (e.g., 'ft', 'cm').
    - `convertTo` (String): The unit to convert to (e.g., 'm', 'in').
    - `numberToConvert` (Number): The number to convert.
  - **Returns:** (Number) The converted length.

- **convertSpeed**( convertFrom, convertTo, numberToConvert )
  - **Parameters:**
    - `convertFrom` (String): The unit to convert from (e.g., 'mph', 'm/s').
    - `convertTo` (String): The unit to convert to (e.g., 'km/h', 'fps').
    - `numberToConvert` (Number): The number to convert.
  - **Returns:** (Number) The converted speed.

- **convertWeight**( convertFrom, convertTo, numberToConvert )
  - **Parameters:**
    - `convertFrom` (String): The unit to convert from (e.g., 'kg', 'oz').
    - `convertTo` (String): The unit to convert to (e.g., 'lb', 'g').
    - `numberToConvert` (Number): The number to convert.
  - **Returns:** (Number) The converted weight.

- **convertVolume**( convertFrom, convertTo, numberToConvert )
  - **Parameters:**
    - `convertFrom` (String): The unit to convert from (e.g., 'l', 'dl').
    - `convertTo` (String): The unit to convert to (e.g., 'gal', 'c').
    - `numberToConvert` (Number): The number to convert.
  - **Returns:** (Number) The converted volume.

- **convertMultipleValues**( conversionType, convertFrom, convertTo, numbersToConvert )
  - **Parameters:**
      - `conversionType` (String): The type of conversion (e.g., 'temperature', 'length').
      - `convertFrom` (String): The unit to convert from (e.g., 'C', 'm').
      - `convertTo` (String): The unit to convert to (e.g., 'F', 'ft').
      - `numbersToConvert` (Array): The array of numbers to convert.
  - **Returns:** (Array) The array of converted numbers.

### Parameters
The methods to convert a single value take three parameters
- **String**, the unit to convert from (i.e kg, in, l, C)
- **String**, the unit to convert to (i.e lb, cm, gal, F)
- **Number**, the number to convert

```javascript
const convertedTemperature = converter.convertTemperature('C', 'F', 35)
// Output: 95
```

The method to convert multiple values takes four parameters
- **String**, the conversion type i.e temperature, length, weight, volume
- **String**, the unit to convert from (i.e kg, in, l, C)
- **String**, the unit to convert to (i.e lb, cm, gal, F)
- **Array**, the array of numbers to convert

```javascript
const convertedValue = converter.convertMultipleValues('temperature', 'C', 'F', [-40, -20, 35, 50])
// Output: [-40, -4, 95, 122]
```

<br>

Both full unit names and abbreviations work as parameters.
```javascript
const convertedTemperature = converter.convertTemperature('celsius', 'fahrenheit', 56)

const convertedTemperature = converter.convertTemperature('C', 'F', 56)
```


Usage of upper or lower case letters does not matter.
This...
```javascript
const convertedWeight = converter.convertWeight('kg', 'lb', 24)
```
...returns the same result as this
```javascript
const convertedWeight = converter.convertWeight('Kg', 'Lb', 24)
```

The number parameter can also be a decimal.

### Restrictions
Only the previously listed available conversions can be used, the list is updated when new conversions are added. 

When sending the full unit name as a parameter, write it in **plural** (i.e kilograms, feet). Alternatively when using abbreviations write it in **singular** (i.e kg, ft). 
You can use the spellings of the available conversions listed previously as an example.

**Only the convertTemperature() method handles negative numbers.** In all other methods you must use numbers over 0. 

The convertTemperature only handles numbers **above the absolute freezing point** (-273.15°C or -459.67°F).
